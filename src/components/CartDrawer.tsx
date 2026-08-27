"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();
  const [checkoutMode, setCheckoutMode] = useState<"cart" | "form">("cart");
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = async () => {
    // Generate order text
    let message = "Hello, I want to place an order:\n\n";
    cart.forEach(item => {
      message += `${item.name} × ${item.quantity} — ₹${item.price * item.quantity}\n`;
    });
    message += `\n*Total: ₹${totalAmount}*\n\n`;
    
    // Attempt to save to DB as WhatsApp order first
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: "WhatsApp User",
          phone: "Pending",
          address: "Pending",
          items: cart,
          totalAmount,
          orderType: "WHATSAPP"
        })
      });
    } catch (e) {
      console.error("Failed to save whatsapp order attempt", e);
    }

    // Redirect to WhatsApp
    const whatsappNumber = "919876543210"; // Placeholder, should come from config ideally
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  const handleWebsiteCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          address: formData.address,
          items: cart,
          totalAmount,
          orderType: "WEBSITE"
        })
      });
      const data = await res.json();
      if (res.ok) {
        setOrderSuccess(data.order.orderNumber);
        clearCart();
      } else {
        alert("Failed to place order.");
      }
    } catch (e) {
      alert("Error placing order.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {orderSuccess ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed!</h3>
              <p className="text-gray-600 mb-4">Your order #{orderSuccess} has been placed successfully.</p>
              <button 
                onClick={() => { setIsCartOpen(false); setOrderSuccess(null); setCheckoutMode("cart"); }}
                className="px-6 py-2 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700"
              >
                Continue Shopping
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              Your cart is empty.
            </div>
          ) : checkoutMode === "cart" ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border p-3 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">-</button>
                    <span className="font-bold text-gray-800">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">+</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleWebsiteCheckout} className="space-y-4 text-gray-800">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded-lg" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Phone</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-2 border rounded-lg" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Address</label>
                <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full p-2 border rounded-lg" placeholder="Delivery Address" rows={3}></textarea>
              </div>
              <div className="pt-4 flex space-x-3">
                <button type="button" onClick={() => setCheckoutMode("cart")} className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300">Back</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700">
                  {isSubmitting ? "Placing..." : "Place Order"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {!orderSuccess && cart.length > 0 && checkoutMode === "cart" && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold text-gray-800">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="space-y-3">
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 flex items-center justify-center gap-2"
              >
                Order via WhatsApp
              </button>
              <button 
                onClick={() => setCheckoutMode("form")}
                className="w-full py-3 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700"
              >
                Order on Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

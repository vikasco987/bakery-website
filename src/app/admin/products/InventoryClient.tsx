"use client";

import React, { useState } from 'react';

type Category = {
  id: string;
  name: string;
  image: string | null;
};

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string | null;
  isVeg: boolean;
  categoryId: string;
  category: Category;
};

export default function InventoryClient({ initialCategories, initialProducts }: { initialCategories: Category[], initialProducts: Product[] }) {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

  // Modals state
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  
  // Editing state
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [categoryForm, setCategoryForm] = useState({ name: '', image: '' });
  const [productForm, setProductForm] = useState({ 
    name: '', description: '', price: '', image: '', isVeg: true, categoryId: '' 
  });

  const openCategoryModal = (cat?: Category) => {
    if (cat) {
      setEditingCategory(cat);
      setCategoryForm({ name: cat.name, image: cat.image || '' });
    } else {
      setEditingCategory(null);
      setCategoryForm({ name: '', image: '' });
    }
    setCategoryModalOpen(true);
  };

  const openProductModal = (prod?: Product) => {
    if (prod) {
      setEditingProduct(prod);
      setProductForm({ 
        name: prod.name, 
        description: prod.description, 
        price: prod.price.toString(), 
        image: prod.image || '', 
        isVeg: prod.isVeg, 
        categoryId: prod.categoryId 
      });
    } else {
      setEditingProduct(null);
      setProductForm({ 
        name: '', description: '', price: '', image: '', isVeg: true, categoryId: categories[0]?.id || '' 
      });
    }
    setProductModalOpen(true);
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingCategory ? `/api/categories/${editingCategory.id}` : `/api/categories`;
    const method = editingCategory ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryForm)
    });

    if (res.ok) {
      const { category } = await res.json();
      if (editingCategory) {
        setCategories(categories.map(c => c.id === category.id ? category : c));
      } else {
        setCategories([category, ...categories]);
      }
      setCategoryModalOpen(false);
    } else {
      alert("Error saving category");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure? This may fail if products are linked to it.")) return;
    const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setCategories(categories.filter(c => c.id !== id));
    } else {
      alert("Error deleting category");
    }
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingProduct ? `/api/products/${editingProduct.id}` : `/api/products`;
    const method = editingProduct ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productForm)
    });

    if (res.ok) {
      const { product } = await res.json();
      if (editingProduct) {
        setProducts(products.map(p => p.id === product.id ? product : p));
      } else {
        setProducts([product, ...products]);
      }
      setProductModalOpen(false);
    } else {
      alert("Error saving product");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProducts(products.filter(p => p.id !== id));
    } else {
      alert("Error deleting product");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('products')} 
          className={`py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'products' ? 'border-[#e0356b] text-[#e0356b]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('categories')} 
          className={`py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'categories' ? 'border-[#e0356b] text-[#e0356b]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Categories
        </button>
      </div>

      {activeTab === 'categories' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <button onClick={() => openCategoryModal()} className="bg-[#e0356b] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-[#c22055] transition">
              + Add Category
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">Image</th>
                  <th className="p-3">Name</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {categories.map(cat => (
                  <tr key={cat.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      {cat.image ? (
                        <img src={cat.image} alt={cat.name} className="w-12 h-12 object-cover rounded-md border" />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">No Img</div>
                      )}
                    </td>
                    <td className="p-3 font-bold">{cat.name}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => openCategoryModal(cat)} className="text-blue-600 hover:underline mr-4 font-semibold">Edit</button>
                      <button onClick={() => handleDeleteCategory(cat.id)} className="text-red-600 hover:underline font-semibold">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Products</h2>
            <button onClick={() => openProductModal()} className="bg-[#e0356b] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-[#c22055] transition">
              + Add Product
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">Image</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Type</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {products.map(prod => (
                  <tr key={prod.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      {prod.image ? (
                        <img src={prod.image} alt={prod.name} className="w-12 h-12 object-cover rounded-md border" />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">No Img</div>
                      )}
                    </td>
                    <td className="p-3 font-bold">
                      {prod.name}
                      <div className="text-xs font-normal text-gray-500 truncate max-w-xs">{prod.description}</div>
                    </td>
                    <td className="p-3">{prod.category?.name || 'Unknown'}</td>
                    <td className="p-3 font-bold">₹{prod.price}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${prod.isVeg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {prod.isVeg ? 'VEG' : 'NON-VEG'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={() => openProductModal(prod)} className="text-blue-600 hover:underline mr-4 font-semibold">Edit</button>
                      <button onClick={() => handleDeleteProduct(prod.id)} className="text-red-600 hover:underline font-semibold">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
            <form onSubmit={handleSaveCategory}>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input required type="text" value={categoryForm.name} onChange={e => setCategoryForm({...categoryForm, name: e.target.value})} className="w-full border p-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
                <input type="text" value={categoryForm.image} onChange={e => setCategoryForm({...categoryForm, image: e.target.value})} className="w-full border p-2 rounded-md" placeholder="https://..." />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button type="button" onClick={() => setCategoryModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#e0356b] text-white rounded-md font-bold">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={handleSaveProduct}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                  <input required type="text" value={productForm.name} onChange={e => setProductForm({...productForm, name: e.target.value})} className="w-full border p-2 rounded-md" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                  <textarea value={productForm.description} onChange={e => setProductForm({...productForm, description: e.target.value})} className="w-full border p-2 rounded-md" rows={2}></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Price (₹)</label>
                  <input required type="number" step="0.01" value={productForm.price} onChange={e => setProductForm({...productForm, price: e.target.value})} className="w-full border p-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                  <select required value={productForm.categoryId} onChange={e => setProductForm({...productForm, categoryId: e.target.value})} className="w-full border p-2 rounded-md bg-white">
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
                  <input type="text" value={productForm.image} onChange={e => setProductForm({...productForm, image: e.target.value})} className="w-full border p-2 rounded-md" placeholder="https://..." />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <input type="checkbox" id="isVeg" checked={productForm.isVeg} onChange={e => setProductForm({...productForm, isVeg: e.target.checked})} className="w-4 h-4 text-[#e0356b] rounded border-gray-300 focus:ring-[#e0356b]" />
                  <label htmlFor="isVeg" className="text-sm font-bold text-gray-700">Is Vegetarian (Green Dot)</label>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <button type="button" onClick={() => setProductModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#e0356b] text-white rounded-md font-bold">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

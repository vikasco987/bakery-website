import urllib.request
from PIL import Image, ImageDraw, ImageFilter
import io

def create_banner():
    # 1. Canvas setup
    width, height = 1920, 1080
    bg_color = (29, 18, 16) # #1D1210
    banner = Image.new('RGB', (width, height), bg_color)

    # 2. Add some "design type" background glows to the left
    draw = ImageDraw.Draw(banner)
    
    # Pink glow
    pink_glow = Image.new('RGBA', (800, 800), (0, 0, 0, 0))
    pink_draw = ImageDraw.Draw(pink_glow)
    pink_draw.ellipse([0, 0, 800, 800], fill=(230, 57, 104, 20)) # #E63968 with low opacity
    pink_glow = pink_glow.filter(ImageFilter.GaussianBlur(120))
    banner.paste(pink_glow, (-200, 100), pink_glow)
    
    # Yellow glow
    yellow_glow = Image.new('RGBA', (600, 600), (0, 0, 0, 0))
    yellow_draw = ImageDraw.Draw(yellow_glow)
    yellow_draw.ellipse([0, 0, 600, 600], fill=(230, 200, 117, 10)) # #E6C875
    yellow_glow = yellow_glow.filter(ImageFilter.GaussianBlur(100))
    banner.paste(yellow_glow, (800, 600), yellow_glow)

    # 3. Fetch cake image
    url = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    cake_img = Image.open(io.BytesIO(response.read())).convert("RGBA")
    
    # Resize cake image to be smaller (e.g., 75% of height) so it doesn't get cut off
    cake_aspect = cake_img.width / cake_img.height
    new_cake_height = int(height * 0.75)
    new_cake_width = int(new_cake_height * cake_aspect)
    cake_img = cake_img.resize((new_cake_width, new_cake_height), Image.Resampling.LANCZOS)
    
    # 4. Create an alpha mask to fade the left edge of the cake image
    mask = Image.new('L', (new_cake_width, new_cake_height), 255)
    mask_draw = ImageDraw.Draw(mask)
    fade_width = 300
    for x in range(fade_width):
        alpha = int(255 * (x / fade_width))
        mask_draw.line([(x, 0), (x, new_cake_height)], fill=alpha)
    
    cake_img.putalpha(mask)

    # 5. Paste cake image onto the right side of the banner, centered vertically
    paste_x = width - new_cake_width
    paste_y = (height - new_cake_height) // 2
    
    if paste_x < 0:
        paste_x = 0
        
    paste_pos = (width - new_cake_width - 50, paste_y) # slightly padded from the right edge
    
    banner.paste(cake_img, paste_pos, cake_img)

    # 6. Save the final composite banner
    banner.save('public/images/full-banner.jpg', quality=95)
    print("Banner created successfully at public/images/full-banner.jpg")

if __name__ == "__main__":
    create_banner()

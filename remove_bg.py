import urllib.request
from PIL import Image
import io
import os
import sys

# Ensure user-installed packages are in the path
sys.path.append(os.path.expanduser('~/.local/lib/python3.9/site-packages'))
sys.path.append(os.path.expanduser('~/Library/Python/3.9/lib/python/site-packages'))

try:
    from rembg import remove
except ImportError:
    print("rembg not yet available")
    sys.exit(1)

def create_transparent_cake():
    print("Fetching image...")
    url = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    input_image = Image.open(io.BytesIO(response.read()))
    
    print("Removing background...")
    output_image = remove(input_image)
    
    # Save the transparent image
    output_image.save('public/images/transparent-cake.png', format="PNG")
    print("Saved transparent image to public/images/transparent-cake.png")

if __name__ == "__main__":
    create_transparent_cake()

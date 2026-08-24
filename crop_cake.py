from PIL import Image
import os

def crop_transparent_image():
    img_path = 'public/images/transparent-cake.png'
    
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
        
    img = Image.open(img_path)
    # getbbox returns the bounding box of the non-zero regions in the image
    bbox = img.getbbox()
    
    if bbox:
        # Crop the image to the bounding box
        img = img.crop(bbox)
        img.save('public/images/transparent-cake-cropped.png')
        print(f"Image cropped successfully. New size: {img.size}")
    else:
        print("Image is entirely transparent.")

if __name__ == "__main__":
    crop_transparent_image()

from PIL import Image, ImageDraw, ImageOps
import sys

def create_thumb(path, out):
    img = Image.open(path)
    img = ImageOps.exif_transpose(img)
    img.thumbnail((800, 800))
    img.save(out)
    print(f"{path} transposed size: {img.size}")

create_thumb('/tmp/file_attachments/20261001_081427.jpg', 'thumb1.jpg')
create_thumb('/tmp/file_attachments/20261001_081437.jpg', 'thumb2.jpg')

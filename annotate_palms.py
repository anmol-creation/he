from PIL import Image, ImageDraw, ImageFont, ImageOps

def annotate_image(input_path, output_path, hand_type):
    img = Image.open(input_path)
    img = ImageOps.exif_transpose(img)

    # Resize to 1200x1600 for consistent coordinate mapping
    img = img.resize((1200, 1600), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(img, 'RGBA')

    try:
        font = ImageFont.truetype("DejaVuSans-Bold.ttf", 24)
    except IOError:
        font = ImageFont.load_default()

    def draw_highlight(box, text, color):
        # Draw ellipse outline
        draw.ellipse(box, outline=color, width=5)
        # Draw text background
        text_bbox = draw.textbbox((0, 0), text, font=font)
        text_w = text_bbox[2] - text_bbox[0]
        text_h = text_bbox[3] - text_bbox[1]
        x_center = (box[0] + box[2]) / 2
        y_center = (box[1] + box[3]) / 2

        bg_box = [x_center - text_w/2 - 5, y_center - text_h/2 - 5, x_center + text_w/2 + 5, y_center + text_h/2 + 5]
        draw.rectangle(bg_box, fill=(0, 0, 0, 150))
        draw.text((x_center - text_w/2, y_center - text_h/2), text, fill=color, font=font)

    if hand_type == 'right':
        # Coordinates for 1200x1600 (Right hand)
        draw_highlight([120, 1100, 440, 1560], "Shukra\n(Malavya Yoga)", (255, 105, 180, 255))
        draw_highlight([900, 960, 1100, 1160], "Mangal\n(Ruchaka Yoga)", (255, 0, 0, 255))
        draw_highlight([440, 1000, 800, 1300], "Rahu\n(Lagna)", (100, 149, 237, 255))
        draw_highlight([540, 680, 660, 780], "Shani\n(Neech Bhang)", (0, 191, 255, 255))
        draw_highlight([360, 720, 500, 800], "Guru", (255, 215, 0, 255))
    else:
        # Coordinates for 1200x1600 (Left hand)
        draw_highlight([760, 1100, 1140, 1560], "Shukra\n(Malavya Yoga)", (255, 105, 180, 255))
        draw_highlight([100, 960, 300, 1160], "Mangal\n(Ruchaka Yoga)", (255, 0, 0, 255))
        draw_highlight([400, 1000, 760, 1300], "Rahu\n(Lagna)", (100, 149, 237, 255))
        draw_highlight([540, 680, 660, 780], "Shani\n(Neech Bhang)", (0, 191, 255, 255))
        draw_highlight([700, 720, 840, 800], "Guru", (255, 215, 0, 255))

    img.save(output_path)
    print(f"Saved {output_path}")

annotate_image('/tmp/file_attachments/20261001_081427.jpg', 'annotated_right_hand.jpg', 'right')
annotate_image('/tmp/file_attachments/20261001_081437.jpg', 'annotated_left_hand.jpg', 'left')

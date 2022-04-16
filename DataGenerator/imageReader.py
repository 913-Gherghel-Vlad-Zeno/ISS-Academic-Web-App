from PIL import Image
from pytesseract import pytesseract

if __name__ == '__main__':
    path_to_tesseract = r"C:\Program Files\Tesseract\tesseract.exe"
    image_path = r"img.png"

    # Opening the image & storing it in an image object
    img = Image.open(image_path)

    # Providing the tesseract executable
    # location to pytesseract library
    pytesseract.tesseract_cmd = path_to_tesseract

    # Passing the image object to image_to_string() function
    # This function will extract the text from the image
    text = pytesseract.image_to_string(img)

    # Displaying the extracted text
    print(text[:-1])

from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import numpy as np
from keras.preprocessing.image import load_img, img_to_array
from keras.models import load_model
# from PIL import Image
from bs4 import BeautifulSoup
import os
import requests
model=load_model('FV.h5')
app = Flask(__name__)

#define all the functions here
labels = {0: 'apple', 1: 'banana', 2: 'beetroot', 3: 'bell pepper', 4: 'cabbage', 5: 'capsicum', 6: 'carrot',
          7: 'cauliflower', 8: 'chilli pepper', 9: 'corn', 10: 'cucumber', 11: 'eggplant', 12: 'garlic', 13: 'ginger',
          14: 'grapes', 15: 'jalepeno', 16: 'kiwi', 17: 'lemon', 18: 'lettuce',
          19: 'mango', 20: 'onion', 21: 'orange', 22: 'paprika', 23: 'pear', 24: 'peas', 25: 'pineapple',
          26: 'pomegranate', 27: 'potato', 28: 'raddish', 29: 'soy beans', 30: 'spinach', 31: 'sweetcorn',
          32: 'sweetpotato', 33: 'tomato', 34: 'turnip', 35: 'watermelon'}
average_calories = {
    'apple': 52,'banana': 89,'beetroot': 43,'bell pepper': 31,'cabbage': 25,'capsicum': 40,'carrot': 41,'cauliflower': 25,'chilli pepper': 40,'corn': 96,'cucumber': 15,'eggplant': 25,'garlic': 149,'ginger': 80,'grapes': 69,'jalepeno': 27,'kiwi': 61,'lemon': 29,'lettuce': 15,'mango': 60,'onion': 40,'orange': 62,'paprika': 31,'pear': 57,'peas': 81,'pineapple': 50,'pomegranate': 83,'potato': 77,'radish': 16,'soy beans': 173,'spinach': 23,'sweetcorn': 86,'sweetpotato': 86,'tomato': 18,'turnip': 28,'watermelon': 30
}
fruits = ['Apple', 'Banana', 'Bello Pepper', 'Chilli Pepper', 'Grapes', 'Jalepeno', 'Kiwi', 'Lemon', 'Mango', 'Orange',
          'Paprika', 'Pear', 'Pineapple', 'Pomegranate', 'Watermelon']
vegetables = ['Beetroot', 'Cabbage', 'Capsicum', 'Carrot', 'Cauliflower', 'Corn', 'Cucumber', 'Eggplant', 'Ginger',
              'Lettuce', 'Onion', 'Peas', 'Potato', 'Raddish', 'Soy Beans', 'Spinach', 'Sweetcorn', 'Sweetpotato',
              'Tomato', 'Turnip']


def check_for_fruits(prediction):
  for fuit in fruits:
    if fuit==prediction:
        return True
  return False

def check_for_veges(prediction):
  for fuit in vegetables:
    if fuit==prediction:
        return True
  return False

def h_c_get_calories(prediction):
   for fruits, calories in average_calories.items():
      if fruits == prediction:
          return calories
   return None

def fetch_calories(prediction):
    try:
        url = 'https://www.google.com/search?&q=calories in ' + prediction
        req = requests.get(url).text
        scrap = BeautifulSoup(req, 'html.parser')
        calories = scrap.find("div", class_="BNeawe iBp4i AP7Wnd")
        return calories.text
    except Exception as e:
        print("Exception occured")
        return print(e)

def get_calories_from_food_name(food_name):
    url = f"https://www.myfitnesspal.com/food/search?page=1&search={food_name}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    result = soup.find('div', class_='search-results')
    
    if result:
        item = result.find('div', class_='food-description')
        if item:
            item_name = item.find('a').text.strip()
            item_calories = item.find('div', class_='food-description-secondary')
            print(item_calories.text.strip())
            return print({'food_name': item_name, 'calories': item_calories})
    
    return print({'error': 'Food not found or calories not available'})

def processed_img(img_path):
    img = load_img(img_path, target_size=(224, 224, 3))
    img = img_to_array(img)
    img = img / 255
    img = np.expand_dims(img, [0])
    answer = model.predict(img)
    y_class = answer.argmax(axis=-1)
    print(y_class)
    y = " ".join(str(x) for x in y_class)
    y = int(y)
    res = labels[y]
    print(res)
    return res

UPLOAD_FOLDER = './uploads/'

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
  return '.' in filename and \
         filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['POST'])
def upload_image():
  if request.method == 'POST':
    image_data = request.files['image']
    cal=0
    if (image_data):
      print(image_data)
      print("Image uploaded successfully! by me")  # Print success message
      img_bytes = image_data.read()
      print(len(img_bytes))   # Check the size of the image file
      # print(image_data.filename)
      if (image_data):
        filename = secure_filename(image_data.filename)
        # print(filename)
        # image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        # image_data.save(image_path)
        # print(image_path)
        save_image_path = './uploads/' + image_data.name
        with open(save_image_path, "wb") as f:
            f.write(image_data.getbuffer())

        if image_data is not None:  
          result = processed_img(save_image_path)
          print("Result from model : ",result)
          print(result)

        cal = h_c_get_calories(result)
        print('Calories are ',cal)
    print(cal)
    print(type(jsonify(cal)))
    return jsonify(cal)
  return jsonify({'error': 'No image data received'})
        # if(check_for_fruits==True):
        #    return jsonify(cal)
        # else:
        #    return jsonify(cal)
        

if __name__ == '__main__':
  app.run(debug=True)

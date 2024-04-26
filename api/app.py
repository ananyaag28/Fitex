from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import numpy as np
from keras.preprocessing.image import load_img, img_to_array
from keras.models import load_model
# from PIL import Image
from bs4 import BeautifulSoup
from flask_cors import CORS
import os
import requests
model=load_model('FV.h5')
app = Flask(__name__)
CORS(app)

#define all the functions here
labels = {0: 'apple', 1: 'banana', 2: 'beetroot', 3: 'bell pepper', 4: 'cabbage', 5: 'capsicum', 6: 'carrot',
          7: 'cauliflower', 8: 'chilli pepper', 9: 'corn', 10: 'cucumber', 11: 'eggplant', 12: 'garlic', 13: 'ginger',
          14: 'grapes', 15: 'jalepeno', 16: 'kiwi', 17: 'lemon', 18: 'lettuce',
          19: 'mango', 20: 'onion', 21: 'orange', 22: 'paprika', 23: 'pear', 24: 'peas', 25: 'pineapple',
          26: 'pomegranate', 27: 'potato', 28: 'raddish', 29: 'soy beans', 30: 'spinach', 31: 'sweetcorn',
          32: 'sweetpotato', 33: 'tomato', 34: 'turnip', 35: 'watermelon'}
def get_nutritional_info(item_name):
    # Dictionary containing average nutritional information
    average_content = {
        'Apple': {'carbohydrate': 14, 'protein': 0.3, 'calories': 52},
        'Banana': {'carbohydrate': 23, 'protein': 1.1, 'calories': 89},
        'Bello Pepper': {'carbohydrate': 6, 'protein': 1, 'calories': 20},
        'Chilli Pepper': {'carbohydrate': 9, 'protein': 2, 'calories': 40},
        'Grapes': {'carbohydrate': 18, 'protein': 0.6, 'calories': 69},
        'Jalepeno': {'carbohydrate': 6, 'protein': 1.2, 'calories': 29},
        'Kiwi': {'carbohydrate': 15, 'protein': 1.1, 'calories': 61},
        'Lemon': {'carbohydrate': 9, 'protein': 1.1, 'calories': 29},
        'Mango': {'carbohydrate': 15, 'protein': 0.8, 'calories': 60},
        'Orange': {'carbohydrate': 12, 'protein': 1.3, 'calories': 47},
        'Paprika': {'carbohydrate': 6, 'protein': 1.3, 'calories': 31},
        'Pear': {'carbohydrate': 15, 'protein': 0.4, 'calories': 57},
        'Pineapple': {'carbohydrate': 13, 'protein': 0.5, 'calories': 50},
        'Pomegranate': {'carbohydrate': 18, 'protein': 1.7, 'calories': 83},
        'Watermelon': {'carbohydrate': 8, 'protein': 0.6, 'calories': 30},
        'Beetroot': {'carbohydrate': 10, 'protein': 1.6, 'calories': 43},
        'Cabbage': {'carbohydrate': 6, 'protein': 1.3, 'calories': 25},
        'Capsicum': {'carbohydrate': 9, 'protein': 2, 'calories': 40},
        'Carrot': {'carbohydrate': 9, 'protein': 0.9, 'calories': 41},
        'Cauliflower': {'carbohydrate': 5, 'protein': 1.9, 'calories': 25},
        'Corn': {'carbohydrate': 19, 'protein': 3.4, 'calories': 86},
        'Cucumber': {'carbohydrate': 3, 'protein': 0.7, 'calories': 16},
        'Eggplant': {'carbohydrate': 6, 'protein': 0.98, 'calories': 25},
        'Ginger': {'carbohydrate': 18, 'protein': 1.8, 'calories': 80},
        'Lettuce': {'carbohydrate': 2, 'protein': 1.4, 'calories': 15},
        'Onion': {'carbohydrate': 9, 'protein': 1.1, 'calories': 40},
        'Peas': {'carbohydrate': 14, 'protein': 5.4, 'calories': 81},
        'Potato': {'carbohydrate': 17, 'protein': 2, 'calories': 77},
        'Raddish': {'carbohydrate': 4, 'protein': 0.7, 'calories': 16},
        'Soy Beans': {'carbohydrate': 9, 'protein': 12, 'calories': 173},
        'Spinach': {'carbohydrate': 3, 'protein': 2.9, 'calories': 23},
        'Sweetcorn': {'carbohydrate': 19, 'protein': 3.4, 'calories': 86},
        'Sweetpotato': {'carbohydrate': 20, 'protein': 1.6, 'calories': 86},
        'Tomato': {'carbohydrate': 4, 'protein': 0.9, 'calories': 18},
        'Turnip': {'carbohydrate': 6, 'protein': 0.9, 'calories': 28}
    }
    
    # Convert item_name to title case for case-insensitive matching
    item_name = item_name.title()
    
    # Check if item_name exists in the dictionary
    if item_name in average_content:
        return f"It is an {item_name} and proteins are: {average_content[item_name]['protein']} gm/100gm and carbohydrates are: {average_content[item_name]['carbohydrate']} gm/100gm and calories are: {average_content[item_name]['calories']} gm/100gm"
    else:
        return "Item not found in the list"

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
          result.capitalize()
        
        # cal = h_c_get_calories(result)


        # print('Calories are ',cal)
        yuvi = (get_nutritional_info(result))
        return jsonify({'Result': yuvi}), 200
    print(type(cal))
    print(type(jsonify(cal)))
    return jsonify({'message': 'POST OKAY'}),200
  return jsonify({'error': 'No image data received'}),500
        
        

if __name__ == '__main__':
  app.run(debug=True)

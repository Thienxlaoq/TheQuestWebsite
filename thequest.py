from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/')
@app.route('/map')
def index():
    return render_template('map.html')


@app.route('/home')
def contacts():
    return render_template('home.html')


app.run(debug=True)

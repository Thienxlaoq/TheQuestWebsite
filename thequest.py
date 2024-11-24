from flask import Flask, render_template

import datetime


app = Flask(__name__, template_folder='templates')


@app.route('/')
@app.route('/map')
def index():
    return render_template(
        'map.html',
        header_class='transparent-full-header',
        active_page='map'
    )


@app.route('/info_center')
def info_center():
    return render_template(
        'info_center.html', active_page='info_center',
        header_class='black-header',
    )


@app.route('/profile')
def profile():
    return render_template('profile.html', active_page='profile')


if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template

import datetime


app = Flask(__name__, template_folder='templates')


@app.route('/')
@app.route('/map')
def index():
    return render_template('map.html', active_page='map')


@app.route('/info_center')
def info_center():
    now = datetime.datetime.now()
    now_day = now.day
    current_month_name = now.strftime("%B")  # Название месяца
    now_year = now.year

    return render_template(
        'info_center.html', active_page='info_center',
        now_day=now_day,
        current_month_name=current_month_name,
        now_year=now_year,
        now=now
    )

@app.route('/profile')
def profile():
    return render_template('profile.html', active_page='profile')



if __name__ == '__main__':
    app.run(debug=True)

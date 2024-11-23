import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape


now = datetime.datetime.now()


if __name__ == '__main__':
    now_day = now.day
    current_month_name = now.strftime("%B")
    now_year = now.year

    env = Environment(
        loader=FileSystemLoader('.'),
        autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('home.html')

    rendered_page = template.render(
        now_day=now_day,
        current_month_name=current_month_name,
        now_year=now_year
    )

    with open('home.html', 'w', encoding="utf8") as file:
        file.write(rendered_page)

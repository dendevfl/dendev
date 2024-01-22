from logging import _STYLES
from tkinter import font
import rxconfig as rx
import reflex as rx

from den_dev.views.navbar import navbar
from den_dev.views.header import header
from den_dev.views.footer import footer

def index() -> rx.Component:
    return rx.box(
        navbar(),
        header(),
        footer(),
    )


# Add state and page to the app.
app = rx.App(

)
app.add_page(
    index,
    title="DenDev",
    description="Hola, mi nombre es Den. Soy desarrollador freelance de aplicaciones Web y Android",
    image="logodendev.png.png"
    ),
app.compile()
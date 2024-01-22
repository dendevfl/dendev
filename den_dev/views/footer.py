import reflex as rx
import datetime

def footer() -> rx.Component:
    return rx.center(rx.vstack(
        rx.avatar(
            src="dendev.png.png",
            size="sm",
        ),
        rx.text(
            f"© 2023-{datetime.date.today().year} DENDEV BY DEN. MADE WITH 🤍 IN PLAYA DEL CARMEN, Q ROO."
        ),
         bg="#202020",
         font_size="0.7em",
         width="100%",
         padding="3px",

    ),
    )
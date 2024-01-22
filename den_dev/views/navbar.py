from cgitb import text
import reflex as rx

def navbar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.avatar(
                src="dendev.png.png",
                size="md"
            ),
            rx.text(
                "DenDev",
                color="#FF914D",
                font_size="3em"       
                ),
            rx.spacer(),
            rx.spacer(),
            
            rx.button(
                rx.hstack(
                    rx.icon(
                        tag="email",
                    ),
                    rx.text("Contacto",
                    variant="unstyled"
                  ),
                ),
        ),
        position="sticky",
        bg="#202020",
        width="100%",
        padding_x="20px",
        padding_y="10px",
        white_space="normal",
        z_index="999",
    ),
    )
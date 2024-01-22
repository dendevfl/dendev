from turtle import width
import reflex as rx

def header() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.image(
                src="dendev2.png.png",
                width="100px",
                height="auto",
                border_radius="50px 50px",
                border="3px solid #FF914D",
                box_shadow="lg"
),      
        rx.center(
            rx.heading("HOLA 👋🏻 MI NOMBRE ES DEN!",
            size="lg",
            width="100%",
            max_width="100%",
),
),
        rx.center(
            rx.text("""Soy desarrollador de aplicaciones Web y Android, con una experiencia previa en ventas y administración contable y financiera.
                DenDev es el resultado de combinar mis habilidades técnicas con mi experiencia en éstos ámbitos.""",
            width="50%",
            max_width="100%",
),
        ),

        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.center(rx.heading(
            "¿Qué es DenDev?",
            size="lg",
            width="100%",
            max_width="100%",
),
        ),
    
        rx.spacer(),

        rx.image(
            src="logodendev.png.png",
            width="200px",
            height="auto",
            border_radius="150px 150px",
            border="5px solid #000000",
            box_shadow="lg",
),

        rx.spacer(),

        rx.text("""DenDev no es solo un sitio web; es una herramienta diseñada con empatía y conocimiento directo de las necesidades de los administrativos y vendedores.
                Esta plataforma busca simplificar y mejorar los procesos comerciales para que puedan centrarse en lo que hacen mejor: administrar y vender.""",
                width="50%",
                max_width="100%",
                border="1px solid #FF914D",
                border_radius="5px",
                bg="#111111",
                padding="6px",
),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.center(
            rx.heading(
            "Tecnologías Aplicadas",
            size="lg",
            width="100%",
            max_width="100%",
),
        ),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.hstack(
            rx.image(
            src="icons/python.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/html5.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/css3-alt.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/js.svg"
        ),
            width="50%",
            max_width="100%",
        ),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.hstack(
            rx.image(
            src="icons/java.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/node-js.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/git.svg"
        ),
        rx.spacer(),
              rx.image(
            src="icons/github.svg"
        ),
            width="50%",
            max_width="100%",

        ),

        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.heading(
            "Cómo DenDev Refleja mi Experiencia",
            size="lg",
            width="50%",
            max_width="100%",
),

        rx.spacer(),
        rx.spacer(),

        rx.text("""Mi tiempo como administrativo y vendedor me enseñó la importancia de la eficiencia y la adaptabilidad en el mundo empresarial.
                DenDev no solo incorpora mis habilidades de desarrollo, sino que también refleja mi comprensión directa de los desafíos que enfrentan los profesionales en estos roles.""",
                width="50%",
                max_width="100%",
                border="1px solid #FF914D",
                border_radius="5px",
                bg="#111111",
                padding="6px",
),

        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.heading(
            "Historial Académico",
            size="lg",
            width="50%",
            max_width="100%",
),

        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),

        rx.vstack(
            rx.hstack(
             rx.avatar(
                src="mouredev.png",
                size="lg"
            ),
            rx.vstack(
                rx.heading("PYTHON PARA WEB", size="sm"),
                rx.heading("MOUREDEV", size="sm"),
                align_items="start",
            ),
        ),

        rx.spacer(),
        rx.spacer(),

        rx.hstack(
             rx.avatar(
                src="udemy.png",
                size="lg"
            ),
            rx.vstack(
                rx.heading("MACHINE LEARNING - R y PYTHON PARA DATA SINCE", size="sm"),
                rx.heading("UDEMY", size="sm"),
                align_items="start",
            ),
        ),

        rx.spacer(),
        rx.spacer(),

        rx.hstack(
             rx.avatar(
                src="henry.png",
                size="lg"
            ),
            rx.vstack(
                rx.heading("CIENCIAS DE LA COMUNICACIÓN Y PROGRAMACIÓN", size="sm"),
                rx.heading("HENRY", size="sm"),
                align_items="start",
            ),
        ),

        rx.spacer(),
        rx.spacer(),

        rx.hstack(
             rx.avatar(
                src="udemy.png",
                size="lg"
            ),
            rx.vstack(
                rx.heading("PROGRAMACIÓN PARA DESARROLLO WEB FULLSTACK", size="sm"),
                rx.heading("UDEMY", size="sm"),
                align_items="start",
            ),
        ),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
            width="50%",
            align_items="start",

        ),
        max_width="100%",
        padding="30px",
        bg="#000000",
),
)
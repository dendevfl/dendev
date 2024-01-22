/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar, Box, Button, Center, Heading, HStack, Image as ChakraImage, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EmailIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Box>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#202020", "width": "100%", "paddingX": "20px", "paddingY": "10px", "whiteSpace": "normal", "zIndex": "999"}}>
  <Avatar size={`md`} src={`dendev.png.png`}/>
  <Text sx={{"color": "#FF914D", "fontSize": "3em"}}>
  {`DenDev`}
</Text>
  <Spacer/>
  <Spacer/>
  <Button>
  <HStack>
  <EmailIcon/>
  <Text sx={{"variant": "unstyled"}}>
  {`Contacto`}
</Text>
</HStack>
</Button>
</HStack>
</Box>
  <Center>
  <VStack sx={{"maxWidth": "100%", "padding": "30px", "bg": "#000000"}}>
  <ChakraImage src={`dendev2.png.png`} sx={{"width": "100px", "height": "auto", "borderRadius": "50px 50px", "border": "3px solid #FF914D", "boxShadow": "lg"}}/>
  <Center>
  <Heading size={`lg`} sx={{"width": "100%", "maxWidth": "100%"}}>
  {`HOLA 👋🏻 MI NOMBRE ES DEN!`}
</Heading>
</Center>
  <Center>
  <Text sx={{"width": "50%", "maxWidth": "100%"}}>
  {`Soy desarrollador de aplicaciones Web y Android, con una experiencia previa en ventas y administración contable y financiera.
                DenDev es el resultado de combinar mis habilidades técnicas con mi experiencia en éstos ámbitos.`}
</Text>
</Center>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Center>
  <Heading size={`lg`} sx={{"width": "100%", "maxWidth": "100%"}}>
  {`¿Qué es DenDev?`}
</Heading>
</Center>
  <Spacer/>
  <ChakraImage src={`logodendev.png.png`} sx={{"width": "200px", "height": "auto", "borderRadius": "150px 150px", "border": "5px solid #000000", "boxShadow": "lg"}}/>
  <Spacer/>
  <Text sx={{"width": "50%", "maxWidth": "100%", "border": "1px solid #FF914D", "borderRadius": "5px", "bg": "#111111", "padding": "6px"}}>
  {`DenDev no es solo un sitio web; es una herramienta diseñada con empatía y conocimiento directo de las necesidades de los administrativos y vendedores.
                Esta plataforma busca simplificar y mejorar los procesos comerciales para que puedan centrarse en lo que hacen mejor: administrar y vender.`}
</Text>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Center>
  <Heading size={`lg`} sx={{"width": "100%", "maxWidth": "100%"}}>
  {`Tecnologías Aplicadas`}
</Heading>
</Center>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <HStack sx={{"width": "50%", "maxWidth": "100%"}}>
  <ChakraImage src={`icons/python.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/html5.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/css3-alt.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/js.svg`}/>
</HStack>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <HStack sx={{"width": "50%", "maxWidth": "100%"}}>
  <ChakraImage src={`icons/java.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/node-js.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/git.svg`}/>
  <Spacer/>
  <ChakraImage src={`icons/github.svg`}/>
</HStack>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Heading size={`lg`} sx={{"width": "50%", "maxWidth": "100%"}}>
  {`Cómo DenDev Refleja mi Experiencia`}
</Heading>
  <Spacer/>
  <Spacer/>
  <Text sx={{"width": "50%", "maxWidth": "100%", "border": "1px solid #FF914D", "borderRadius": "5px", "bg": "#111111", "padding": "6px"}}>
  {`Mi tiempo como administrativo y vendedor me enseñó la importancia de la eficiencia y la adaptabilidad en el mundo empresarial.
                DenDev no solo incorpora mis habilidades de desarrollo, sino que también refleja mi comprensión directa de los desafíos que enfrentan los profesionales en estos roles.`}
</Text>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Heading size={`lg`} sx={{"width": "50%", "maxWidth": "100%"}}>
  {`Historial Académico`}
</Heading>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <VStack alignItems={`start`} sx={{"width": "50%"}}>
  <HStack>
  <Avatar size={`lg`} src={`mouredev.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`sm`}>
  {`PYTHON PARA WEB`}
</Heading>
  <Heading size={`sm`}>
  {`MOUREDEV`}
</Heading>
</VStack>
</HStack>
  <Spacer/>
  <Spacer/>
  <HStack>
  <Avatar size={`lg`} src={`udemy.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`sm`}>
  {`MACHINE LEARNING - R y PYTHON PARA DATA SINCE`}
</Heading>
  <Heading size={`sm`}>
  {`UDEMY`}
</Heading>
</VStack>
</HStack>
  <Spacer/>
  <Spacer/>
  <HStack>
  <Avatar size={`lg`} src={`henry.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`sm`}>
  {`CIENCIAS DE LA COMUNICACIÓN Y PROGRAMACIÓN`}
</Heading>
  <Heading size={`sm`}>
  {`HENRY`}
</Heading>
</VStack>
</HStack>
  <Spacer/>
  <Spacer/>
  <HStack>
  <Avatar size={`lg`} src={`udemy.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`sm`}>
  {`PROGRAMACIÓN PARA DESARROLLO WEB FULLSTACK`}
</Heading>
  <Heading size={`sm`}>
  {`UDEMY`}
</Heading>
</VStack>
</HStack>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
</VStack>
</VStack>
</Center>
  <Center>
  <VStack sx={{"bg": "#202020", "fontSize": "0.7em", "width": "100%", "padding": "3px"}}>
  <Avatar size={`sm`} src={`dendev.png.png`}/>
  <Text>
  {`© 2023-2024 DENDEV BY DEN. MADE WITH 🤍 IN PLAYA DEL CARMEN, Q ROO.`}
</Text>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`DenDev`}
</title>
  <meta content={`Hola, mi nombre es Den. Soy desarrollador freelance de aplicaciones Web y Android`} name={`description`}/>
  <meta content={`logodendev.png.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

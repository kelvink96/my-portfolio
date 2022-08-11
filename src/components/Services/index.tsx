import React from 'react'
import { Box, Card, Container, SimpleGrid, Text, Title } from '@mantine/core'

const ServicesSection = () => {
    return (
        <Container>
            <Box>
                <Title>My services</Title>
                <Text>What I do</Text>
            </Box>
            <SimpleGrid cols={2}>
                <Card>
                    <Title>UI/UX Designer</Title>
                    <Text>A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.</Text>
                </Card>
                <Card>
                    <Title>Graphic Designer</Title>
                    <Text>Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports.</Text>
                </Card>
                <Card>
                    <Title>Web designer</Title>
                    <Text>As a web designer, you are responsible for big-picture decisions, like the menus listed on the site, and smaller details, like which font, color, and graphics to use. A web designer creates the layout and design of a website.</Text>
                </Card>
                <Card>
                    <Title>Software Developer</Title>
                    <Text>Software developers create the computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks.</Text>
                </Card>
            </SimpleGrid>
        </Container>
    )
}

export default ServicesSection
import React, { useState } from 'react';
import {
    Anchor,
    Badge,
    Box,
    Button,
    Card,
    Container,
    createStyles,
    Drawer,
    Group,
    Modal,
    SimpleGrid, Spoiler, Stack,
    Text,
    Title, useMantineTheme
} from "@mantine/core";
import { ChevronDown, ExternalLink } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    simpleCard: {
        textAlign: 'left'
    },
    links: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}))

interface SkillsProps {
    data: {
        title: string
        description: string
        links: string[]
        tags: { title: string, link: string }[]
    }[]
}

const SkillsSection = ({ data }: SkillsProps) => {
    const { classes } = useStyles()
    const theme = useMantineTheme()

    const items = data.map(d =>
        <Card className={classes.simpleCard}>
            <Text weight={500} mb="md">{d.title}</Text>
            <Text size="sm">{d.description}</Text>
        </Card>
    )

    return (
        <Container>
            <Box>
                <Title>My skills</Title>
                <Text>With over 4 years of experience in building applications for different clients, I specialize
                    in:</Text>
            </Box>
            <SimpleGrid cols={3}>
                {items}
            </SimpleGrid>

        </Container>
    );
};

export default SkillsSection;

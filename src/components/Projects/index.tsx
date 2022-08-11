import React from 'react'
import { Badge, Box, Container, SimpleGrid, Title, Text, Card, createStyles, Button, Group, ActionIcon, useMantineTheme, Tooltip } from '@mantine/core'
import { Bookmark, BrandGithub, Heart, PlayerPlay, Share } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  projectCard: {
    textAlign: 'left'
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },
}))

interface ProjectsProps {
  data: {
    title: string
    alias: string
    description: string
    tags: string[]
    gitUrl: string
    liveUrl: string
  }[]
}

const ProjectsSection = ({ data }: ProjectsProps) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const items = data.map(d =>
    <Card className={classes.projectCard}>
      <Text weight={500} mb="md">{d.title}</Text>
      <Text size="sm" mb="md">{d.description}</Text>
      <Group spacing="xs">{d.tags.map(tag => <Badge>{tag}</Badge>)}</Group>
      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {d.alias}
          </Text>
          <Group spacing="xs">
            <Tooltip label='github link'>
              <ActionIcon>
                <BrandGithub size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label='live preview link'>
              <ActionIcon>
                <PlayerPlay size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )


  return (
    <Container>
      <Box>
        <Title>Recent projects</Title>
        <Text>Here are some of the recent projects I have done</Text>
      </Box>
      <SimpleGrid cols={3}>
        {items}
      </SimpleGrid>

    </Container>
  )
}

export default ProjectsSection
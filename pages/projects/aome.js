import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Aome Bot">
      <Container>
        <Title>
          Aome Bot <Badge>2022</Badge>
        </Title>
        <P>A telegram bot capable of answering commands and having conversations.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://t.me/aome_bot">
              https://t.me/aome_bot <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/AomeBot">
              https://github.com/TheCryptoChad/AomeBot <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / Windows / MacOS / Linux / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>
        <ProjectImage src="/../images/aome.png" alt="Aome" />
      </Container>
    </Layout>
  )
}

export default Project

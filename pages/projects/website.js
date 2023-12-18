import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="My First Website">
      <Container>
        <Title>
          My First Website <Badge>2022</Badge>
        </Title>
        <P>A repository for a personal website concept made with HTML and CSS. Also my first ever coding project.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/Website">
              https://github.com/TheCryptoChad/Website <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/website.png" alt="Website" />
      </Container>
    </Layout>
  )
}

export default Project

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="ChadOverflow">
      <Container>
        <Title>
          ChadOverflow <Badge>2023</Badge>
        </Title>
        <P>A StackOverflow clone app built with NextJS, TailwindCSS, and MongoDB.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="">
              Not live yet <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, TailwindCSS, MongoDB</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/redacted.png" alt="ChadOverflow" />
      </Container>
    </Layout>
  )
}

export default Project

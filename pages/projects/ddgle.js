import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="DDgle">
      <Container>
        <Title>
          DDgle <Badge>2022</Badge>
        </Title>
        <P>A search engine made using React, Tailwind CSS, and Google&apos;s Custom Search API.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://thecryptochad.github.io/DDgle/">
              https://thecryptochad.github.io/DDgle/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/DDgle">
              https://github.com/TheCryptoChad/DDgle <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, TailwindCSS</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/ddgle.png" alt="DDgle" />
      </Container>
    </Layout>
  )
}

export default Project

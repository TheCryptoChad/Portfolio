import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="QuickSort">
      <Container>
        <Title>
          QuickSort <Badge>2022</Badge>
        </Title>
        <P>A Java implementation of the QuickSort algorithm.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/QuickSort">
              https://github.com/TheCryptoChad/QuickSort <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Windows / MacOS / Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/quicksort.png" alt="QuickSort" />
      </Container>
    </Layout>
  )
}

export default Project

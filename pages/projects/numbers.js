import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Prime Number Verifier">
      <Container>
        <Title>
          Prime Number Verifier <Badge>2022</Badge>
        </Title>
        <P>A Python script capable of recognizing prime numbers.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/PrimeNumberVerifier">
              https://github.com/TheCryptoChad/PrimeNumberVerifier <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Windows / MacOS / Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/numbers.png" alt="Numbers" />
      </Container>
    </Layout>
  )
}

export default Project

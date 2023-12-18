import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Crypto Exchange">
      <Container>
        <Title>
          Crypto Exchange <Badge>2022</Badge>
        </Title>
        <P>A crypto exchange running on CMD/Terminal made with Java classes.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/CryptoExchange">
              https://github.com/TheCryptoChad/CryptoExchange <ExternalLinkIcon mx="2px" />
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
        <ProjectImage src="../../images/exchange.png" alt="Exchange" />
      </Container>
    </Layout>
  )
}

export default Project

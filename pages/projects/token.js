import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Dudi Token">
      <Container>
        <Title>
          Dudi Token <Badge>2022</Badge>
        </Title>
        <P>An ERC-20 token with hold, send, and receive functions.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ropsten.etherscan.io/token/0x983ff1730e32bb8b59e24f77a392e6e5dc7831c7">
              https://ropsten.etherscan.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/DudiToken">
              https://github.com/TheCryptoChad/DudiToken <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Solidity</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/token.png" alt="Token" />
      </Container>
    </Layout>
  )
}

export default Project

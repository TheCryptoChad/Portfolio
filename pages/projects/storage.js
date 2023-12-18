import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Dudi Storage">
      <Container>
        <Title>
          Dudi Storage <Badge>2022</Badge>
        </Title>
        <P>A frontend for a savings smart contract on the Ethereum blockchain.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dudi-storage.vercel.app">
              https://dudi-storage.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/DudiStorage">
              https://github.com/TheCryptoChad/DudiStorage <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Web3JS, Solidity, ChakraUI, Framer-Motion</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/storage.png" alt="Storage" />
      </Container>
    </Layout>
  )
}

export default Project

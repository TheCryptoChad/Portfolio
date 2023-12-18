import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="ZeroSum">
      <Container>
        <Title>
          ZeroSum <Badge>2023</Badge>
        </Title>
        <P>A web3 game for farming airdrops built with ReactJS, ChakraUI, NestJS, Solidity, and Postgres.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://zerosum.moonsama.com">
              https://zerosum.moonsama.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, EthersJS, ChakraUI, NestJS, SubSquid, Solidity, Hardhat, Postgres</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/zerosum.png" alt="ZeroSum" />
      </Container>
    </Layout>
  )
}

export default Project

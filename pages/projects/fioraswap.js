import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="FioraSwap">
      <Container>
        <Title>
          FioraSwap <Badge>2023</Badge>
        </Title>
        <P>A decentralized, multi-asset, over-the-counter trading protocol built with NextJS, TailwindCSS, and Solidity.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.fioraswap.com/">
              https://www.fioraswap.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, EthersJS, TailwindCSS, SubSquid, Solidity, Hardhat</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/redacted.png" alt="FioraSwap" />
      </Container>
    </Layout>
  )
}

export default Project

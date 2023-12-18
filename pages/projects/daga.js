import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="DAGA">
      <Container>
        <Title>
          DAGA <Badge>2023</Badge>
        </Title>
        <P>A market cap-driven narrative ERC-20 token, built with Solidity. Website built with NextJS and ChakraUI.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.dagacoin.xyz/">
              https://www.dagacoin.xyz/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, EthersJS, ChakraUI, Solidity, Hardhat</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/daga.png" alt="DAGA" />
      </Container>
    </Layout>
  )
}

export default Project

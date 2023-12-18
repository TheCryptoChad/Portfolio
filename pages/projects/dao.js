import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Delegation DAO">
      <Container>
        <Title>
          Delegation DAO <Badge>2022</Badge>
        </Title>
        <P>A smart contract to manage a stake delegation DAO made as part of the &quot;Moonbuilders Academy&quot; course.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://moonbase.moonscan.io/address/0x3365A17Eb56C89715786dB4515A94D073e5978D6">
              https://moonbase.moonscan.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/DelegationDAO">
              https://github.com/TheCryptoChad/DelegationDAO <ExternalLinkIcon mx="2px" />
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
        <ProjectImage src="../../images/dao.png" alt="DAO" />
      </Container>
    </Layout>
  )
}

export default Project

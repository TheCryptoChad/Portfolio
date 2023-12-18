import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="To-Do List">
      <Container>
        <Title>
          To-Do List <Badge>2022</Badge>
        </Title>
        <P>A To-Do List app made with React Hooks.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://thecryptochad.github.io/TodoList/">
              https://thecryptochad.github.io/TodoList/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/TheCryptoChad/TodoList">
              https://github.com/TheCryptoChad/TodoList <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platforms</Meta>
            <span>Chrome / FireFox / Safari / Opera / iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Bootstrap</span>
          </ListItem>
        </List>
        <ProjectImage src="../../images/todo.png" alt="To-Do" />
      </Container>
    </Layout>
  )
}

export default Project

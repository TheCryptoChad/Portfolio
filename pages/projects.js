import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import Redacted from '../images/redacted.png'
import DDgle from '../images/ddgle.png'
import Aome from '../images/aome.png'
import Token from '../images/token.png'
import DAO from '../images/dao.png'
import Exchange from '../images/exchange.png'
import Quicksort from '../images/quicksort.png'
import Website from '../images/website.png'
import Numbers from '../images/numbers.png'
import Todo from '../images/todo.png'
import Dstorage from '../images/storage.png'
import DAGA from '../images/daga.png'
import ZeroSum from '../images/zerosum.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem id="fioraswap" title="FioraSwap" thumbnail={Redacted}>
              A decentralized, multi-asset, over-the-counter, trading protocol built with NextJS, TailwindCSS, and Solidity.
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem id="chadoverflow" title="ChadOverflow" thumbnail={Redacted}>
              A StackOverflow clone app built with NextJS, TailwindCSS, and MongoDB.
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem id="gromlinkart" title="GromlinKart" thumbnail={Redacted}>
              A web3 MarioKart clone built with NextJS, TailwindCSS and Solidity.
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem id="daga" title="DAGA" thumbnail={DAGA}>
              A market cap-driven narrative ERC-20 token, built with Solidity. Website built with NextJS and ChakraUI.
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="zerosum" title="ZeroSum" thumbnail={ZeroSum}>
              A web3 game for farming airdrops built with ReactJS, ChakraUI, NestJS, Solidity, and Postgres.
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="ddgle" title="DDgle" thumbnail={DDgle}>
              A search engine made using React, Tailwind CSS, and Google&apos;s Custom Search API.
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem id="todo" title="To-Do List" thumbnail={Todo}>
              A To-Do List app made with React Hooks.
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem id="storage" title="Dudi Storage" thumbnail={Dstorage}>
              A frontend for a savings smart contract on the Ethereum blockchain built with NextJS, Solidity, ChakraUI, Framer-Motion and Web3JS.
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
            <ProjectGridItem id="quicksort" title="QuickSort" thumbnail={Quicksort}>
              A Java implementation of the QuickSort algorithm.
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
            <ProjectGridItem id="exchange" title="Crypto Exchange" thumbnail={Exchange}>
              A crypto exchange running on CMD/Terminal made with Java classes.
            </ProjectGridItem>
          </Section>
          <Section delay={0.6}>
            <ProjectGridItem id="aome" title="Aome Bot" thumbnail={Aome}>
              A telegram bot capable of answering commands and having conversations.
            </ProjectGridItem>
          </Section>
          <Section delay={0.6}>
            <ProjectGridItem id="numbers" title="Prime Number Verifier" thumbnail={Numbers}>
              A Python script capable of recognizing prime numbers.
            </ProjectGridItem>
          </Section>
          <Section delay={0.7}>
            <ProjectGridItem id="dao" title="Delegation DAO" thumbnail={DAO}>
              A smart contract to manage a stake delegation DAO made as part of the &quot;Moonbuilders Academy&quot; course.
            </ProjectGridItem>
          </Section>
          <Section delay={0.7}>
            <ProjectGridItem id="token" title="Dudi Token" thumbnail={Token}>
              An ERC-20 token with hold, send, and receive functions.
            </ProjectGridItem>
          </Section>
          <Section delay={0.8}>
            <ProjectGridItem id="website" title="My First Website" thumbnail={Website}>
              A repository for a personal website concept made with HTML and CSS. Also my first ever coding project.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects

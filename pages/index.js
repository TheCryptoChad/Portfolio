import { Button, Container, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'

import Redacted from '../images/redacted.png'
import ZeroSum from '../images/zerosum.png'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a Full-Stack Blockchain Developer from Panama!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Adham - TheCryptoChad
            </Heading>
            <p>Full-Stack Blockchain Developer</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.png" alt="Profile Image" />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Adham is a passionate Software Developer with a background in IT and Finances, developing professionally, and for personal projects. He is results-oriented and focused on taking designs
            and concepts into working products with a strong inclination towards front-end and web3 development. He loves everything related to Japan, videogames, and cryptocurrency.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Panama City, Panama.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Studied a Bachelor&apos;s Degree in Law and Political Science.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Studied a Bachelor&apos;s Degree in Banking and Finances.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as Tech Support Intern at Castro y Castro, S.C.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as Programming Support at América ZL, S.A.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked as Web Developer at Compesa Group, S.A.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Worked as Full-Stack Blockchain Developer at MoonSoon Labs Pte.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/TheCryptoChad" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  TheCryptoChad
                </Button>
              </Link>
            </ListItem>
            {/* <ListItem>
             <Link href="www.linkedin.com/in/aelneser" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                 Adham Elneser Issa
               </Button>
             </Link>
           </ListItem> */}
            {/* <ListItem>
             <Link href="https://www.instagram.com/thecryptochad/" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                 @TheCryptoChad
               </Button>
             </Link>
           </ListItem> */}
            <ListItem>
              <Link href="https://twitter.com/TheCryptoChad_" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @TheCryptoChad_
                </Button>
              </Link>
            </ListItem>
            {/* <ListItem>
             <Link href="mailto:adham_elneser@hotmail.com?subject=Website Reply" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                 adham_elneser@hotmail.com
               </Button>
             </Link>
           </ListItem> */}
          </List>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Highlights
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem href="/projects/fioraswap" title="FioraSwap" thumbnail={Redacted}>
              A decentralized, multi-asset, over-the-counter, trading protocol built with NextJS, TailwindCSS, and Solidity.
            </GridItem>
            <GridItem href="/projects/zerosum" title="ZeroSum" thumbnail={ZeroSum}>
              A web3 game for farming airdrops built with ReactJS, ChakraUI, NestJS, Solidity, and Postgres.
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

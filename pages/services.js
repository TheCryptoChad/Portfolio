import { Container, Heading, Box, Text, Divider, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'

const Services = () => (
  <Layout title="Services">
    <Container>
      <Heading as="h1">Coming Soon!</Heading>
      <Text>The page you&apos;re looking for is not operational yet.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to Homepage</Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default Services

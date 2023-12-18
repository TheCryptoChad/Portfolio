import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Footer from '../footer'
import FioraLoader from '../fiora-loader'

const LazyFiora = dynamic(() => import('../fiora'), {
  ssr: false,
  loading: () => <FioraLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Adham Elneser Issa / TheCryptoChad Portfolio Site." />
        <meta name="author" content="Adham Elneser Issa" />
        <meta name="author" content="TheCryptoChad" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Home - TheCryptoChad</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyFiora />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main

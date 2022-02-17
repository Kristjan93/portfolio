import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Dialogue } from '../components/Dialogue'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010001;
`

const H1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* TODO: find some fun description */}
        <meta name="description" content="The ghost that TODO" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <H1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>
        <Dialogue />
      </Main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dialogue } from '../components/Dialogue'

const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010001;
`


const dialogues: Array<Dialogue> = [
  {
    messages: [
      [...'Up already, '.split(''), 300, ...'I see ?'.split(''), 400],
      'Good to see you awake!'
    ],
    uniqKey: 'Weeeeeee'
  },
  {
    messages: ['Here you will die :('],
    uniqKey: 'meeee'
  },
]

const Home: NextPage = () => {
  const [index, setIndex] = useState(0)

  const handleDialogueClick = () => {
    setIndex((state) => (state + 1) % dialogues.length)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* TODO: find some fun description */}
        <meta name="description" content="The ghost that TODO" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Dialogue 
          dialogue={dialogues[index]} 
          onClick={handleDialogueClick} 
        />
      </Main>
    </div>
  )
}

export default Home

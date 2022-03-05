import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { Dialogue, DialogueAdjusted, useDialogue } from '../components/Dialogue'
import { Dialogue as DialogueType } from '../components/Dialogue/hooks/useDialogue'


const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010001;
`

const dialogues: Array<DialogueType> = [
  {
    key: 'Weeeeeee',
    sentences: [
      ['Hello world, ', 300, 'My name is Kristján Patrekur', 400],
      ['Good to see you awake!']
    ],
  },
  {
    key: 'meeee',
    sentences: [
      ['Here you will die :(']
    ],
  },
]

const Home: NextPage = () => {
  const [index, setIndex] = useState(0)

  const handleDialogueClick = () => {
    setIndex((state) => (state + 1) % dialogues.length)
  }

  const d = useDialogue(dialogues)

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
          dialogue={d}
          onClick={handleDialogueClick} 
        />
      </Main>
    </div>
  )
}

export default Home

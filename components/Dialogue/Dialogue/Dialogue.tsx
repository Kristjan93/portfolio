import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Letter } from './components/Letter'
import { StarText } from './components/StarText'

const DEFAULT_LETTER_DELAY = 30 // ms

const Box = styled.div`
  width: 500px;
  height: 300px;
  border: 6px solid #fffeff;
  padding: 24px;
  background-color: #010001;
`


const Text = styled(motion.div)`
  position: relative;
`

type Message = Array<string | number> | string

export type Dialogue = {
  uniqKey: string
  messages: Array<Message>
}
type DialogueProps = {
  dialogue: Dialogue
  onClick?: () => void
}
export const Dialogue = ({
  dialogue,
  onClick
}:DialogueProps) => {
  const { uniqKey } = dialogue

  const messages = useMemo(() => {
    const { messages } = dialogue
    let result = messages.map(message => {
      let currentDelay = 0
      const newMessage = []
      for(let i = 0; i < message.length; i++) {
        const item = message[i]
        if(typeof item === 'number') {
          currentDelay += item
        }
        else {
          newMessage.push({
            c: item,
            delay: currentDelay
          })
          currentDelay += DEFAULT_LETTER_DELAY
        }
      }
      return { message: newMessage, totalDelay: currentDelay } 
    })
    
    return result
  }, [dialogue])

  const findDelay = (index: number) => {
    let delay = 0
    let previous = index - 1
    while(messages[previous]) {
      delay += messages[previous].totalDelay
      previous--
    }
    return delay
  }

  return (
    <Box onClick={onClick}>
      {messages.map(({ message, totalDelay }, i) => (
        <StarText key={`${uniqKey}-${i}`} delay={findDelay(i)}>
          <div>*&nbsp;</div>
            <Text>
              {message.map(({ c, delay }, i) => {
                return <Letter key={`${uniqKey}-${i}`} delay={delay}>{c}</Letter>
              })}
            </Text>
        </StarText>
      ))}
    </Box>
  )
}
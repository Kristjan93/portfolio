import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 500px;
  height: 200px;
  border: 6px solid #fffeff;
  padding: 3%;
`

const DialogueContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
  margin-bottom: 24px;
`

const Text = styled.div`
  position: relative;
  display: block; 
  padding: 0;
  margin: 0;  

  .text {
    display: block; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
  }

  .shadow-text {
    display: block;
    color: transparent;
  }
`

const destination = `This is a event! more text about nothing and everything`

export const Dialogue = () => {
  const [text, setText] = useState('')

  const refNextLetterIndex = useRef(1)
  useEffect(() => {
    if(refNextLetterIndex.current > destination.length) { return }

    const timeout = setTimeout(() => {
      setText(destination.slice(0, refNextLetterIndex.current))
      refNextLetterIndex.current++
    }, 30)

    return () => {
      console.log('clear timeout')
      clearInterval(timeout)
    }
  }, [text])

  const handleReset = () => {
    setText('')
    refNextLetterIndex.current = 1
  }

  return (
    <Box onClick={handleReset}>
      <DialogueContainer>
        <div>*&nbsp;</div>

        <Text>
          <span className="shadow-text">{destination}</span>
          <span className="text">{text}</span>
        </Text>
      </DialogueContainer>
    </Box>
  )
}
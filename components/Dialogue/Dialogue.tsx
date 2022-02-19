import { motion, useAnimation, Variant, Variants } from 'framer-motion'
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Box = styled.div`
  width: 500px;
  height: 300px;
  border: 6px solid #fffeff;
  padding: 24px;
`

const DialogueContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
  margin-bottom: 24px;
`

const Text = styled(motion.div)`
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

const Letter = styled(motion.span)`
  
`

export const Dialogue = () => {
  const [text, setText] = useState('')

  const [destination, setDestination] = useState({
    uniqKey: 'some-key',
    message: 'This is a event! more text about nothing and everything'
  })

  useEffect(() => {
    const t = setTimeout(()=>{
      setDestination({
        uniqKey: 'some-other-key',
        message: 'Hello from the magic tavern!'
      })
    }, 4000)

    return () => {
      clearTimeout(t)
    }
  }, [])

  const control = useAnimation()
  // TODO: Redundant for now.
  const letters = useMemo(() => {
    const { uniqKey, message } = destination
    return message.split('').map((l, i) => {
      return (
        <Letter
          key={`${uniqKey}-${i}`}
          animate={control}
          custom={i}
        >
          {l}
        </Letter>
      )
    })
  }, [destination, control])

  useEffect(() => {
    control.start(i => ({
      opacity: [0,1],
      transition: { delay: i * 0.04, duration: 0 },
      onAnimationEnd: () => { console.log('thank god') }
    })).then(() => {
      console.log('all done')
    })
  }, [control, destination])


  return (
    <Box>
      <DialogueContainer>
        <div>*&nbsp;</div>

        <Text>
          {letters}
        </Text>
      </DialogueContainer>
    </Box>
  )
}
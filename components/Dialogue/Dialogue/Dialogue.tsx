import { motion } from 'framer-motion'
import { AnimationEventHandler, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { DialogueAdjusted } from '../hooks/useDialogue'
import { Actions } from './components/Actions'
import { Letter } from './components/Letter'
import { Star } from './components/Star'
import { StarText } from './components/StarText'

const Root = styled.div`
  width: 500px;
  height: 300px;
  border: 6px solid #fffeff;
  padding: 24px;
  background-color: #010001;
`

const Relative = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`


const Text = styled(motion.div)`
  position: relative;
`

type DialogueProps = {
  dialogue: DialogueAdjusted
  onClick?: () => void
}
export const Dialogue = ({
  dialogue,
  onClick
}:DialogueProps) => {
  const { key, sentences } = dialogue

  const handleAnimationEnd = useMemo<AnimationEventHandler<HTMLDivElement>>(() => {
    let count = 0
    return (event) => {
      count++
      console.log(count)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogue])

  return (
    <Root onClick={onClick}>
      <Relative onAnimationEnd={handleAnimationEnd}>
        {sentences.map((sentence, i) => (
          <StarText key={`${key}-${i}`}>
            <Star delay={sentence[0].delay} />
              <Text>
                {sentence.map(({ c, delay }, i) => {
                  return (
                    <Letter 
                      key={`${key}-${i}`}
                      delay={delay + 30}
                      >
                        {c}
                      </Letter>
                  ) 
                })}
              </Text>
          </StarText>
        ))}

        {/* <Actions
          uniqKey={uniqKey}
          actions={[
            [ { label: 'Spare' },{ label: 'Flee' } ],
            [ { label: 'Mother' },{ label: 'Father' } ],
        ]}
        /> */}
      </Relative>
    </Root>
  )
}
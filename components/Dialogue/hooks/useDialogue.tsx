import { useEffect, useMemo, useState } from "react"

const LETTER_DELAY = 30 // ms

export type Sentence = Array<string | number>
export type Dialogue = {
  key: string
  sentences: Sentence[]
}

export type SentenceAdjustedEntry = {
  /** short for character */
  c: string
  /** use milliseconds */
  delay: number
}
export type SentenceAdjusted = SentenceAdjustedEntry[]
export type DialogueAdjusted = {
  key: string
  sentences: SentenceAdjusted[]
}

type useDialogue = (arg: Dialogue[], key?: string) => DialogueAdjusted
export const useDialogue:useDialogue = (dialogueArg, keyArg) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = dialogueArg.findIndex(x => x.key === keyArg)
    return index < 0 ? 0 : index
  })

  const dialogue = dialogueArg[activeIndex]
  const { key, sentences } = dialogue

  // This is its own thing
  let delay = 0
  let sentenceAdjusted:SentenceAdjusted[] = []
  for(let ia = 0; ia < sentences.length; ia++) {
    const sentence = sentences[ia]
    sentenceAdjusted[ia] = []
    for(let ib = 0; ib < sentence.length; ib++) {
      const sentenceEntry = sentence[ib]
      if(typeof sentenceEntry === 'number') {
        delay += sentenceEntry
      }
      if(typeof sentenceEntry === 'string') {
        sentenceEntry.split('').map(c => {
          sentenceAdjusted[ia].push({ c, delay })
          delay += LETTER_DELAY
        })
      }
    }
  }

  const [skip, setSkip] = useState(false)
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if(event.code === 'Space') {
        if(dialogueArg[activeIndex + 1] !== undefined) {
          setActiveIndex(state => state + 1)
        }
        else {
          setActiveIndex(state => 0)
        }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => {
      document.removeEventListener('keydown', keydown)
    }
  },[dialogueArg, activeIndex])

  if(skip) {
    sentenceAdjusted = sentenceAdjusted.map(s => s.map(x => ({ ...x, delay: 0 })))
  }

  return {
    key,
    sentences: sentenceAdjusted
  }
}
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { IconContainer } from '../../../IconContainer'
import { SvgHeart, SvgToad } from '../../../svg'
import { StarText } from './StarText'

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
  align-items: end;
  grid-auto-rows: max-content;
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  position: absolute;
  top:0;
  right:0;
  bottom: 0;
  left: 0;
  align-content: end;
`

const ActionButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
  color: white;
  font-size: 2rem;
  font-family: inherit;
  display: flex;
  align-items: flex-end;
  text-align: left;
  cursor: pointer;
`

interface Active {
  x:number
  y:number
}
interface Action {
  label: string
}
interface ActionsProps {
  uniqKey: string
  /** each row must be the same length */
  actions: Array<Action[]>
}
export const Actions = ({
  actions,
  uniqKey,
}:ActionsProps) => {
  const [active, setActive] = useState<Active | undefined>(actions ? {x:0,y:0} : undefined)
  useEffect(() => {
    const columnLength = actions.length
    const rowLength = actions[0].length
    const keydown = ({ key }:KeyboardEvent) => {
      if(key === 'ArrowUp') {
        setActive(state => state 
          ? ({ ...state, x: (state.x + columnLength - 1) % columnLength}) 
          : state
        )
      }
      else if(key === 'ArrowDown') {
        setActive(state => state 
          ? ({ ...state, x: (state.x + columnLength + 1) % columnLength}) 
          : state
        )
      }
      else if(key === 'ArrowRight') {
        setActive(state => state 
          ? ({ ...state, y: (state.y + rowLength + 1) % rowLength}) 
          : state
        )
      }
      else if(key === 'ArrowLeft') {
        setActive(state => state 
          ? ({ ...state, y: (state.y + rowLength - 1) % rowLength}) 
          : state
        )
      }
    }
    document.addEventListener('keydown', keydown)
    return () => {
      document.removeEventListener('keydown',keydown)
    }
  }, [actions, setActive])

  const handleMouseEnter = (active:Active) => { setActive({ ...active })}

  return (
    <Root>
      {actions.map((row, xIndex) => row.map((action, yIndex) => {
        const isActive = active 
          ? `${xIndex}-${yIndex}` === `${active.x}-${active.y}`
          : false
        return (
          <ActionButton 
            key={`${uniqKey}-${xIndex}-${yIndex}`}
            onMouseEnter={() => handleMouseEnter({ x:xIndex,y:yIndex })}
          >
            <IconContainer 
              style={{ opacity: isActive ? 1 : 0 }}
            >
              <SvgHeart height={undefined} />
            </IconContainer>
            &nbsp;
            <div>*&nbsp;</div>
            {action.label}
          </ActionButton>
        )
      }))}
    </Root>
  )
}
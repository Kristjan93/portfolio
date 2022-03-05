import styled from 'styled-components'
import { animationAppear } from '../animations/appear'

const Root = styled.div`
  opacity: 0;
  animation: ${animationAppear} 0s linear forwards;
`

interface StarProps {
  delay: number
}
export const Star = ({ delay }: StarProps) => (
  <Root style={{ animationDelay: `${delay}ms` }}>*&nbsp;</Root>
)
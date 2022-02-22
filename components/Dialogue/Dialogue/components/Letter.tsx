import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const baseStyle = css`
  opacity: 0;
  animation: ${appear} 0s linear forwards;
`
const Span = styled.span`
  ${baseStyle}
`
const BR = styled.br`
  ${baseStyle}
`

interface LetterProps {
  children: string
  delay: number
}
export const Letter = ({ children, delay }: LetterProps) => {
  const isNewLine = children === '\n'
  const inProps = { style: { animationDelay: `${delay}ms` } }
  if(isNewLine) { 
    return <BR {...inProps} />
   }
  return <Span {...inProps}>{children}</Span>
}
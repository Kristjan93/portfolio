import { useEffect, useState } from "react"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
  margin-bottom: 24px;
  width: 100%;
`
interface StarTextProps {
  delay?: number
}
export const StarText:React.FC<StarTextProps> = ({ children }) => {
  return <Root >{children}</Root>
}
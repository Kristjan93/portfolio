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
export const StarText:React.FC<StarTextProps> = ({
  children,
  delay
}) => {
  const [show, setShow] = useState(delay ? false : true)

  useEffect(() => {
    if(!delay) { return }
    const timeout = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  if(show) {
    return <Root >{children}</Root>
  }

  return null
}
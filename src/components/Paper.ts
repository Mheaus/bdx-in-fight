import styled from 'styled-components'

const Paper = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  ${({ theme }) => theme.shadows['2pt']}
  padding: 2rem;
`

export default Paper

import styled from 'styled-components'

const TabContainer = styled.section`
  display: flex;
  border-bottom: 1px solid lightgray;
  width: fit-content;
`

const TabItem = styled.span`
  padding: 0 50px 5px 50px;

  ${props => props.isActive && `
    font-weight: bold;
    border-bottom: 4px solid black;
  `}
`

export { TabContainer, TabItem }
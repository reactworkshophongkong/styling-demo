import styled from 'styled-components'

// using a css in js solution lets you make use of JS when composing your styles
// constants can be used to create some design system for spacing , colors  etc
const SPACING = {
  default: '10px'
}


const Button = styled.button`
  font-weight: bold;
  font-size: ${props => props.size === 'large' ? '20px' : '16px'};
  border: 1px solid white;
  border-radius: 5px;
  background-color: ${props => {
    if (props.disabled) return 'lightgrey'    
    if (props.buttonType === 'secondary') return 'lightgreen'
    return 'cornflowerblue';
  }};

  color: white;
  margin-right: ${SPACING.default};
`

export { Button }
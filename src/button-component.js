import styled from 'styled-components'
import { Button } from './button-component.styles'
import * as styles from './button.module.css'

const ExtendedButton = styled(Button)`
  background-color: salmon;
`

const ButtonDemo = () => {
  return(
    <div>
      <section>
        <p>Buttons using styled-components</p>
        <Button size="large" onClick={() => alert('Howdy')}>Primary Large</Button>
        <Button buttonType="secondary">Secondary</Button>
        <Button buttonType="secondary" disabled>Disabled</Button>
        <ExtendedButton size="large">Adding Additional Styles</ExtendedButton>
      </section>

      <section>
        <p>Buttons using css modules</p>
        <button className={`${styles.button} ${styles.large}`}>Primary Large</button>
        <button className={`${[styles.button, styles.secondary].join(' ')}`}>Secondary</button>
        <button disabled className={`${[styles.button, styles.disabled].join(' ')}`}>Disabled</button>
      </section>
    </div>
  )
}

export { ButtonDemo }
import React, { useState } from 'react'

import { TabContainer, TabItem } from './tab.component.styles'
import * as styles from './tab.module.css'
// import * as styles from './button.module.css'


const TabUsingStyledComponents = ({ tabValues = [], defaultTab = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClicked = e => {
    setActiveTab(e.target.textContent)
  }

  const tabItems = tabValues.map(tab => {
    const isActive = tab === activeTab

    return (
      <TabItem value={tab} isActive={isActive} onClick={handleTabClicked} key={`${tab}`}>{tab}</TabItem>
    )
  })

  return (
    <TabContainer>
      {tabItems}
    </TabContainer>
  )

}

const TabUsingCSSModules = ({ tabValues = [], defaultTab = ""  }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClicked = e => {
    setActiveTab(e.target.textContent)
  }

  const tabItems = tabValues.map(tab => {
    const isActive = tab === activeTab
    const styling = isActive ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`

    return (
      <span className={styling} value={tab} isActive={isActive} onClick={handleTabClicked} key={`${tab}`}>{tab}</span>
    )
  })

  return (
    <section className={styles.container}>
      {tabItems}
    </section>
  )
}

export { TabUsingStyledComponents, TabUsingCSSModules }
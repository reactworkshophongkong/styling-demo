import React from 'react'

import * as styles from './tab.module.css'


const Tab = ({ tabValues = [], activeTab, onTabSelected, children  }) => {
  const handleTabClicked = e => {
    onTabSelected(e.target.textContent)
  }

  const tabItems = tabValues.map(tab => {
    const isActive = tab === activeTab
    const styling = isActive ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`

    return (
      <span className={styling} value={tab} isActive={isActive} onClick={handleTabClicked} key={`${tab}`}>{tab}</span>
    )
  })

  return (
    <>
      <section className={styles.container}>
        {tabItems}
      </section>
      {children}
    </>
  )
}

export { Tab }
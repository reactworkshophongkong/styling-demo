import React from 'react'

import { TabContainer, TabItem } from './tab.component.styles'

const Tab = ({ tabValues = [], activeTab, onTabSelected, children }) => {
  const handleTabClicked = e => {
    onTabSelected(e.target.textContent)
  }

  const tabItems = tabValues.map(tab => {
    const isActive = tab === activeTab

    return (
      <TabItem value={tab} isActive={isActive} onClick={handleTabClicked} key={`${tab}`}>{tab}</TabItem>
    )
  })

  return (
    <>
      <TabContainer>
        {tabItems}
      </TabContainer>
      {children}
    </>
  )

}

export { Tab }
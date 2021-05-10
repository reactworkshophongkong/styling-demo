import { useState } from 'react'
import { Tab as TabWithCSSModules } from './using-css-modules/tab.component'
import { Tab as TabWithStyledComponents } from './using-styled-components/tab.component'


function App() {
  const [activeTab, setActiveTab] = useState("Tab 1")

  const handleTabSelected = newTabvalue => {
    setActiveTab(newTabvalue)
  }

  const getTabContent = () => {
    switch(activeTab) {
      case "Tab 1": return <p>You have selected Tab 1</p>
      case "Tab 2": return <p>You have selected Tab 2</p>
      default: return <p>You have selected Tab 3</p>
    }
  }


  return (
    <div>
      <TabWithStyledComponents tabValues={["Tab 1", "Tab 2", "Tab 3"]} activeTab={activeTab} onTabSelected={handleTabSelected}>
        {getTabContent()}
      </TabWithStyledComponents>
      <br />
      <br />
      <br />
      <TabWithCSSModules tabValues={["Tab 1", "Tab 2", "Tab 3"]} activeTab={activeTab} onTabSelected={handleTabSelected}>
        {getTabContent()}
      </TabWithCSSModules>
    </div>
  );
}

export default App;

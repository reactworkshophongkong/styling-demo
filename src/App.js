import { TabUsingStyledComponents, TabUsingCSSModules } from './tab.component'


function App() {
  return (
    <div>
      <TabUsingStyledComponents tabValues={["Tab 1", "Tab 2", "Tab 3"]} defaultTab="Tab 1" />
      <br />
      <br />
      <br />
      <TabUsingCSSModules tabValues={["Tab 1", "Tab 2", "Tab 3"]} defaultTab="Tab 1" />
    </div>
  );
}

export default App;

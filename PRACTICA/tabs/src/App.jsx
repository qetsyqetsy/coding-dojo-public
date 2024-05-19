// App.jsx
import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content of Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content of Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>Content of Tab 3</div>,
      onClick: () => {
        console.log('Tab 3 clicked!');
      },
    },
  ];

  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;

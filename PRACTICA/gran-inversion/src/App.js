import React from 'react';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div>
      <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
      <PersonCard firstName="Alice" lastName="Johnson" age={35} hairColor="Black" />
      <PersonCard firstName="Bob" lastName="Williams" age={28} hairColor="Red" />
    </div>
  );
};

export default App;
import React, { FormEvent, useState } from 'react';
import { List } from './components/ListComponent'
//data
import Data from "./shared/data"
//types
import { Entry } from "./shared/data";
//style
import './App.css';


function App() {
  const [people, setPeople] = useState<Entry[]>(Data);

  function handleSubmit(event: FormEvent<HTMLButtonElement>): void {setPeople([]);
  }
  return (
    <div className="App">
      <div className="container">
        <h3 className="birthday-status">{people.length} people have birthday today!</h3>
        <List people={Data}></List>
        <button onSubmit={handleSubmit}></button>
      </div>
    </div>
  );
}

export default App;

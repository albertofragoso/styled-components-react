import React from 'react';
import './App.css';
import { Card, Button } from './styles'

function App() {
  return (
    <div className="App">
      <Card>
        <h2>Ironhack!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id iste, fugiat labore soluta similique, quibusdam rem iusto odio dolores reprehenderit excepturi quam tempora. Eos libero suscipit sapiente eum aperiam?</p>
        <nav>
          <Button type="ghost">Contact</Button>
          <Button>Delete</Button>
        </nav>
      </Card>
    </div>
  );
}

export default App;

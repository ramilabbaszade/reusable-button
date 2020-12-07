import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Buttons</h2>
      <div className="container">
        <div>
          <p>{"<Button/>"}</p>
          <Button>Default</Button>
        </div>
        <div>
          <p>{"<Button variant='outline'/>"}</p>
          <Button variant="outline">Default</Button>
        </div>
        <div>
          <p>{"<Button variant='text'/>"}</p>
          <Button variant="text">Default</Button>
        </div>
        <div>
          <p>{"<Button disableShadow/>"}</p>
          <Button disableShadow>Default</Button>
        </div>
        <div>
          <p>{"<Button disabled/>"}</p>
          <Button disabled>Disabled</Button>
        </div>
        <div>
          <p>{"<Button variant='text' disabled/>"}</p>
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div>
            <p>{"<Button size='sm'/>"}</p>
            <Button color="primary" size="sm">
              Default
            </Button>
          </div>
          <div>
            <p>{"<Button size='md'/>"}</p>
            <Button color="primary" size="md">
              Default
            </Button>
          </div>
          <div>
            <p>{"<Button size='lg'/>"}</p>
            <Button color="primary" size="lg">
              Default
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div>
            <p>{"<Button color='default'/>"}</p>
            <Button color="default">Default</Button>
          </div>
          <div>
            <p>{"<Button color='primary'/>"}</p>
            <Button color="primary">Primary</Button>
          </div>
          <div>
            <p>{"<Button color='secondary'/>"}</p>
            <Button color="secondary">Secondary</Button>
          </div>
          <div>
            <p>{"<Button color='danger'/>"}</p>
            <Button color="danger">Danger</Button>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div>
            <p>{"<Button startIcon='local_grocery_store'/>"}</p>
            <Button startIcon="local_grocery_store" color="primary">
              Default
            </Button>
          </div>
          <div>
            <p>{"<Button endIcon='local_grocery_store'/>"}</p>
            <Button endIcon="local_grocery_store" color="primary">
              Default
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

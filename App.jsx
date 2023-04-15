import React from "react";
import AddTodos from "./Components/AddTodos";
import { Container } from "react-bootstrap";
import DisplayTodos from "./Components/DisplayTodos";
import { Provider } from "react-redux";
import store from "./redux/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Container className="py-3">
          <AddTodos />
          <DisplayTodos />
        </Container>
      </Provider>
    </div>
  );
};

export default App;

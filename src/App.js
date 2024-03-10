import { Provider } from "react-redux";
import "./App.css";
import Count from "./components/count/Count";
import store from "./components/count/CountStore";

function App() {
  return (
    <>
      <h2>Project 1- Increment and decrement</h2>
      <Provider store={store}>
        <Count />
      </Provider>
      
      <h2>Project 2- Increment and decrement</h2>
    </>
  );
}
export default App;

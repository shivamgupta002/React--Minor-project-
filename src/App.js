import { Provider } from "react-redux";
import "./App.css";
import Count from "./components/count/Count";
import store from "./components/count/CountStore";
import Accordion from "./components/accordion";

function App() {
  return (
    <>
      <Accordion />
      <div>
        <h3> Increment and decrement</h3>
        <Provider store={store}>
          <Count />
        </Provider>
      </div>
    </>
  );
}
export default App;

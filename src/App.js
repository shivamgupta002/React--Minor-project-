import { Provider } from "react-redux";
import "./App.css";
import Count from "./count/Count";
import store from "./count/CountStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <Count />
      </Provider>
    </>
  );
}
export default App;

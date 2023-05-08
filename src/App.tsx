
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { Provider } from "react-redux";
import store from './store/features/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Add/>
      <List/>
    </Provider>
    </>
  );
}

export default App;

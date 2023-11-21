import { Outlet } from "react-router-dom";
import Header from "./containers/header/Header.jsx";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;

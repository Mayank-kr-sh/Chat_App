import "./App.css";
import { Route } from "react-router-dom";
import Homepages from "./Pages/Homepages";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepages} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;

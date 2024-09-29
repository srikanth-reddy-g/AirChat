import "./App.css";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Main content */}
      <div style={{ flexGrow: 1 }}>
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "transparent",
          position: "relative",
          bottom: 0,
        }}
      >
        Made with 💖 by <b>Srikanth Reddy</b>
      </footer>
    </div>
  );
}

export default App;

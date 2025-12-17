import Header from "./Header.jsx";
import "./App.css";
import Greeting from "./Greeting.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Counter from "./components/Counter.jsx";
import Clicker from "./components/Clicker.jsx";
import Inputer from "./components/Inputer.jsx";
import WelcomeMassage from "./components/WelcomeMassage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Notification from "./components/Notification.jsx";

function App() {

  return (
    <>
      <ThemeToggle />
      <Header />
      <Greeting />
      <Counter />
      <div className="centerSection">
        <Clicker />
        <WelcomeMassage />
        <Dashboard isLoggedIn={true} />
        <Inputer />
        <Notification isLoggedIn={true} />
      </div>
    </>
  );
}

export default App

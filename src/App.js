import "./App.css";
import ClubOtherActivities from "./components/ClubOtherActivities";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Tool from "./components/Tool";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <Tool />
      <Movie />
      <Design />

      <ClubOtherActivities />

      <Footer />
    </div>
  );
}

export default App;

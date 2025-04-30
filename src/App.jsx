import "./App.css";
import "./reset.css";
import AppRouter from "./AppRouter";
import LoadingModal from "./components/LoadingModal/LoadingModal";

function App() {
  return (
    <div id="app-wrapper">
      <main>
        <LoadingModal />
        <AppRouter />
      </main>
    </div>
  );
}

export default App;

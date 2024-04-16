import SetupRouters from "./routes";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();

  return (
    <div className="App">
      <SetupRouters />
    </div>
  );
}

export default App;

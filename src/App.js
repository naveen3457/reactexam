import { Route, Routes } from "react-router-dom";
import Firstpage from "./components/firstpage";
import Secondpage from "./components/secondpage";
import Thirdpage from "./components/thirdpage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="firstpage" element={<Firstpage/>}/>
        <Route path="/secondpage" element={<Secondpage/>}/>
        <Route path="/thirdpage" element={<Thirdpage/>}/>
      </Routes>
      <Thirdpage/>
    </div>
  );
}

export default App;

import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import { useState } from "react";
import './App.css';
  
const App = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="App-header">
      <Text toggle={toggle} displayTxt="Hello, Team Tan and Manh DevOps SWE40006......."/>
      <Button setToggle={setToggle} btnTxt="Toggle Text"/>
    </div>
  );
}
  
export default App;
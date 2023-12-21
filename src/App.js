import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./component/Header"
import CoinDetail from "./component/CoinDetail"
import Exchanges from "./component/Exchanges"
import Home from "./component/Home"
import Coins from "./component/Coins"



function App() {
  return (
      <Router>
          <Header/>
       <Routes>
         <Route path="/" element = {<Home/>} />
         <Route path="/Coins" element = {<Coins/>} />
         <Route path="/Header" element = {<Header/>} />
         <Route path="/Exchanges" element = {<Exchanges/>} />
         <Route path="/Coin/:id" element = {<CoinDetail/>} />                
        </Routes>
      </Router>  
     
  );
}       

export default App;
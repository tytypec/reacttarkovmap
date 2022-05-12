import Home from "./pages/Home";
import Map from "./pages/Map";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomsImage from "./images/customsMap.png"
import InterchangeImage from "./images/interchange.png" 


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';



function App() {
	return (
		<div>
      <Header />
			<Router>
				<Routes>
         		 <Route path="/" element={<Home />}/>
         		 <Route path="/Customs" element={<Map mapImage={CustomsImage}  />}/>
				  <Route path="/Interchange" element={<Map mapImage={InterchangeImage}  />}/>

				</Routes>
			</Router>
      <Footer />
		</div>
	);
}

export default App;

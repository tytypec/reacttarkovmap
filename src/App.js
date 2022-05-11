import Home from "./pages/Home";
import Customs from "./pages/Customs";

import Header from "./components/Header";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';



function App() {
	return (
		<div>
      <Header />
			<Router>
				<Routes>
         		 <Route path="/" element={<Home />}/>
         		 <Route path="/Customs" element={<Customs />}/>

				</Routes>
			</Router>
      <Footer />
		</div>
	);
}

export default App;

import Header from "./component/header/Header"
import Home from "./component/Home/Home"
// import Register from "./component/Home/Auth.js/Register"
// import Start from "./component/Home/Auth.js/Start";
// import SignIn from "./component/Home/Auth.js/SignIn";
// import PharmacyDashboard from "./component/pages/Pharmacy/PharmacyDashboard";
import Auth from "./component/MainAuth/Auth"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Home />
      <Auth />
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from "./Components/Signup"
import SignIn from "./Components/Signin"
import SignUpSuccess from "./Components/SignUpSuccess";
import DoctoDetailPage from "./Cynthia E-medi/src/Components/DoctoDetailPage"
import PharmDetailPage from "./Cynthia E-medi/src/Components/PharmDetailPage"
import AllSpecialist from "./Cynthia E-medi/src/Components/AllSpecialist"
import Pharm from "./Cynthia E-medi/src/Components/Pharm"
import AllDocs from "./Cynthia E-medi/src/Components/Doctor"
import Appointment from "./Cynthia E-medi/src/Components/Appointment"
import Landing from "./BlessingEmedi/src/component/Home/Home"
import Products from "./BlessingEmedi/new/Product/Product"
import CartPage from "./BlessingEmedi/new/Cart"
import DocSignUp from "./BlessingEmedi/src/component/pages/Doctor/SignUpDoc"
import PharmSignUp from "./BlessingEmedi/src/component/pages/Pharmacy/SignUp"
import PharmPage from "./Cynthia E-medi/src/Components/PharmDashboard"
import UploadPage from "./BlessingEmedi/src/component/pages/User/UploadDrugs"
import ViewAlDocs from "./BlessingEmedi/new/DetailDoctor"
import Header from "./BlessingEmedi/src/component/header/Header"
import SigninDoc from "./Components/SigninDoc"
import SigninPharm from "./Components/SigninPharm"

function App() {
  return (
    <>
      <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/Signed" element={<SignUpSuccess/>}
        />
        <Route path='/detailpage/:id' element={<DoctoDetailPage/>}/>
        <Route path='/pharmdet/:id' element={<PharmDetailPage/>}/>
        <Route path='/drugs' element={<AllSpecialist/>}/>
        <Route path='/pharm' element={<Pharm/>}/>
        <Route path="/allDocs" element={<AllDocs/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/Products/:id" element={<Products/>}/>
        <Route path="/DocSignUp" element={<DocSignUp/>}/>
        <Route path="/PharmSignUp" element={<PharmSignUp/>}/>
        <Route path="/PharmPage/:id" element={<PharmPage/>}/>
        <Route path="/uploadPage/:id" element={<UploadPage/>}/>
        <Route path="/viewAlDocs" element={<ViewAlDocs/>}/>
        <Route path="/Cart" element={<CartPage/>}/>
        <Route path="/SigninDoc" element={<SigninDoc/>}/>
        <Route path="/SigninPharm" element={<SigninPharm/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

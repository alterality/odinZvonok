import './App.css';
import AboutUsFiz from './components/about/AboutUsFiz';
import AboutUsMain from './components/about/AboutUsMain';
import AboutUsUr from './components/about/AboutUsUr';
import AboutCompany from './components/aboutcompany/AboutCompany';
import AdvantagesMain from './components/advantages/AdvantagesMain';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import MainPage from './components/main/MainPage';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/services/Services';
import ServicesMain from './components/services/ServicesMain';
import Vakancies from './components/vacancies/Vakancies';
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Vakancies/> */}
    {/* <AboutUsUr/> */}
    {/* <AboutUsFiz/> */}
    {/* <Services/> */}
    {/* <AboutCompany/> */}
    {/* <NotFound/> */}
      <MyRoutes/>
    <Footer/>
    </div>
  );
}

export default App;

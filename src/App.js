import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import CallFunction from './component/callpop';
import AnotherPage from './component/callpopup';
import Adminpage from './login/adminpage';
import Link from './home/link';
import Test from './test'
import ContactPage from './Contact/contact'
import Welcome from './Design/welcome'
import Uploadimge from './Design/uploadimage';
import ImageComponent from './Design/Image';
import Menu from './Apps/menu';
import Sidebar from './sidebar/sidebar'
import ButtonSidebar from './sidebar/buttonside'
import YouTubeSearch from './component/youtube'
import Faker from './component/fake';
import BinanceTicker from "./component/binance"
import TechCrunchPosts from './component/post'
import ImageDownload from './Apps/imageDownloads'
import MainProduct from './product/mainproduct'
import ProductDetailsPage from './product/ProductDetailsPage'; // Corrected import
import { logPageView } from './analytics'; // Import the logPageView function


function App() {

  


  return (
    <Router>
      <PageViewsTracker /> 
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/youtube" element={<Faker/>} />
            <Route path="/youtube" element={<YouTubeSearch />} />
            <Route path="/imageDownloads" element={<ImageDownload />} />
            <Route path="/binance" element={<BinanceTicker />} />
            <Route path="/post" element={<TechCrunchPosts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/callpop" element={<CallFunction />} />
            <Route path="/callpopup" element={<AnotherPage />} />
            <Route path="/adminpage/*" element={<Adminpage />} />
            <Route path="/menu/*" element={<Menu />} />
            <Route path="/link/*" element={<Link />} />
            <Route path="/contact/*" element={<ContactPage/>} />
            <Route path="/test" element={<Test />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/uploadimage" element={<Uploadimge />} />
            <Route path="/Image" element={<ImageComponent />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/buttonsidebar" element={<ButtonSidebar />} />
            <Route path="/mainproduct/*" element={<MainProduct />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};


// Component to track page views
const PageViewsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

export default App;

import Banner from "./components/banner/banner";
import Navbar from "./components/navigation/nav";
import Products from "./components/selling products/Product";
import "./index.css";
// import Sale from './components/selling products/sale';
import Blog from "./components/Blog/blog";
import About from "./components/aboutUs/about";
import Footer from "./components/footer/footer";
import Gallery from "./components/gridgallery/gallery";
import Love from "./components/loveproduct/love";
import Discount from "./components/newbanner/discount";
import Add from "./components/vdo/ad";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Add />
      <Discount />
      <Love />
      <About />
      <Gallery />
      <Blog />
      <Footer />
      <About/>
    </div>
  );
}

export default App;

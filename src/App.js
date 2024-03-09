import'./index.css'
import Banner from './components/banner/banner';
import Navbar from './components/navigation/nav';
import Products from './components/selling products/Product';
// import Sale from './components/selling products/sale';
import Discount from './components/newbanner/discount';
import Add from './components/vdo/ad';
import Footer from './components/footer/footer';
import Love from './components/loveproduct/love';

function App() {
  return (
    <div>
<Navbar/>
<Banner/>

<Products/>
<Add/>
<Discount/>
<Love/>
<Footer/>
    </div>
  );
}

export default App;

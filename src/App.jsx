import Hero from './components/Hero';
import Sales from './components/Sales';
import LimitedProduct from './utils/LimitedProduct';
import {
  heroapi,
  highlight,
  popularsales,
  topratesales,
  sneaker,
} from './data/data.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import WishList from './components/WishList';

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <WishList />
      <main className='flex flex-col gap-16'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <LimitedProduct endpoint={highlight} />
        <Sales endpoint={topratesales} />
        <LimitedProduct endpoint={sneaker} />
      </main>
      <Footer />
    </>
  );
}

export default App;

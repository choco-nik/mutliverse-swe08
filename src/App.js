import Header from './components/Header';
import About from './components/About';
import Basket from './components/Basket';
import Footer from './components/Footer';
import Home from './components/Home';
import Coffee from './components/Coffee';
import Plants from './components/Plants';
import FAQs from './components/FAQs';
import data from './data';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty +1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems (cartItems.filter((x) => x.id !== product.id))
    } else {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty -1} : x))
    }
  }; 

  const [faqs, setfaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issues.',
      open: true
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  

  return (
    <div className="App">
       <BrowserRouter>
       <Header countCartItems={cartItems.length}/>
      <div className="row">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<Coffee products={products} onAdd={onAdd}/>} />
          <Route path="/plants" element={<Plants products={products} onAdd={onAdd}/>} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />          
          <Route path="/cart" element={<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;

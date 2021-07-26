import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const onShowHandler = () => {
    setIsShowCart(true);
  }
  const onHideHandler = () => {
    setIsShowCart(false);
  }
  console.log("hello")
  return (
    <CartProvider>
      {isShowCart && <Cart onHideCart={onHideHandler} />}
      <Header onShowCart={onShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

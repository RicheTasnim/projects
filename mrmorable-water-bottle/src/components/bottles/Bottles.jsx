import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addTOLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(()=>{
    if(bottles.length>0){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);

      const savedCart = [];
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
          savedCart.push(bottle);
        }
      }
      console.log('savedCart: ', savedCart);
      setCart(savedCart);
    }
  },[bottles])

  const handleAddToCart = bottle =>{
    const newCart = [...cart, bottle];
    setCart(newCart);
    addTOLS(bottle.id);
  }

  const handleRemoveFromCart = id =>{
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  }

  return (
    <div>
      <h2>Bottles Availabe: {bottles.length}</h2>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>

      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;

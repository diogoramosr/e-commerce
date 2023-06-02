import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  function addItem(item) {
    setCart((prevCart) => {
      const cartItems = Object.values(prevCart);
      const existingItem = cartItems.find(
        (cartItem) => cartItem.produto.title === item.title
      );

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantidade: existingItem.quantidade + 1,
        };
        const updatedCart = {
          ...prevCart,
          [existingItem.produto.id]: updatedItem,
        };
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

      const newCart = {
        ...prevCart,
        [item.id]: {
          produto: item,
          quantidade: 1,
        },
      };
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  function removeItem(produto) {
    setCart((index) => {
      const novoValor = {};
      const qtd = index[produto].quantidade;
      Object.keys(index).forEach((id) => {
        if (id !== produto) {
          novoValor[id] = index[id];
        }
        if (qtd > 1) {
          novoValor[produto] = {
            quantidade: qtd - 1,
            produto: index[produto].produto,
          };
        }
      });
      window.localStorage.setItem("cart", JSON.stringify(novoValor));
      return novoValor;
    });
  }

  function getCartInfo() {
    const cartItems = Object.values(cart);
    const totalItems = cartItems.reduce((total, item) => {
      return total + item.quantidade;
    }, 0);
    const totalValue = cartItems.reduce((total, item) => {
      return total + item.quantidade * item.produto.price;
    }, 0);
    return { items: cartItems, totalItems, totalValue };
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getCartInfo }}>
      {children}
    </CartContext.Provider>
  );
}

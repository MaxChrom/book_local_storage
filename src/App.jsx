import { useEffect, useState } from "react";
import Book from "./Book";
import Header from "./Header";

function App(props) {

  const [data, setData] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [items, setItems] = useState([]);
  
  

  const loadData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php');
    const data = await response.json();

    setData(data);
  }





  useEffect(() => {
    loadData();
    // const json = localStorage.getItem('cart');
    // if (json !== undefined) {
    //   const items = JSON.parse(json);
    //   console.log(items)
    //   if (items) {
    //     setCart(items);
    //   }
    // }
  }, [])

  useEffect(() => {
    if (cart) {
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart));
    } 
  }, [cart]);





  const addItemToCart = (book_id) => {
    setCart([
      ...cart,
      book_id
    ])
  }
  const removeItemFromCart = (book_id) => {
    const array_without_book = [...cart]
    const index = array_without_book.indexOf(book_id)
    if (index !== -1) { 
      array_without_book.splice(index, 1) 
    }
    setCart(array_without_book)
  }

  return (
    <> 
      <Header cart_items_nr = {cart.length}/>
      <h1>Latest books</h1>
      {/* <button onClick={() => addItemToCart(123)}>Add 123 to cart</button> */}
      <button onClick={loadData}>Load Books</button>
      <ul className="latest-books">

        {
          data === null
            ? (
              <div className="loading">Press load button</div>
            )
            : data.map(book => <Book key={book.id} {...book} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)
      
        }

      </ul>
      
    </>
  );
}

export default App;

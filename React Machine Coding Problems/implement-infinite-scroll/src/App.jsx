import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardCount = 50;

const App = () => {
  const [noOfCards, setNoOfCards] = useState(cardCount);
  const infiniteScrollArray = []; // to store card data in an array

  /**
   * function to add new items when reach to the bottom of the page
   */
  const scrollHandler = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 50
    ) {
      setNoOfCards((prevNoOfCards) => prevNoOfCards + cardCount);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // updating card data based on numberOfCards
  for (let i = 0; i <= noOfCards; i++) {
    infiniteScrollArray.push(i);
  }

  return (
    <>
      <h1>Infinite Scroll</h1>
      {infiniteScrollArray.map((noOfCard) => (
        <Card key={noOfCard} title={`Card ${noOfCard}`} />
      ))}
    </>
  );
};

export default App;

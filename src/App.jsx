import React, { useState } from "react";
import "./App.css";
import CardForm from "./Form.jsx";

function App() {
  const [cards, setCards] = useState([        
  { number: "7653 7553 5693 9862", balance: 100 },
  { number: "7453 9736 0763 3474", balance: 400 },
  { number: "9577 7543 9379 9784", balance: 800 }]);

  const handleCloseCard = (idx) => {
    const updatedCards = cards.filter((card, index) => index !== idx);
    setCards(updatedCards);
  };  

  const handleOpenCard = (card) => {
    setCards([...cards, card]);
  };


  return (
    <div className="app">
      <CardForm handleOpenCard={handleOpenCard} />
      {cards.map(({ number, balance }, idx) => (
        <div key={idx} className="card">
          <div className="card-body">
            <h5 className="card-title">
              Карта <br />
              {number}
            </h5>
            <div className="card-text">
              <ul className="list-group">
                <li className="list-group-item">Баланс: {balance}</li>
                <hr />
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => handleCloseCard(idx)}
                >
                  Закрыть карту
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
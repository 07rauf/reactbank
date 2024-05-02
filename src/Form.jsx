import React from "react";
import "./App.css";

function CardForm(props) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = [...formData.values()];

    const card = { number: data[0], balance: +data[1] };

    props.handleOpenCard(card);
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card-form">
      <div className="card-body">
        <h5 className="card-title">
          Карта
          <input className="input-field" placeholder="XXXX XXXX XXXX XXXX" name="number" />
        </h5>
        <div className="card-text">
          <ul className="list-group">
            <input
              className="input-field"
              placeholder="Баланс"
              name="balance"
            />
            <hr />
            <button type="submit" className="submit-btn">
              Открыть карту
            </button>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default CardForm;
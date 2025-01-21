import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './payment.css';

function Payment() {
  const location = useLocation();
  const { amount } = location.state || {}; 

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validateForm = () => {
    if (!cardNumber || !expiryDate || !cvv || !name) {
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setPaymentSuccess(true);  
    }
  };

  if (paymentSuccess) {
    return (
      <div className="Payment">
        <h1>Zahlung erfolgreich!</h1>
        <p>🐾 Vielen Dank für Ihre Spende! 🐾</p>
      </div>
    );
  }

  return (
    <div className="Payment">
      <h1>Bezahlen</h1>
      <div className="payment-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Kartennummer</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 1234 5678"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Gültigkeit</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Karteninhaber</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Max Mustermann"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="payment-info">
            <p>Spendenbetrag: {amount}€</p>
          </div>

          <button type="submit" className="submit-button">Zahlung abschließen</button>

          {!isValid && <p className="error">Bitte füllen Sie alle Felder aus.</p>}
        </form>
      </div>
    </div>
  );
}

export default Payment;

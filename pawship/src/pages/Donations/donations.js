import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './donations.css';

function Donations() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [amountError, setAmountError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !firstName || !lastName || !address || !zip || !city || !country || !phone) {
      setIsValid(false);
      return false;
    }


    if (!amount || (amount === '')) {
      setAmountError('Bitte wählen Sie einen Betrag aus oder geben Sie einen eigenen Betrag ein.');
      setIsValid(false);
      return false;
    }

    setIsValid(true);
    setAmountError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/payment', {
        state: { amount, email, firstName, lastName, address, zip, city, country, phone }
      });
    }
  };

  return (
    <div className="Donations">
      <h1>Wir freuen uns auf deine Spende!</h1>

      <form onSubmit={handleSubmit}>
        <div className="donation-box">
          <div className="options">
            <label>
              <input
                type="radio"
                name="option"
                value="einmalig"
                onChange={(e) => setAmount(e.target.value)}
              />
              einmalig
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="monatlich"
                onChange={(e) => setAmount(e.target.value)}
              />
              monatlich
            </label>
          </div>

          <div className="prices">
            <label className="custom-radio">
              <input
                type="radio"
                name="amount"
                value="5"
                id="amount-5"
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="radio-box">5€</span>
            </label>
            <label className="custom-radio">
              <input
                type="radio"
                name="amount"
                value="10"
                id="amount-10"
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="radio-box">10€</span>
            </label>
            <label className="custom-radio">
              <input
                type="radio"
                name="amount"
                value="20"
                id="amount-20"
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="radio-box">20€</span>
            </label>
            <label className="custom-radio">
              <input
                type="radio"
                name="amount"
                value="50"
                id="amount-50"
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="radio-box">50€</span>
            </label>
          </div>

          <div className="oder">oder</div>

          <div className="self-price">
            <input
              type="number"
              id="custom-spende"
              name="custom-spende"
              min="1"
              placeholder="Eigener Betrag"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {amountError && <p className="error">{amountError}</p>}
        </div>

        <div className="data">
          <h1>Meine Daten</h1>
          <div className="info">
            <select name="gender" id="gender">
              <option value="" disabled selected>Anrede</option>
              <option value="frau">Frau</option>
              <option value="herr">Herr</option>
            </select>
            <input
              type="text"
              placeholder="Vorname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Nachname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Anschrift"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="PLZ"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Ort"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Land"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <input type="submit" value="Spenden" />
        {!isValid && <p className="error">Bitte füllen Sie alle Felder aus.</p>}
      </form>
    </div>
  );
}

export default Donations;

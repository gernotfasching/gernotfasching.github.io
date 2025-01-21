import React from 'react';
import './Contact.css';
import { useFormData } from 'herotofu-react';

const Contact = () => {
  const { formState, getFormSubmitHandler } = useFormData(
    'https://public.herotofu.com/v1/91318510-d26b-11ef-9a5c-d31370001c66'
  );

  const opentime = [
    { tag: 'Montag', zeit: '09:00 - 18:00' },
    { tag: 'Dienstag', zeit: 'Geschlossen' },
    { tag: 'Mittwoch', zeit: '09:00 - 18:00' },
    { tag: 'Donnerstag', zeit: '09:00 - 18:00' },
    { tag: 'Freitag', zeit: '09:00 - 15:00' },
    { tag: 'Samstag', zeit: '11:00 - 14:00' },
    { tag: 'Sonntag', zeit: 'Geschlossen' },
  ];


  return (
    <div className="contact">
      <h1 className="contact-title">Öffnungszeiten und Kontakt</h1>
      
      <div className="open">
        <h2>Öffnungszeiten</h2>
        <div className="time-list">
          {opentime.map(({ tag, zeit }) => (
            <div key={tag} className="time-entry">
              <span className="day">{tag}</span>
              <span className="time">{zeit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-info">
        <h2>Kontakt</h2>
        <form onSubmit={getFormSubmitHandler()} acceptCharset="UTF-8">
          <label>
            <div>
              <input type="text" placeholder="Dein Name" name="name" required />
            </div>
          </label>
          <label>
            <div>
              <input type="text" placeholder="E-Mail-Adresse" name="email" required />
            </div>
          </label>
          <label>
            <div>
              <input type="text" placeholder="Betreff" name="betreff" required />
            </div>
          </label>
          <label>
            <div>
              <textarea placeholder="Nachricht" name="nachricht" required />
            </div>
          </label>
          <div>
            <input type="submit" value="Absenden" />
          </div>
        </form>

        <h2>Andere Kontaktmöglichkeiten</h2>
        <div className="contact-details">
          <p>
            <strong>Adresse:</strong> Ibererstraße 15-21, 8051 Graz
          </p>
          <p>
            <strong>Telefon:</strong> <a href="tel:+43123456789">+43 123 456789</a>
          </p>
          <p>
            <strong>E-Mail:</strong> <a href="mailto:pawship@contact.com">pawship@contact.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

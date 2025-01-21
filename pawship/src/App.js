import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage.js';
import Contact from './pages/Contact/Contact.js';
import About from './pages/About/about.js';
import Animals from './pages/Animals/animals.js';
import AnimalTemplate from './pages/Animals/animalTemplate';
import Donations from './pages/Donations/donations.js';
import Payment from './pages/Payment/payment.js';
import './styles/App.css';
import animalData from './animalData.json'

function App() {

  const generateAnimalRoutes = (animalData) => {
    return [
      ...animalData.dogs.map((animal) => (
        <Route
        key={`dog-${animal.name}`}
        path={`/tiere/${animal.name.toLowerCase()}`}

        element={<AnimalTemplate
                    name={animal.name}
                    gender = {animal.gender}
                    age = {animal.age}
                    nature = {animal.nature}
                    images={animal.images} />}

        />
      )),
      ...animalData.cats.map((animal) => (
        <Route
        key={`cat-${animal.name}`}
        path={`/tiere/${animal.name.toLowerCase()}`}

        element={<AnimalTemplate
                    name={animal.name}
                    gender = {animal.gender}
                    age = {animal.age}
                    nature = {animal.nature}
                    images={animal.images} />}

        />
      )),
    ];
  };

  return (
    <BrowserRouter>
    <div>
    <Header />
    <main>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tiere" element={<Animals animalData={animalData} />} />
    <Route path="/spenden" element={<Donations />} />
    <Route path="/about" element={<About />} />
    <Route path="/payment" element={<Payment />} /> 
    {generateAnimalRoutes(animalData)}
    </Routes>
    </main>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

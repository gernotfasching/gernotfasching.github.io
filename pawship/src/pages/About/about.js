import React from 'react';
import './about.css';

const alex = process.env.PUBLIC_URL + '/images/Team/' + 'alex.png';
const max = process.env.PUBLIC_URL + '/images/Team/' + 'max.png';
const tobias = process.env.PUBLIC_URL + '/images/Team/' + 'tobias.png';
const johanna = process.env.PUBLIC_URL + '/images/Team/' + 'johanna.png';
const nevena = process.env.PUBLIC_URL + '/images/Team/' + 'nevena.png';
const philipp = process.env.PUBLIC_URL + '/images/Team/' + 'philipp.png';
const gernot = process.env.PUBLIC_URL + '/images/Team/' + 'gernot.png';

const About = () => {
  const team = [
    { title: 'Leitung', name: 'Johanna Theissing, Max Hierzer' },
    { title: 'Obmann', name: 'Gernot Fasching' },
    { title: 'Kassier', name: 'Alexander Leitner' },
    { title: 'Tierpfleger/innen', name: 'Nevena Popović, Tobias Prasser und Philipp Müller' },
  ];

  return (
    <div className="about">
      <h1 className="about-title">Unser Team</h1>
      
      <div className="team-list">
        {team.map(({ title, name }) => (
          <div key={title} className="team-entry">
            <span className="role">{title}</span>
            <span className="name">{name}</span>
          </div>
        ))}
      </div>
      <div className="images">
          <div className="image-item">
            <img src={alex} alt="Alex" />
            <p>Alex</p>
          </div>
          <div className="image-item">
            <img src={tobias} alt="Tobias" />
            <p>Tobias</p>
          </div>
          <div className="image-item">
            <img src={max} alt="Max" />
            <p>Max</p>
          </div>
          <div className="image-item">
            <img src={johanna} alt="Johanna" />
            <p>Johanna</p>
          </div>
          <div className="image-item">
            <img src={gernot} alt="Gernot" />
            <p>Gernot</p>
          </div>
          <div className="image-item">
            <img src={philipp} alt="Philipp" />
            <p>Philipp</p>
          </div>
          <div className="image-item">
            <img src={nevena} alt="Nevena" />
            <p>Nevena</p>
          </div>
      </div>


    </div>
  );
};

export default About;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './animals.css';

function Animals({ animalData }) {
  const basePath = `${process.env.PUBLIC_URL}/images/`;
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="Animals">
      <div className="Dogs">
        <div className='title-box'><h1>Unsere Hunde</h1></div>
        <div className="grid-container">
          {animalData.dogs.map((animal) => (
            <Carousel
              key={animal.name}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              className="carousel-small"
            >
                {animal.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(`/tiere/${animal.name.toLowerCase()}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className='animal-name'>{animal.name}</p>
                    <img
                      src={`${basePath}${animal.name}/${image}`}
                      alt={`${animal.name}-${index}`}
                      className="animal-thumbnail"
                    />

                  </div>
                ))}
            </Carousel>
          ))}
        </div>
      </div>
      <div className="Cats">
        <div className='title-box'><h1>Unsere Katzen</h1></div>
        <div className="grid-container">
          {animalData.cats.map((animal) => (
            <Carousel
              key={animal.name}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              className="carousel-small"
            >
              {animal.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(`/tiere/${animal.name.toLowerCase()}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <p className='animal-name'>{animal.name}</p>
                  <img
                    src={`${basePath}${animal.name}/${image}`}
                    alt={`${animal.name}-${index}`}
                    className="animal-thumbnail"
                  />
                </div>
              ))}
            </Carousel>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}

export default Animals;

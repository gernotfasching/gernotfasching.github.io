import React from 'react';
// import './animalTemplate.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './animalTemplate.css';

function AnimalTemplate(data) {
    const linkToImages = process.env.PUBLIC_URL + '/images/' + data.name + '/';
    return (
        <div className="animalTemplate">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="atCarousel">
                {data.images.map((i) => {
                    const picLink = linkToImages + i;
                    return (
                        <div key={i}>
                            <img src={picLink} alt={i} />
                        </div>
                    );
                })}
            </Carousel>
            <div id="steckbrief">
                <div className='attitle-box'><h1>{data.name}</h1></div>
                <div className='steckbrief'><h2>Steckbrief</h2>
                    <div className="info">
                        <h3>
                            <span className="label">Alter:</span> <span className="value">{data.age}</span>
                        </h3>
                        <h3>
                            <span className="label">Geschlecht:</span> <span className="value">{data.gender}</span>
                        </h3>
                        <h3><span className="label">Natur:</span></h3>
                        <ul>
                            {data.nature.map((nat, index) => (
                                <li key={index}>{nat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AnimalTemplate;

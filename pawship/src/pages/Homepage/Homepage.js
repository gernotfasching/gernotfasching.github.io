import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';


function Homepage() {

  const navigate = useNavigate();

  const handleAdoptNowClick = () => {
    navigate('/tiere');
  };

  const banner1 = process.env.PUBLIC_URL + '/images/' + 'banner1.jpg';
  const banner2 = process.env.PUBLIC_URL + '/images/' + 'banner2.jpg';
  const banner3 = process.env.PUBLIC_URL + '/images/' + 'banner3.jpg';

  return (
    <div className="homepage">
      <Carousel autoplay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
          <div className="carousel-text">
            <h1>Finde deinen Pawfekten Partner!</h1>
            <p>Unsere Tiere warten darauf, dein Herz zu erobern.</p>
          </div>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
          <div className="carousel-text2">
            <h1>Ein Zuhause für kleine Helden!</h1>
            <p>Hilf uns, ihnen ein glückliches Leben zu schenken.</p>
          </div>
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
          <div className="carousel-text">
            <h1>Pfoten, die dein Herz berühren!</h1>
            <p>Mach den ersten Schritt und entdecke dein Glück.</p>
          </div>
        </div>
      </Carousel>


        <div className="content">
            <h2>Willkommen bei Pawship</h2>
          <p>
            Wir vermitteln nicht nur Tiere – wir schaffen Verbindungen fürs Leben. Unsere Mission ist es, liebevollen Tieren eine zweite Chance zu geben und Familien mit ihrem perfekten tierischen Begleiter zusammenzubringen.
          </p>
        </div>

        <div className="content">
            <h2>Warum Pawship?</h2>
          <ol>
            <li><strong>Für die Tiere:</strong> Jedes Tier verdient ein Zuhause, in dem es geliebt und geschätzt wird.</li>
            <li><strong>Für dich:</strong> Tiere bereichern unser Leben und schenken bedingungslose Liebe.</li>
            <li><strong>Mach den Unterschied:</strong> Gib einem Tier eine zweite Chance.</li>
          </ol>
        </div>

        <div className="content">
            <h2>Mach den Unterschied!</h2>
          <p>
            Durch Adoption gibst du einem Tier nicht nur ein Zuhause, sondern auch die Chance auf ein glückliches Leben. Schau dir unsere Tiere an und finde deinen neuen besten Freund!
          </p>
          <button onClick={handleAdoptNowClick} className="adopt-button">
            Adopt Now
          </button>
        </div>

        <div className="content">
            <h2>Was unsere Besucher sagen</h2>
          <blockquote>
            "Dank Pawship habe ich meinen besten Freund gefunden! Ich könnte nicht glücklicher sein." – Sarah M.
          </blockquote>
          <blockquote>
            "Die Erfahrung war wunderbar. Die Mitarbeiter sind so engagiert und hilfreich!" – Johannes K.
          </blockquote>
        </div>

        <div className="content">
            <h2>So funktioniert’s</h2>
          <ol>
            <li>
              <strong>Stöbern:</strong> Sieh dir die verfügbaren Tiere auf unserer Seite an.
            </li>
            <li>
              <strong>Verlieben:</strong> Finde das Tier, das perfekt zu dir passt.
            </li>
            <li>
              <strong>Adoptieren:</strong> Wir helfen dir bei jedem Schritt, um sicherzustellen, dass dein neuer Begleiter sich bei dir wohlfühlt.
            </li>
          </ol>
        </div>
    </div>
  );
}

export default Homepage;

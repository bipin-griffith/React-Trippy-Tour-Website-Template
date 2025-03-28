import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/1.jpeg";
import img3 from "../assets/1.jpeg";
import img4 from "../assets/1.jpeg";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-desc"
        heading="HOLY LAND"
        text="Embark on a spiritually enriching journey through the Islamic Holy Land. Visit sacred sites in Jerusalem, such as Al-Aqsa Mosque – the third holiest site in Islam – and explore historic landmarks that hold immense religious and historical significance. Walk through ancient streets where prophets once walked, absorb the peaceful atmosphere, and deepen your connection to Islamic history and heritage. This journey offers reflection, knowledge, and a profound sense of spiritual awakening."
        img1={img1}
        img2={img2}
      />

      <DestinationData
        className="first-desc-reverse"
        heading="Umrah Pilgrimage"
        text="Experience the spiritual serenity of performing Umrah in the holy cities of Makkah and Madinah. From entering the Haram and witnessing the magnificence of the Kaaba, to walking in the footsteps of the Prophet ﷺ, every step is filled with blessings. Pilgrims engage in tawaf (circumambulation), sa’i (walking between Safa and Marwah), and immerse themselves in prayer, reflection, and peace. A journey of purification for the soul and heart, Umrah is a deeply personal and unforgettable act of worship."
        img1={img3}
        img2={img4}
      />
    </div>
  );
}

export default Destination;

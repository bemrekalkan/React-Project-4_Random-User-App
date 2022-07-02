import emailImg from "../assets/email.svg";
import phoneImg from "../assets/phone.svg";
import locationImg from "../assets/location.svg";

const Card = ({ src, name, email, phone, city, country, age, rd }) => {
  return (
    <div className="card">
      <div>
        <img src={src} alt="" />
        <h2>{name}</h2>
      </div>

      <div>
        <img src={emailImg} alt="email" />
        <p>{email}</p>
      </div>

      <div>
        <img src={phoneImg} alt="phone" />
        <p>{phone}</p>
      </div>

      <div>
        <img src={locationImg} alt="location" />
        <p>
          {city}, {country}
        </p>
      </div>

      <div>
        <p>{age}</p>
      </div>

      <div>
        <p>{rd}</p>
      </div>
    </div>
  );
};

export default Card;

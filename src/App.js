import Card from "./components/Card";
import Button from "./components/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [info, setInfo] = useState({});

  const url = "https://randomuser.me/api/";

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { data } = await axios.get(url);
    setInfo(data.results[0]);
  };
  console.log(info);

  if (!info) {
    return <div>LOADING</div>;
  }

  return (
    <div>
      <Card
        src={info.picture.medium}
        name={info.name.title + " " + info.name.first + " " + info.name.last}
        email={info.email}
        phone={info.phone}
        city={info.location.city}
        country={info.location.country}
        age={info.dob.age}
        rd={info.registered.date}
      />
      <Button />
    </div>
  );
};

export default App;

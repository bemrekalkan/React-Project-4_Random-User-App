import Card from "./components/Card";
import Button from "./components/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    getUserInfo();
  }, []);

  const url = "https://randomuser.me/api/";

  function getUserInfo() {
    axios
      .get(url)
      .then((res) => {
        setInfo(res.data.results[0]);
      })
      .then(() => {
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick() {
    getUserInfo();
  }

  console.log(info);
  if (info === null || info === undefined) {
    return <div>Loading...</div>;
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
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;

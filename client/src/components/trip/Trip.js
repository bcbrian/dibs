import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Trip() {
  const [tripData, setTripData] = useState({});
  const [reserved, setReserved] = useState(false);
  const [bedroomName, setBedroomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [mornMeal, setMornMeal] = useState("");
  const [aftMeal, setAftMeal] = useState("");
  const [eveMeal, setEveMeal] = useState("");
  const [mornAct, setMornAct] = useState("");
  const [aftAct, setAftAct] = useState("");
  const [eveAct, setEveAct] = useState("");

  useEffect(() => {
    console.log("Loading Data into State");
  }, []);

  return (
    <>
      <div>
        <h1>Hello this is a Trip Page</h1>
      </div>
    </>
  );
}

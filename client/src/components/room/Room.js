import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Room() {
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState("");
  const [aboutRoom, setAboutRoom] = useState("");

  useEffect(() => {
    console.log("Loading Data into State");
  }, []);

  return (
    <>
      <div>
        <h1>Hi</h1>
      </div>
    </>
  );
}

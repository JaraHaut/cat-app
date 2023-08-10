import "./CatPage.scss";
import { useEffect, useState } from "react";
// import { NavLink, Link, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Form from "../../components/Form/Form";

const API_BASE_URL = "https://api.thecatapi.com";
const API_KEY =
  "live_wCXQfY3fSHtOq71tRj7v3MPIAhxponxlL5oXQtAiSGswlxw5WMDreIg7PaRWbdBf";

function CatPage() {
  const [cats, setCats] = useState(null);
  const [breedName, setBreedName] = useState("");
  const [breedActivity, setBreedActivity] = useState("");
  //set the cats state to save the cats from the API in the state

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/7isAO4Cav?api_key=live_wCXQfY3fSHtOq71tRj7v3MPIAhxponxlL5oXQtAiSGswlxw5WMDreIg7PaRWbdBf"
      )
      .then((response) => {
        console.log(response.data.breeds);
        console.log(response.data.breeds[0].name);
        const breedArray = response.data.breeds;
        console.log(breedArray);
        const newBreedName = breedArray[0].name;
        console.log(breedName);
        setBreedName(newBreedName);
        setCats(breedArray);
        const newBreedActivity = breedArray[0].temperament;
        setBreedActivity(newBreedActivity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(breedName);
  return (
    <>
      <h2>Breed: {breedName}</h2>
      <p>Activity: {breedActivity}</p>
      <p>indoor</p>
      <p>lap</p>
      <p>affection_level</p>
      <p>child_friendly</p>
      <p>energy_level</p>
      <p>hairless</p>
      <p>hypoallergenic</p>
      <p>image</p>
    </>
  );
}

export default CatPage;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Char()  {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const urlchar = `https://rickandmortyapi.com/api/character/${id}`;
    

    const getCharacters = async () => {
      try {
        const resp = await fetch(urlchar);
        const character = await resp.json();
        setCharacter(character);
        console.log(character);
      } catch (error){
        console.log(error);
      }
    };
    useEffect(() => {
      getCharacters();
    },[]);
 
    return (
      <>
        <article className="review">
          <div className="img-container">
            <img
              src={character.image}
              alt={character.name}
              className="person-img"
            />
          </div>
          <h4 className="author">Name: {character.name}</h4>
          <p className="info">Status: {character.status}</p>
          <p className="info">Species: {character.species}</p>
          <p className="info">Type:{character.type ||'N/A'}</p>
          <p className="info">Gender: {character.gender}</p>
          <p className="info">Date cretaed: {character.created}</p>
          <Link className="btn" to="/">Return
          </Link>
        </article>
      </>
    );
};
        
    


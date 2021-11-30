import React, { useState, useEffect, } from "react";
import {Link} from "react-router-dom"
import "./App.css";
import {urlchar} from './Char'


export default function Chars() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const {results } = characters;
  
  const getCharacters = async () => {
    try {
      const resp = await fetch(url);
      const characters = await resp.json();
      setCharacters(characters);
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, [page]);

  const HandlePageUp = () => {
    setPage(page + 1);
  };
  const HandlePageDown = () => {
    setPage(page - 1);
  };


  if (!loading) {
    return (
      <>
        <main className="container">
          <h2>Loading Characters....</h2>
        </main>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <h3>Rick And Morty Characters</h3>
        <ul className="users">
          {results.map((char) => {
            return (
              <li key={char.id}>
                <img src={char.image} alt={char.name} />
                <div>
                  <h4>Name: {char.name}</h4>
                  <p>Status: {char.status}</p>
                  <span>
                    <Link className="btn" to={`char/${char.id}`}><p>More</p></Link>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={() => HandlePageDown()} className="btn">
          Prev
        </button>
        <button onClick={() => HandlePageUp()} className="btn">
          Next
        </button>
      </div>
      <p className="center">{`page ${page} of 42 pages`}</p>
    </>
  );
}

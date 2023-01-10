import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";
import Navigation from "./components/ui/Navigation";
import Search from "./components/ui/Search";
import Footer from "./components/ui/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      try {
        var url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`;
        const result = await axios(url);

        // console.log(result.data.results);
        // console.log(result.data.info);

        setNext(result.data.info.next);
        setPrev(result.data.info.prev);
        setItems(result.data.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [page, query]);

  return (
    <div className="container">
      <Header setPage={setPage} />
      <Search getQuery={(q) => setQuery(q)} getPage={(p) => setPage(1)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Navigation
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        prev={prev}
        next={next}
      />
    </div>
  );
}

export default App;

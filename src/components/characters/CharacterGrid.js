import React from "react";
import Loading from "../ui/Loading";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;

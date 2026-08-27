import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VenomDeck from "./pages/VenomDeck";
import FoodDeck from "./pages/FoodDeck";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks/venom" element={<VenomDeck />} />
      <Route path="/decks/food-and-fellowship" element={<FoodDeck />} />
    </Routes>
  );
}

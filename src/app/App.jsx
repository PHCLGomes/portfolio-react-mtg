import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import FoodDeckPage from "../features/decks/food/FoodDeckPage";
import VenomDeckPage from "../features/decks/venom/VenomDeckPage";
import { ROUTES } from "../lib/routes";

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.venomDeck} element={<VenomDeckPage />} />
      <Route path={ROUTES.foodAndFellowshipDeck} element={<FoodDeckPage />} />
    </Routes>
  );
}

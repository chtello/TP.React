import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCardData, setNewCardData] = useState({
    title: "",
    desc: "",
    img: ""
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addCard = (card) => {
    setCardsData((prevCards) => [...prevCards, card]);
    setIsModalOpen(false);
  };

  return (
    <MyContext.Provider
      value={{ isModalOpen, newCardData, openModal, closeModal, addCard, cardsData }}
    >
      {children}
    </MyContext.Provider>
  );
}

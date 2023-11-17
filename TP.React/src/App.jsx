import { useState } from 'react';
import './App.css'
import Card from './componentes/Card'
import Lucario from "./imagen/P1.png";
import Greninja from "./imagen/P2.png";
import Pikachu from "./imagen/P3.png";
import charizard from "./imagen/P4.png";
import Blastoise from "./imagen/P5.png";
import Lunala from "./imagen/P6.png";
import Dusknoir from "./imagen/P7.png";
import Garchomp from "./imagen/P8.png";
import Rayquaza from "./imagen/P9.png";
import Guzzlord from "./imagen/P10.png";

const App = () => {
  const [cardsData, setCardsData ] = useState([
		{
			id: 1,
      title: "Lucario",
			img:Lucario,
      desc:"Es facherisimo",
		},
    {
			id: 2,
			title: "Greninja",
			img:Greninja,
      desc:"Es facherisimo",
		},
    {
			id: 3,
      title: "Pikachu",
			img:Pikachu,
			desc:"Es tierno",
		},
    {
			id: 4,
      title: "charizard",
			img:charizard,
			desc:"Es poderoso",
		},
    {
			id: 5,
      title: "Blastoise",
			img:Blastoise,
			desc:"Es pesado",
		},
    {
			id: 6,
      title: "Lunala",
			img:Lunala,
			desc:"Tiene buenos colores",
		},
    {
			id: 7,
      title: "Dusknoir",
			img:Dusknoir,
			desc:"Es un fantasma",
		},
    {
			id: 8,
      title: "Garchomp",
			img:Garchomp,
			desc:"Es imponente",
		},
    {
			id: 9,
      title: "Rayquaza",
			img:Rayquaza,
			desc:"Es facherisimo",
		},
    {
			id: 10,
      title: "Guzzlord",
			img:Guzzlord,
			desc:"Es gigante",
		},
  ]);

const BorrarCard = (id) => {
   const updateCard = cardsData.filter((CardPoc)=> CardPoc.id !== id );
   setCardsData(updateCard);
}

const handleModal =()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCardData, setNewCardData] = useState({
    title: "",
    content: "",
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
}

  return (
    <div className="App" >
      <h1 className='titulo'>POKÉDEX</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card 
          key = {index} 
          title = {card.title}
          desc = {card.desc}
          img = {card.img} 
          id = {card.id}
          EliminarCard = {BorrarCard}
          />
        ))}
      </div>
     <button onClick={handleModal}>agregar card</button>
    </div>
  );
};

export default App;

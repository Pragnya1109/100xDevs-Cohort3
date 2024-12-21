
import React from 'react';
import {Card} from './Components/Card.jsx'

function App() {
  const CardsData = [
    {
      img: "https://blog.eatfit.in/wp-content/uploads/2023/03/image-51.png",
      imgAlt: "Margherita Pizza",
      title: "Margherita Pizza",
      description:
        "A classic Italian pizza topped with fresh parsley and herbs with cheese, delicious crunchy",
      rating: "4.5",
    },
    {
      img: "https://blog.eatfit.in/wp-content/uploads/2023/03/image-51.png",
      imgAlt: "Margherita Pizza",
      title: "Cheese Pizza",
      description:
        "A classic Cheese pizza topped with fresh parsley and tomatoes with extra cheese",
      rating: "4.7",
    },
    {
      img: "https://blog.eatfit.in/wp-content/uploads/2023/03/image-51.png",
      imgAlt: "Paneer Pizza",
      title: "Paneer Pizza",
      description:
        "A classic Cheesy Paneer pizza topped with fresh parsley and Peppy Paneer with extra cheese",
      rating: "4.6",
    },
    {
      img: "https://blog.eatfit.in/wp-content/uploads/2023/03/image-51.png",
      imgAlt: "Paneer Pizza",
      title: "Paneer Pizza",
      description:
        "A classic Cheesy Paneer pizza topped with fresh parsley and Peppy Paneer with extra cheese",
      rating: "4.6",
    },
    {
      img: "https://blog.eatfit.in/wp-content/uploads/2023/03/image-51.png",
      imgAlt: "Paneer Pizza",
      title: "Paneer Pizza",
      description:
        "A classic Cheesy Paneer pizza topped with fresh parsley and Peppy Paneer with extra cheese",
      rating: "4.6",
    },
  ];

  return (
    <div className="bg-customBlack min-h-screen flex justify-center overflow-auto items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl w-full">
        {CardsData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;

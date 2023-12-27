import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import SearchInput from "./components/SearchInput";
import MenuList from "./components/MenuList";
import { Item } from "./types";
import DetailsItem from "./components/DetailsItem";

const data = new Array(10000).fill(0).map((value, index) => ({
  id: index,
  externalId: "5023377855405,1",
  name: faker.lorem.words(5),
  internalName: faker.lorem.words(5),
  description: faker.lorem.sentences(4),
  deliveryFlag: 1,
  pickupFlag: 1,
  seatFlag: 0,
  price: 5.75,
  visible: 1,
  availabilityType: "AVAILABLE_NOW",
  sku: "I1529509",
  created: "2020-03-26T14:30:43.000+0000",
  updated: "2020-11-11T18:59:15.000+0000",
  images: [
    {
      id: 557839,
      itemId: 1529509,
      image: faker.image.url(),
      position: 0,
      created: "2020-03-26T14:44:29.000+0000",
      updated: "2020-03-26T14:44:29.000+0000",
    },
  ],
  availableForPublish: true,
  available: true,
}));

function App() {
  const [searchTerm, setSearchTerm] = useState("search");
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [clickedItem, setClickedItem] = useState<Item | null>(null);

  function handleSearchInputChange(text: string) {
    setSearchTerm(text);
  }

  const handleMouseEnter = (item: Item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <SearchInput onChange={handleSearchInputChange} />
        </div>
        <div className="content">
          <MenuList 
            data={data}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            hoveredItem={hoveredItem}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
          />
          <DetailsItem clickedItem={clickedItem} />
        </div>
      </div>
    </>
  );
}

export default App;

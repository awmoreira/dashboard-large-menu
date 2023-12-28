import { useState } from "react";
import "./App.css";
import Skeleton from "@mui/material/Skeleton";
import SearchInput from "./components/SearchInput";
import MenuList from "./components/MenuList";
import { Item } from "./types";
import DetailsItem from "./components/DetailsItem";
import useSimulateFetch from "./hooks/useSimulateFetch";

function App() {
  const [searchTerm, setSearchTerm] = useState("search");
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [clickedItem, setClickedItem] = useState<Item | null>(null);

  const { loading, data } = useSimulateFetch(5000);

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
          {!loading ? (
            <MenuList
              data={data}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredItem={hoveredItem}
              clickedItem={clickedItem}
              setClickedItem={setClickedItem}
            />
          ) : (
            <div style={{ width: '100%', height: '100vh', padding: 15 }}>
              <Skeleton animation="wave" variant="rounded" width="100%" height="100%" />
            </div>
          )}
          <DetailsItem clickedItem={clickedItem} />
        </div>
      </div>
    </>
  );
}

export default App;

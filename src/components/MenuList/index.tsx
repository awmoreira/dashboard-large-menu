import { useRef } from "react";
import { ViewportList } from "react-viewport-list";
import { BsThreeDots } from "react-icons/bs";
import {
  MdRemoveRedEye,
  MdContentCopy,
  MdDelete,
  MdCreate,
} from "react-icons/md";

import { Item } from "../../types";

interface IMenuListProps {
  data: Item[];
  handleMouseEnter: (value: Item) => void;
  handleMouseLeave: () => void;
  hoveredItem: Item | null;
  clickedItem: Item | null;
  setClickedItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

export default function MenuList({
  data,
  handleMouseEnter,
  handleMouseLeave,
  hoveredItem,
  clickedItem,
  setClickedItem,
}: IMenuListProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className="menu">
      <ViewportList viewportRef={ref} items={data}>
        {(item) => (
          <div
            key={item.id}
            className="item"
            style={{
              backgroundColor: clickedItem?.id === item.id ? "#E1F5FE" : "#fff",
            }}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="content"
              style={{ opacity: hoveredItem?.id === item.id ? 0.1 : 1 }}
            >
              <span>{item.name.toUpperCase()}</span>
              <div className="right">
                <span>
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <BsThreeDots />
              </div>
            </div>

            {!!hoveredItem && hoveredItem?.id === item.id && (
              <div className="item-hover">
                <div className="group-icons">
                  <MdRemoveRedEye className="icon" />
                  <MdContentCopy className="icon" />
                  <MdDelete className="icon" />
                  <MdCreate
                    className="icon"
                    onClick={() => setClickedItem(item)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </ViewportList>
    </div>
  );
}

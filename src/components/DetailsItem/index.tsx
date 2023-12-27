import { Item } from "../../types";

interface IDatailsItemProps {
  clickedItem: Item | null;
}

export default function DetailsItem({ clickedItem }: IDatailsItemProps) {
  return (
    !!clickedItem && (
      <div className="details">
        <div>{clickedItem?.name}</div>
      </div>
    )
  );
}

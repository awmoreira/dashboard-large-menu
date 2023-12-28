import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Item } from "../types";

const DATA_ARRAY = new Array(10000).fill(0).map((value, index) => ({
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

export default function useSimulateFetch(delay: number = 2000) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const simulateRequest = new Promise((resolve) => {
        setTimeout(() => {
          const simulatedData = DATA_ARRAY;
          resolve(simulatedData);
        }, delay);
      });

      simulateRequest.then((result) => {
        setData(result as Item[]);
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  return {
    loading,
    data,
  };
}

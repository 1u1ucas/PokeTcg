import { useEffect, useState } from "react";
import { GeneralTypeDto } from "@/dto/typeDto";

export const useGetRandTypes = (howMany: number) => {
  const [randTypes, setRandTypes] = useState<GeneralTypeDto[]>([]);
 const [types, setTypes] = useState<GeneralTypeDto[]>([]);
 const [lastTypeId, setLastTypeId] = useState<number | 1>(1);


  
  const fetchTypes = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/types`);
        const data = await response.json();
        setTypes(data);
        setLastTypeId(data[data.length - 1].id);
  }

const fetchRandTypes = async () => {
  const usedIds = new Set<number>();

    for (let i = 0; i < howMany; i++) {
      let randomId;
      do {
        randomId = Math.floor(Math.random() * (lastTypeId ?? 1)) + 1;
      } while (usedIds.has(randomId));
      usedIds.add(randomId);
       const data = types.find((type) => type.id === randomId);
       if (data) {
        setRandTypes((prev) => [...prev, data]);
      }
    }
};

  useEffect(() => {

    fetchTypes();


  }, []);

  return randTypes;
};
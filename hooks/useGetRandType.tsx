import { useEffect, useState } from "react";
import { GeneralTypeDto } from "@/dto/typeDto";

export const useGetRandTypes = (howMany: number) => {
  const [randTypes, setRandTypes] = useState<GeneralTypeDto[]>([]);


  
  const fetchTypes = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/types`);
        const data = await response.json();
       return data;
  }

const fetchRandTypes = async (types: GeneralTypeDto[]) => {
    const lastTypeId = types[types.length - 1].id;
  const usedIds = new Set<number>();
  console.log(lastTypeId);

    for (let i = 0; i < howMany; i++) {
    
      let randomId;
      do {
        randomId = Math.floor(Math.random() * (lastTypeId - 37 + 1)) + 37;
      } while (usedIds.has(randomId));
      usedIds.add(randomId);
      console.log(randomId);
       const data = types.find((type) => type.id === randomId);
       if (data) {      
        setRandTypes((prev) => [...prev, data]);
        console.log(randTypes);
      } else {
        console.log("error");
    }
};
}

  useEffect(() => {

    (async () => {
        const types = await fetchTypes();

        fetchRandTypes(types);
    })();

   


  }, []);

  return randTypes;
};
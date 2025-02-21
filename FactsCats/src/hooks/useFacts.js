import { useEffect, useState } from "react";
import FactsService from "../services/FactsService";

const useFacts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getFacts = async () => {
      try {
        const response = await FactsService.getRandomFact();

        if (response) setData(response.fact);
      } catch (error) {
        console.error(error);
      }
    };

    getFacts();
  }, []);

  return { data };
};
export default useFacts;

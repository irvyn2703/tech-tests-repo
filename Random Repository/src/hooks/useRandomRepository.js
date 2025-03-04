import { useEffect, useState } from "react";
import GitRepository from "../repositories/GitRepository";

export default function useRandomRepository({ select }) {
  const [isLoading, setIsLoading] = useState(false);

  const getNumRandom = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  useEffect(() => {
    const fetchRepository = async () => {
      if (select) {
        try {
          setIsLoading(true);
          const response = await GitRepository.getRepository({
            language: select,
            numPage: getNumRandom(),
          });

          console.log(response);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchRepository();
  }, [select]);

  return { isLoading };
}

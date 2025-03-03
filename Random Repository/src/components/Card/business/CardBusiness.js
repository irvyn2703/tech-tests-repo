import { useState } from "react";
import options from "../../../json/options.json";
export default function CardBusiness() {
  const [select, setSelect] = useState(null);

  const handleSelectLanguage = (event) => {
    if (event.target.value !== "no select") {
      console.log(event.target.value);
      setSelect(event.target.value);
    }
  };

  return { options, select, handleSelectLanguage };
}

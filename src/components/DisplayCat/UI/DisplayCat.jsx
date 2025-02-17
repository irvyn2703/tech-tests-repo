import DisplayCatBusiness from "../Buisness/DisplayCatBusiness";
import CONFIG from "../../../config/config";
import useFacts from "../../../hooks/useFacts";

const DisplayCat = () => {
  const { data } = useFacts();
  const { getFirstThreeWords } = DisplayCatBusiness({ fact: data });
  return data ? (
    <div
      style={{
        maxWidth: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      <img
        src={`${CONFIG.API_URL_CAT_IMAGE}${getFirstThreeWords()}`}
        alt="imagen del ganito generada por las primeras 3 palabras del fact"
        width="100%"
      />
      <p>{getFirstThreeWords()}</p>
    </div>
  ) : (
    <>Cargando ...</>
  );
};

export default DisplayCat;

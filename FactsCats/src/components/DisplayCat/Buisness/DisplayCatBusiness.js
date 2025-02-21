const DisplayCatBusiness = ({ fact }) => {
  const getFirstThreeWords = () => {
    if (!fact) return;
    return fact.split(" ").slice(0, 3).join(" ");
  };
  return { getFirstThreeWords };
};

export default DisplayCatBusiness;

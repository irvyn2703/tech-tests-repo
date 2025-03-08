export default function RandomRepositoryBusiness() {
  const handleClickRepository = ({ url }) => {
    window.open(url, "_blank");
  };

  return {
    handleClickRepository,
  };
}

export const getDefaultLocation = () => {
  const location = localStorage.getItem("forecaster-location");

  return location ? location : "London";
};

export const getMangas = async () => {
  let response = await fetch("../../sources/novedades.json");
  const data = await response.json();

  return data;
};

import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";

const getMangas = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "mangas"));

  return querySnapshot.docs.map((doc) => doc.data());
};

const importMangas = () => {
  const db = getFirestore();

  const mangasRef = collection(db, "mangas");

  fetch("../../sources/novedades.json")
    .then((response) => response.json())
    .then((json) => {
      json.forEach(async (manga) => {
        await addDoc(collection(db, "mangas"), {
          category: manga.category,
          cover: manga.cover,
          description: manga.description,
          price: manga.price,
          stock: manga.stock,
          title: manga.title,
          volume: manga.volume,
        });
      });
    });
};

export { getMangas, importMangas };

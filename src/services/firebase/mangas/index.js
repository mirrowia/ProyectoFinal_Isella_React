import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  orderBy,
  where,
  updateDoc,
} from "firebase/firestore";

const getMangas = async (category) => {
  const db = getFirestore();
  const mangasRef = collection(db, "mangas");

  if (category) {
    category = String(category).replace("-", " ");
    const q = query(
      mangasRef,
      where("category", "==", category),
      orderBy("category"),
      orderBy("title"),
      orderBy("volume")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } else {
    const q = query(mangasRef, orderBy("title"), orderBy("volume"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
};

const getManga = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "mangas", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return {};
  }
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

const updateStock = async (id, stock) => {
  const db = getFirestore();
  const docRef = doc(db, "mangas", id);
  await updateDoc(docRef, {
    stock: stock,
  });
};

export { getManga, getMangas, importMangas, updateStock };

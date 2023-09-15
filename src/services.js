import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// getProduct
export const getProduct = async (id) => {
    const itemsCollection = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemList = itemsSnapshot.docs.map(doc => doc.data());

    return itemList.find(item => item.Id === id);
};

// getProducts
export const getProducts = async (category) => {
    const itemsCollection = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemList = itemsSnapshot.docs.map(doc => doc.data());

    if (!category || category === "Inicio")
        return itemList;

    return itemList.filter(item => item.categoryId === category);
}
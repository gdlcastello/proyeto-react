import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID

  };

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getProduct = async (id) => {
    const itemsCollection = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemList = itemsSnapshot.docs.map(doc => doc.data());

    return itemList.find(item => item.Id === id);
};


export const getProducts = async (category) => {
    const itemsCollection = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemList = itemsSnapshot.docs.map(doc => doc.data());

    if (!category || category === "Inicio")
        return itemList;

    return itemList.filter(item => item.categoryId === category);
}
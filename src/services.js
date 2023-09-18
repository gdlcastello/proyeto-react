import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyB6PHuO_MonhWr8FuBLkIohAzQF5B32wY4",
    authDomain: "coder-react-a0fd4.firebaseapp.com",
    projectId: "coder-react-a0fd4",
    storageBucket: "coder-react-a0fd4.appspot.com",
    messagingSenderId: "897736374327",
    appId: "1:897736374327:web:6792c6c6085831d84867b2"
};



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
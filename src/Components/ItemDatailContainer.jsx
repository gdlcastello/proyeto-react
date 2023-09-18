import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemDatail from "./ItemDatail";

const ItemDatailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response);
        })
            .catch((error) => {
                setItem(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);


    return <ItemDatail item={item} isLoading={isLoading} />
};

export default ItemDatailContainer;
import { useContext } from "react";

const Checkout = () => {
    const { cart } = useContext(CartContext);

    return <>
        {cart.map(({ title, price }) => <div key={title}>
            {title}
        </div>)}
    </>
}

export default Checkout;
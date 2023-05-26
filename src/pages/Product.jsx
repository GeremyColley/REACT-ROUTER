import { useParams } from "react-router-dom";

const Product = () => {

    const params = useParams();

    return (
        <div>
            <h1>Product - {params.id}</h1>
        </div>
    );
};

export default Product;
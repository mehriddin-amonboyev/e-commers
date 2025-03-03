import { useParams } from "react-router-dom"
import { productData } from "../../data";
import { Detail } from "./component/detail";
import { NotFound } from "../NotFound/notFound";

export const ProductDetail = () => {
    const { id } = useParams();
    if (!productData.some((item) => item.id == id)) {
        return <NotFound/>
    }
    return (
        <div className="container">
            {productData.map((item) => item.id == id &&
                <Detail key={item.id} product={item} />
            )}
        </div>
    )
}
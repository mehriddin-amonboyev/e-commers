import { useParams } from "react-router-dom"
import { NotFound } from "../NotFound/notFound";
import { productData } from "../../data";
import { Detail } from "./component/detail";

export const ProductDetail = () => {
    const { id } = useParams();
    if (!productData.some((item) => item.id == id)) {
        return <NotFound />
    }
    return (
        <div className="container">
            {productData.map((item) => item.id == id &&
                <Detail key={item.id} product={item} />
            )}
        </div>
    )
}
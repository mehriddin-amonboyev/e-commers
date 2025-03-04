import { useParams } from "react-router-dom"
import { productData } from "../../data";
import { Detail } from "./component/detail";
import { NotFound } from "../NotFound/notFound";
import { useGetProducts } from "../home/service/query/useGetProduct";

export const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetProducts();
    return (
        <div className="container">
            {data?.map((item) => item.id == id &&
                <Detail key={item.id} product={item} />
            )}
        </div>
    )
}
import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetProducts = () => {
  return useQuery({
    queryKey:['product_list'],
    queryFn: () => request.get("/products").then((res) => res.data)
  })
}

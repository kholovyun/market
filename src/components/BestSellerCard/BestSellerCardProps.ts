import IProduct from "../../interfaces/IProduct"

export default interface IBestSellerProps {
    img: string
    price: number
    rating: number
    name: string
    product: IProduct
}
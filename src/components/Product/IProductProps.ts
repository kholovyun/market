import IProduct from "../../interfaces/IProduct"

export default interface IProductProps {
    img: string
    price: number
    salesPrice: number
    name: string
    product: IProduct
}
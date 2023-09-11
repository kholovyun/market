import IProduct from "./IProduct"

export default interface ICartProduct {
    id: string
    quantity: number
    product: IProduct
}
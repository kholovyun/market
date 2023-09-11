import IProduct from "../../interfaces/IProduct";

export default interface ProductState {
    products: [] | IProduct[]
    bestSellers: [] | IProduct[]
}
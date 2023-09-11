import instance from "./instance"

export const productsApi = {
    getProducts : async() => {
        try {
            const products = await instance.get("/products.json")
            return products
        } catch (error) {
            console.log(error)
        }
     
    },
    getBestSellers : async() => {
        try {
            const bestSellers = await instance.get('/bestsellers.json')
            return bestSellers   
        } catch (error) {
            console.log(error)
        }
    }
}
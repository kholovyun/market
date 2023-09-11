import instance from "./instance"

export const categoryApi = {
    getCategories : async() => {
        const categories = await instance.get("/categories.json")
        return categories
    }
}
import ICartProduct from "../../interfaces/ICartProduct"
import IUserDto from "../../interfaces/IUserDto"

export default interface IUsersState {
    user: IUserDto | null
    isAuth: boolean
    message: string
    cart: ICartProduct[] | []
}

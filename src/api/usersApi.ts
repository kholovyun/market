import IUserDto from "../interfaces/IUserDto"
import instance from "./instance"

export const UsersApi = {
    register : async(newUser: IUserDto) => {
        try {
            await instance.post("/users.json", newUser)
            const users = await instance.get("/users.json")
            const data = users.data
            if (users) {
                const foundUser = Object.values(data).find(
                  (user) => newUser.username === user.username && user.password === newUser.password
                )
            return foundUser
            }
            return null
        } catch (error) {
           console.log(error) 
        }
    },
    login : async (userData: IUserDto) => {
        const users = await instance.get("/users.json")
      
        if (users) {
          const foundUser = Object.values(users.data as IUserDto).find(
            (user) => userData.username === user.username && user.password === userData.password
          );
          
          return foundUser;
        }
        
        return null;
      }
}
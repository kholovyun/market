import { Outlet } from "react-router-dom"
import Header from "./LayoutStatic/Header/Header"

const Layout: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
export default Layout

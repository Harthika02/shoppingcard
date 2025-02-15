import { Route, Routes } from "react-router-dom"
import {Cart ,Home} from  "../pages/Index.js"
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

import { Route } from "react-router-dom";
import Register from "../pages/Register"
import login from "../pages/login";



const AppRoutes =()=>{
    return(
        <>

        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>


            


        </Routes>
        
        
        </>

    )
}
export default AppRoutes



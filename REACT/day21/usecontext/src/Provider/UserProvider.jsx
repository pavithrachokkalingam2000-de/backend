import { Children, useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

const UserProvider= ({Children})=>{

    
    
    


    return(
        <>
     <UserProvider>

        {Children}
     </UserProvider>
        </>
    )
}
export default UserProvider





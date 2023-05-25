import { useEffect } from "react";

const useTitle = (title) =>{
   useEffect(()=>{
    document.title = `${title}|Bristo-Restaurant`
   },[title])
}

export default useTitle;
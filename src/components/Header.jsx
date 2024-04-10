import { useState } from "react";


function Header(){

    const [cantidad, setCantidad] = useState(100000);

    console.log(cantidad)
    return (
        <h1 className="text-4xl font-extrabold text-gray-500 text-center">
      ¿Cúanto <span className="text-indigo-600">dinero </span> necesitas?
    </h1>
    )
}


export default Header;
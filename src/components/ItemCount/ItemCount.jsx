// import { useState } from "react";

// const ItemCount = () => {
//     const [count , setCount] = useState(0);
//     const stock = 5;

//     const onAdd =() => {
//         if (count === stock) return
//         setCount(count + 1);
//     };

//     const onSubtract =() => {
//         if (count === 0) return
//         setCount(count - 1);
//     };

//     return ( 
//         <div>
//             <button onClick={onSubtract}>-</button>
//             <spam>{count}</spam>
//             <button onClick={onAdd}>+</button>
//         </div>
//     );
// };

import { useState } from "react";

const ItemCount = ({ stock, setCount, count}) => {
    const add = () => {
        if (count === stock) return;
        setCount(count + 1);
        
    }
    const rest = () => {
        if (count === 0) return;
        setCount(count - 1)
    }
    return (
        <div>
        <button onClick={rest}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
    );
};

export default ItemCount;



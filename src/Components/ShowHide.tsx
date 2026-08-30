// import { useState } from "react";
//  function ShowHide() {
//     const[show, setShow ] = useState(true);

//  return (
//     <>
//       <button onClick={() => setShow(true)}>Show</button>
//       {show && <h1>Hello React</h1>}
//       <button onClick={() => setShow(true)}>Hide</button>
//       {Hide && <h1>Hello React</h1>}
    
//     </>
//  );
// }

// export default ShowHide;




import { useState } from "react";

function ShowHide() {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(true)}>Show</button>

            {show && <h1>Hello React</h1>}

            <button onClick={() => setShow(false)}>Hide</button>
        </>
    );
}

export default ShowHide;






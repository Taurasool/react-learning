import { useEffect } from "react";
function BrowserTitle() {
   
    useEffect(() => {
    document.title = "My React App";
}, []);

return (
    <>
        <h2>Browser Title Updated</h2>
    </>
);
}
export default BrowserTitle;

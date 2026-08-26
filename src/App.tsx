import Header from "./Components/Component.tsx";
import Footer from "./Components/Footer.tsx";
import StudentCard from "./Components/StudentCard.tsx";
import EmployeeCard from "./Props/Props.tsx";
import ProductCard from "./Props/ProductCard.tsx";

function App(){
    return (
        <>
             <Header />
             <Footer />

             <StudentCard />
             <StudentCard />
             <StudentCard />


             <EmployeeCard name="Tauseef" salary={20000} />

             <ProductCard title= "card" price= {1500} rating={1} />
        </>
    );
}
export default App;
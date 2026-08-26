import Header from "./Components/Component.tsx";
import Footer from "./Components/Footer.tsx";
import StudentCard from "./Components/StudentCard.tsx";
import EmployeeCard from "./Props/Props.tsx";
function App(){
    return (
        <>
             <Header />
             <Footer />

             <StudentCard />
             <StudentCard />
             <StudentCard />


             <EmployeeCard name="Tauseef" salary={20000} />
        </>
    );
}
export default App;
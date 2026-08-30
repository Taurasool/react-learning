import Header from "./Components/Component.tsx";
import Footer from "./Components/Footer.tsx";
import StudentCard from "./Components/StudentCard.tsx";
import EmployeeCard from "./Props/Props.tsx";
import ProductCard from "./Props/ProductCard.tsx";
import TeacherCard from "./Props/TeacherCard.tsx";
import Counter from "./Components/Counter.tsx";
import ShowHide from "./Components/ShowHide.tsx";
import CounterPlusThree from "./Components/CounterPlusThree.tsx";
import Studentobject from "./Components/Studentobject.tsx";
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


             <TeacherCard name="tauseef" price={2000} rating={1} />
             <TeacherCard name="rasool" price={3000} rating={2} />
             <TeacherCard name="Rasool" price={4000} rating={3} />

             <Counter />

             <ShowHide />

             <CounterPlusThree />

             <Studentobject />

        </>
    );
}
export default App;
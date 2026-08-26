type TeacherCard = {
    name: string;
    price : number;
    rating : number;

};

function TeacherCard(Props: TeacherCard) {
    return (
        <>

        <h1>{Props.name}</h1>
        <h2>{Props.price}</h2>
        <h3>{Props.rating}</h3>
        
        </>
    );
}

export default TeacherCard;
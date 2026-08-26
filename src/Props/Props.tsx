type EmployeeProps = {
      name: string;
      salary: number;
};
  function EmployeeCard(props: EmployeeProps) {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.salary}</h2>
       </>

    );
  }

  export default EmployeeCard;
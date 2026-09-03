function LoginForm(){
    return(
       <>
       <h1>Login Form</h1>
       <form>
        <input type= "email"
        placeholder="Enter Email"/>
        <br></br>


        <input type = "password"
        placeholder="Enter Password"/>
        <br></br>

        <button type="submit">Login</button>
       </form>
       </>

    );
}

export default LoginForm;
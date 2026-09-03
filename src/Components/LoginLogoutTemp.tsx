function LoginLogout(){
    let isLogin = true;
    return(
        <>
    {isLogin ? "Welcome User" : "Please Login"}
    </>
    );
}
export default LoginLogout;

import {SignUp } from "@clerk/nextjs"


export default function signUpPage(){
    return(
<>
<h1>Welcome to my signUp page</h1>
<SignUp />
</>

    );
}
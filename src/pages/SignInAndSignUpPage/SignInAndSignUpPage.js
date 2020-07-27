import React from 'react';
import './SignInAndSignUpPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUpPage = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )  
}

export default SignInAndSignUpPage;
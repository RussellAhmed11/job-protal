import { useContext } from 'react';
import loginLottiAnimation from '../../assets/Lotti/signin.json'
import AuthContex from '../../Contex/AuthContex/AuthContex';
import Lottie from 'lottie-react';
import SocialLogin from '../Share/SocialLogin';

const SignIn = () => {
    const {signInUser}=useContext(AuthContex)
const handalesSignin = (e) => {
        e.preventDefault(e);
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
   
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-10/12">
                <div className="text-center lg:text-left w-1/2">

                    <Lottie animationData={loginLottiAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-lg shrink-0 shadow-2xl">
                    <h1 className="mt-4 ml-8 text-3xl font-bold">Signin Now!</h1>
                    <div className="card-body">
                        <form onSubmit={handalesSignin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 w-full">SignIn</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;
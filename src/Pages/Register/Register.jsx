import Lottie from 'lottie-react';
import registerAnimation from '../../assets/Lotti/register.json'
import { useContext, useState } from 'react';
import AuthContex from '../../Contex/AuthContex/AuthContex';
import SocialLogin from '../Share/SocialLogin';

const Register = () => {
    const { createUser } = useContext(AuthContex)
    const [errorMessege, setErrorMessege] = useState()
    const handaleOnsubmit = (e) => {
        e.preventDefault(e);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PasswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6}$/;
        if (PasswordRegex.test(password)) {
            return setErrorMessege('password should be 6 charecter where one upercase and one number')
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
        const users = { name, email, password }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">

                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-4 ml-8 text-3xl font-bold">Sign Up Now!</h1>
                    <div className="card-body">
                        <form onSubmit={handaleOnsubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" />
                            <p className='text-red-600'>{errorMessege}</p>
                            <button className="btn btn-neutral mt-4 w-full">SignUp</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
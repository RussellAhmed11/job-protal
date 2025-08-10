
import AuthContex from '../../Contex/AuthContex/AuthContex';
import { useContext } from 'react';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContex)
    const handlegoogleSign=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className='divider'>Or</div>
            <button onClick={handlegoogleSign} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;
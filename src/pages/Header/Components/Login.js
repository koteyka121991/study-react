import React from 'react';
import LoginForm from '../../common/modal/LoginForm';


// const LoginForm = (props) => {
//     return (
//         <form>
//             <div><Field placeholder={"login"} name={"login"} component={"input"} /></div>
//             <div><Field placeholder={"password"} name={"password"} component={"input"} /></div>
//             <div><Field  component={"input"} name={"remember me"} type={"checkbox"}/>Remember me</div>
//             <button>Login</button>
//         </form>
//     )
// }
// const LoginReduxForm = reduxForm({form: 'login'
//   })(LoginForm)
const Login = (props) => {
    return (<div>

        <h1 onClick={()=> {}}>Войти</h1>
        <LoginForm />

    </div>

    )
}


export default Login;
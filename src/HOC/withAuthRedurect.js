import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
let mapStateToPropsForRedirect = (state) => ({   
    isAuth: state.auth.isAuth  
 });

export const WithRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='login' />
            return <Component {...this.props} />
        }
    }
 
    let  ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

// создан hoc его передаем в юзеров и профайл( помогает избежать дублирование кода)
// HOC дает пропсы или какое либо поведние, часто hoc называют с пиставко with(c)
// conect это hoc
// создали функцию защиты для не автаризованых пользователей
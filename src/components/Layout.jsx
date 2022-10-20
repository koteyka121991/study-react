import {Link, Outlet } from 'react-router-dom';
const Layout =() =>{
    return(
        <>
        <header>
                    <Link to='/'>Главная</Link>
                    <Link to='products'>Каталог</Link>                
         </header>
         <main>
                <Outlet />
                </main>
    <footer></footer>
      </>
    )
}
export default Layout;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <nav className='navbar'>
        <main className='navmain'>
            <Link to={"/user"}>User</Link>
            <Link to={"/admin"}>Admin</Link>
        </main>
    </nav>
    </>
  )
}

export default Header
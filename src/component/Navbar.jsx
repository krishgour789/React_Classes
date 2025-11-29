import React from 'react'


const Navbar = (props) => {
  return (
    <>
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', background: '#282c34', color: '#fff'}}>
        <div style={{fontWeight: 700, fontSize: '1.2rem'}}>{props.title}</div>

        <ul style={{listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0}}>
            <li><a href="/" style={{color: '#61dafb', textDecoration: 'none'}}>Home</a></li>
            <li><a href="/about" style={{color: '#fff', textDecoration: 'none'}}>About</a></li>
            <li><a href="/contact" style={{color: '#fff', textDecoration: 'none'}}>Contact</a></li>
        </ul>

        <div>
            <button style={{background: '#61dafb', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: 4}}>Sign In</button>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar

import "./Navbar.css"
function Navbar(prop){
    return(
        <div className="navbar">
            <button onClick={()=>{prop.galleryRef.current?.scrollIntoView({ behavior: 'smooth'})}}>Gallery</button>
            <button onClick={()=>{prop.aboutRef.current?.scrollIntoView({behavior: 'smooth'})}}>About</button>
            <button onClick={()=>{prop.contactRef.current?.scrollIntoView({behavior: 'smooth'})}}>Contact</button>
        </div>
    )
}

export default Navbar;
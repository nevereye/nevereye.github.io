import './Footer.css'
function Footer(prop){
    return (
        <div ref={prop.contactRef} className="footer">
            <h3>Contacts:</h3>
            <h3>itsnevereye@gmail.com</h3>
            <a href='https://github.com/nevereye'>
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={'30px'} />
            </a>
        </div>
    )
}

export default Footer;
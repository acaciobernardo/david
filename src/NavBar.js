const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/" className="href">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }} className="href">New Blog</a>
            </div>
        </nav>

     );
}
 
export default Navbar;
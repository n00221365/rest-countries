    import { Link } from 'react-router-dom';
    import "bootstrap-icons/font/bootstrap-icons.css";


    const Navbar = () => {
        return (
            <div className="bg-dark " style={{ height: '50px' }}>
                <div>
                <i class="bi bi-globe" style={{color:'#FFFFFF',height: '50px', width:'50px'}}></i>
                <Link to='/' >
                    <h4 style={{color:'#FFFFFF', paddingBottom:200}}>Country Catalogue</h4>
                </Link>

                {/* <Link to='/country/Ireland' >
                    <h4 style={{color:'#FFFFFF'}}>Europe</h4>
                </Link> */}
                </div>

            </div>
        );
    };

    export default Navbar;
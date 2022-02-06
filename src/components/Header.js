import NavButton from './NavButton';
import logo from '../static/logo.png'

const Header = () => {
    return(
        <div style={divStyle}>
            <header style={{borderRadius: '8px'}}>
                <div className="grid-container">
                    <div className="grid-item">
                        <a href="/">
                            <img src={logo} alt={"logo"} style={logoStyle} /> 
                        </a>
                    </div>
                    <div className="grid-item">
                        <NavButton name={'Projects'} color={'black'} backgroundColor={'#607D86'} link={'/projects'}/>
                    </div>
                    <div className="grid-item">
                        <NavButton name={'Blog'} color={'black'} backgroundColor={'#607D86'} link={'/blog'}/>
                    </div>
                    <div className="grid-item">
                        <NavButton name={'Contact'} color={'black'} backgroundColor={'#607D86'} link={'/contact'}/>
                    </div>
                </div>
            </header>
        </div>
    )
};

const divStyle = {
    padding: '10px',
};

const logoStyle = {
    width: '130px',
    height: '125px'
}

export default Header;
import NavButton from './NavButton';
import DropDownMenu from './DropDownMenu';
import logo from '../static/logo.png'

const Header = () => {
    const isDesktop = window.screen.width >= 1000;

    return(
        <div style={divStyle}>
            <header style={{borderRadius: '8px'}}>
                <div className="grid-container">
                    <div className="grid-item">
                        <a href="/">
                            <img src={logo} alt={"logo"} style={logoStyle} /> 
                        </a>
                    </div>
                    {isDesktop &&
                    <>
                        <div className="grid-item">
                            <NavButton name={'Projects'} color={'black'} backgroundColor={'#607D86'} scrollTo={'projects'}/>
                        </div>
                        <div className="grid-item">
                            <NavButton name={'Blog'} color={'black'} backgroundColor={'#607D86'} scrollTo={'blog'}/>
                        </div>
                        <div className="grid-item">
                            <NavButton name={'Contact'} color={'black'} backgroundColor={'#607D86'} scrollTo={'contact'}/>
                        </div>
                    </>}
                    {!isDesktop &&
                    <>
                        <div className="grid-item">
                            <DropDownMenu labels={['Projects', 'Blog', 'Contract']} scrollTos={['projects', 'blog', 'contact']}/>
                        </div>
                    </>}
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
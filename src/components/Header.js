import NavButton from './NavButton';

const Header = () => {
    return(
        <div style = {divStyle}>
            <header>
                <div class='grid-container'>
                    <div class='grid-item'> <h1>LOGO</h1> </div>
                    <div class='grid-item'>
                        <NavButton name={'About Me'} color={'orange'} link={'/'}/>
                    </div>
                    <div class='grid-item'>
                        <NavButton name={'Projects'} color={'orange'} link={'/projects'}/>
                    </div>
                    <div class='grid-item'>
                        <NavButton name={'Contact'} color={'orange'} link={'/contact'}/>
                    </div>
                </div>
            </header>
        </div>
    )
};

const divStyle = {
    padding: '20px',
};

export default Header;
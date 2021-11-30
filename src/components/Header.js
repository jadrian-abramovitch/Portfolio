import NavButton from './NavButton';

const Header = () => {
    return(
        <div style = {divStyle}>
            <header>
                <div class='grid-container'>
                    <div class='grid-item'> <h1>LOGO</h1> </div>
                    <div class='grid-item'>
                        <NavButton name={'About Me'} color={'black'} backgroundColor={'#607D86'} link={'/'}/>
                    </div>
                    <div class='grid-item'>
                        <NavButton name={'Projects'} color={'black'} backgroundColor={'#607D86'} link={'/projects'}/>
                    </div>
                    <div class='grid-item'>
                        <NavButton name={'Contact'} color={'black'} backgroundColor={'#607D86'} link={'/contact'}/>
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
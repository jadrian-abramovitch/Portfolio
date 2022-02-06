const Footer = () => {
    const footerStyle = {
        backgroundColor: '#C44B4F',
        borderRadius: '8px',
    };

    return (
        <div style={{padding: '10px'}}>
            <footer  style={footerStyle}>
                <div className="grid-container">
                    <div className="grid-item">
                    </div>
                    <div className="grid-item">
                        <h4>Jadrian Abramovitch</h4>
                    </div>
                    <div className="grid-item">
                        <h4>jmabramo@uwaterloo.ca</h4>
                    </div>
                    <div className="grid-item">
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
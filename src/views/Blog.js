import TextBox from '../components/TextBox';

const Blog = () => {
    return(
        <a style={textStyle} href='https://jadrianabramovitch.substack.com/p/about-this-blog?r=1ba97k&utm_campaign=post&utm_medium=web'>
            <TextBox>
                <h1> About this Blog </h1>
                <h4> The What and the Why </h4>
            </TextBox>
        </a>

    );
};

const textStyle = {
    color: 'black',
    textDecoration: 'none'
};

export default Blog;
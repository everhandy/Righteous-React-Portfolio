export default function AboutMe() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ADD8E6',
    }; 

    const imageStyle = {
        width: '500px',
        height: 'auto',
        borderRadius: '50%',
        margin: '10px',
    };
    
    return (
        <section id="about-me" style={containerStyle}>
            <img
                src="./src/assets/EverettHeadShotmain.jpg"
                alt="Everett's profile picture"
                style={imageStyle}
            />           
            <div className="card text-dark bg-light mb-3 mx-5">
                <div className="card-header"><strong>About Me:</strong></div>
                <div className="card-body">
                    <p className="card-text">Hello world! My name is Everett Handy, I am 28 years old and born and raised in Charlotte, NC. I graduated from UNC-Chapel Hill in 2017 with a bachelor's degree in English and Communication.</p>
                    <p className="card-text">My work experience so far has been in the Sales and Recruiting industries but I am eager to begin a career change into the world of IT. Outside of my work and studies, I am an avid outdoorsman, a voracious reader, and tremendous sports fan. Please do not be a stranger!</p>
                </div>
            </div>
        </section>
    );
}
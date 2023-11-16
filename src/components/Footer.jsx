export default function Footer() {
    const footerStyle = {
        position: 'relative', 
        bottom: 0, 
        width: '100%',
        backgroundColor: '#ADD8E6',
    };

    return (
        <div style={ footerStyle }>
            <div className="d-flex justify-content-center">
                <a className="btn btn-primary mx-2" href="https://github.com/everhandy" role="button">GitHub</a>
                <a className="btn btn-primary mx-2" href="https://www.linkedin.com/in/everett-handy-1115a4203/" role="button">LinkedIn</a>
                <a className="btn btn-primary mx-2" href="https://www.facebook.com/everett.handy" role="button">Facebook</a>
            </div>
      </div>
    );
}
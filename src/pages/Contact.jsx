export default function Contact () {
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ADD8E6',
    }; 
    
    return (
        <section id="about-me" style={containerStyle}>
      <div className="card col-sm-6 text-dark bg-light my-3 mx-3">
        <div className="card-header">
          <strong>Contact Me:</strong>
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="nameFormControlInput"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormControlInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 mx-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          >
           Leave me a message:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
           <div class="col-12 mt-2">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </div>
      </div>
      <div className="my-3">
        <h2 className= "text-white">Feel free to reach out to me directly by phone or email:</h2>
        <hr />
        <h3 className= "text-white">📱 704-517-5606 <br />
        📧 everettdhandy@outlook.com</h3>
        <hr />
        <h2 className= "text-white">And if you have not already, please check out my social media links below:</h2>
      </div>
    </section>
    )
}
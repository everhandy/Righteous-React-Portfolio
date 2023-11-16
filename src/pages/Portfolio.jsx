export default function Portfolio() {
    const projects = [
      {
        title: 'Furever Friend Finder',
        description: 'Helping people find rescue-able pets in local animal shelters.',
        imageUrl: './src/assets/FFF.png',
        liveLink: 'https://vin7ag3.github.io/team2/',
        githubLink: 'https://github.com/Vin7ag3/team2',
      },
      {
        title: 'Nutstash',
        description: 'Allows users to track their expenses and save money.',
        imageUrl: './src/assets/nutstash.png',
        liveLink: 'https://mysterious-everglades-79921-73012b02b50e.herokuapp.com/',
        githubLink: 'https://github.com/drewdawge/bug-free-octo-system',
      },
      {
        title: 'Notorious Note Taker',
        description: 'Allows users to add, update and delete personal notes.',
        imageUrl: './src/assets/NNT.png',
        liveLink: 'https://damp-beach-81704-adf9a5f7deb4.herokuapp.com/notes',
        githubLink: 'https://github.com/everhandy/Notorious-Note-Taker',
      },
      {
        title: 'Wicked Workday Scheduler',
        description: 'Allows people to manage their schedule.',
        imageUrl: './src/assets/WWS.png',
        liveLink: 'https://everhandy.github.io/Wicked-Workday-Scheduler/',
        githubLink: 'https://github.com/everhandy/Wicked-Workday-Scheduler',
      },
      {
        title: 'Wise Weather Dashboard',
        description: 'Lets people search the 5-day forecast by city.',
        imageUrl: './src/assets/wwd.png',
        liveLink: 'https://everhandy.github.io/Wise-Weather-Dashboard/',
        githubLink: 'https://github.com/everhandy/Wise-Weather-Dashboard',
      },
      {
        title: 'Wonderful Web API Quiz',
        description: 'Allows software developers to test their web API skills with this quiz module.',
        imageUrl: './src/assets/codingquiz.png',
        liveLink: 'https://everhandy.github.io/Wonderful-Web-APIs-Quiz-Project/',
        githubLink: 'https://everhandy.github.io/Wonderful-Web-APIs-Quiz-Project/',
      },
    ];

    const portfolioStyle = {
        backgroundColor: '#ADD8E6',
    };
  
    return (
      <section id="portfolio" >
        <div className="container-fluid px-5" style={ portfolioStyle }>
          <h2 className="text-center text-white pt-4 mb-4"><strong>Portfolio:</strong></h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={`Screenshot of ${project.title}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        href={project.liveLink}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deployed Link
                      </a>
                      <a
                        href={project.githubLink}
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
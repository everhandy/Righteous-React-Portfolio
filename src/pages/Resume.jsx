export default function Resume() {
    return (
        <section id="about-me" className="m-3" >
            <h2 className="text-center">Check out my Resume:</h2>
            <object data="./src/assets/Everett Handy 2022 resume.pdf" type="application/pdf" width="100%" height="1000px">
            <p className="text-center">Unable to display PDF file. <a href="./src/assets/Everett Handy 2022 resume.pdf">Download</a> instead.</p>
            </object>
        </section>
    )
}
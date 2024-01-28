
export default function AboutPage() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="m-5 p-30">About Me</h1>
            <p className="m-5 p-10">Hello! My name is <b>Pamela Agrast</b> and I am an tech enthusiast, life-long learner, and past educator. Recently, my passion has been learning about creating websites and software applications.  I have spent 6 immersive months in a Full-Stack Development Bootcamp through The Ohio State University and EdX learning the skills of Frontend design to make a engaging user interface to the Backend behavior from APIs to databases.  After the bootcamp, I will continue to practice my new skills and dive deeper into the content</p>
            <p className="m-5 p-10">Prior to my Full-Stack life, I was an elementary educator for 14 years.  Through my years in service as a teacher, I learned strong skills in problem-solving, task and project management, data analysis, and leadership.  I have a B.A in Speech and Hearing Science and a M.Ed. of Early Education from The Ohio State University.</p>
            <p className="m-5 p-10">My interests lie in EdTech, Parent and Child Advocacy in Education, and Literacy.  My hobbies include bird watching, painting and crafting, and volunteering at a Non-Profit Therapy Horse Barn.</p>
          </div>
          <div className="col-md-4 ml-auto d-flex justify-content-end">
            <div className="embed-responsive embed-responsive-1by1" id="me">
              <img src="/images/Me.jpg" id="pic" className="embed-responsive-item img-fluid m-20 p-20" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
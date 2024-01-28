import Resume from '../assets/files/resume.pdf'


export default function ResumePage() {

  return (
    <>
      <a href={Resume} download="Resume" target='_blank' id="download" className="m-5">
        <button  className="btn btn-secondary mx-auto d-block">Download Resume</button>
      </a>
      <div>
      <img src="/images/resume1.png" className="img-fluid mx-auto d-block" alt="Responsive image"/>  
      </div>
      <div>
      <img src="/images/resume2.png" className="img-fluid mx-auto d-block m-5" alt="Responsive image"/>  
      </div>
      
    </>
  );
}
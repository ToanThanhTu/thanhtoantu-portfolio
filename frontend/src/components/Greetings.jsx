import profilePic from "../assets/profile-pic.png";

function Greetings() {
  return (
    <section className="block lg:flex lg:justify-between lg:items-center lg:space-x-12 space-y-12 h-1/2 portfolio-width pt-44 pb-32">
      {/* div with Profile pic and name */}

      <div className="lg:w-1/2">
        <img
          src={profilePic}
          alt="profile picture"
          className="w-14 rounded-full mb-6"
        />
        <h1>Hello! My name is Thanh Toan Tu</h1>
        <p className="mt-1 italic">You can also call me Trevor</p>
      </div>

      {/* div with brief profile description and buttons */}

      <div className="lg:w-1/2 space-y-5">
        <h2>A Software Engineer based in Sydney, Australia</h2>
        <p>
          I have a passion for web and application development and I am always
          looking to learn new things.
        </p>
        <div className="grid lg:grid-cols-2 lg:w-72 lg:pt-4 gap-4 grid-cols-3 text-center">
          <a href="#contact-section" className="btn">
            Talk with me
          </a>
          <a href="#work-section" className="btn">
            See my work
          </a>
          <a
            href="https://raw.githubusercontent.com/ToanThanhTu/resume/main/Resume_ThanhToanTu.pdf"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Greetings;

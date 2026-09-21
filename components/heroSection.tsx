import{FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="heroSection">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Ola todos, bem-vindos!</h1>
            <p>me chamo kaique, sou desenvolvedor full-stack</p>
            <div className="flex flex-row gap-3">
              <a href="https://github.com/kaiquehor" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kaiqueho/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
        </div>
    </section>
  );
}

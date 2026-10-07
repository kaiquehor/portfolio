import{FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="heroSection">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Ola todos, me chamo kaique</h1>
            <p>Sou desenvolvedor full-stack focado em aplicacoes escalonaveis usando next.js e express</p>
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

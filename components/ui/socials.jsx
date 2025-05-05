import { FaGithub, FaKaggle, FaLinkedin, FaOrcid, FaTwitter } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex space-x-6">
      <a href="https://github.com/FranciscoReisIzquierdo" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} className="text-white hover:text-blue-200 transition" />
      </a>
      <a href="https://www.linkedin.com/in/francisco-izquierdo-a45856242/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} className="text-white hover:text-blue-200 transition" />
      </a>
      <a href="https://orcid.org/0009-0004-4811-7248" target="_blank" rel="noopener noreferrer">
        <FaOrcid size={25} className="text-white hover:text-blue-200 transition" />
      </a>
      <a href="https://www.kaggle.com/grupomei30" target="_blank" rel="noopener noreferrer">
        <FaKaggle size={25} className="text-white hover:text-blue-200 transition" />
      </a>
    </div>
  );
}
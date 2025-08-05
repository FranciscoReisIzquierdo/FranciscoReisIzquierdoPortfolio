'use client'

import React from 'react'
import FloatingLaptop from './floating_laptop'

const projects = [
  {
    title: "CrowdFlow",
    date: "2024 - Now",
    icon: "logos/crowdflow.png",
    tags: ["AI", "Computer Vision", "Crowd Analytics"],
    skills: ["python", "opencv", "azure", "tensorflow", "flask", "docker"],
    description:
      "CrowdFlow is a data collection and analysis platform that uses AI and surveillance cameras to monitor clients movements inside commercial surfaces. I refined object detection and classification models, quantized AI models for deployment on edge devices, developed Rest API server, backend architecture and statistical processing modules. I also implemented cloud deployment and managed database integration, including connection handling and query optimization.",
    link: "https://crowdflow.pt/",
    image: "images/crowdflow.png"
  },
  {
    title: "Hate Speech Recognition – DistilBert Fine-Tuning",
    date: "2023 - 2024",
    icon: "logos/huggingface.svg",
    tags: ["Natural Language Processing", "Hate Speech Detection", "Transfer Learning", "Text Classification"],
    skills: ["python", "huggingface", "jupyter", "kaggle", "pytorch", "pandas", "scikit-learn"],
    description:
      "This project tackles the problem of hate speech and offensive language detection on social media platforms using a fine-tuned DistilBERT transformer model. The motivation stems from the growing challenge faced by online communities to moderate harmful content and ensure safe digital spaces. Manual moderation is not scalable—automated NLP tools can help identify and mitigate toxic behavior at scale.",
    link: "https://github.com/FranciscoReisIzquierdo/Hate-Speech-Recognition-DistilBert-Fine-Tuning",
    image: "images/distilbert.png"
  },
  {
    title: "oNode",
    date: "2022 - 2023",
    icon: "logos/onode.png",
    tags: ["Transport Protocols", "Network Engineering", "Client-Server Architecture"],
    skills: ["java", "linux", "latex"],
    description:
      "oNode is a prototype platform designed to distribute audio, video, and text content from a central content server to multiple clients. It supports various transport protocols, allowing experimentation and performance testing with different network delivery mechanisms. This setup simulates real-world multimedia distribution systems, focusing on flexibility, modularity, and protocol-level behavior.",
    link: "https://github.com/FranciscoReisIzquierdo/Projeto-de-Engenharia-de-Software-em-Rede",
    image: "images/onode.png"
  },
  {
    title: "Face Fraud Detection",
    date: "2022 - 2023",
    icon: "logos/facefrauddetection.png",
    tags: ["Computer Vision", "Image Classification", "Facial Recognition", "Fraud Detection"],
    skills: ["python", "jupyter", "kaggle", "tensorflow", "pandas", "scikit-learn", "keras"],
    description:
      "This project entails the development of a deep learning model utilizing advanced computer vision techniques to identify AI-generated faces. By employing robust image classification methodologies, the model is designed to effectively distinguish between authentic and synthetic facial images. This capability not only advances the accuracy and reliability of visual content analysis but also plays a crucial role in detecting manipulated media, which is increasingly important in maintaining the integrity of digital information.",
      link: "https://github.com/FranciscoReisIzquierdo/Face-Fraud-Detection-CNN",
    image: "images/facefrauddetection.png"
  }
]

export default function ProjectSections() {
  return (
    <>
      <section id="projects" className="w-full mx-auto mt-24 py-8 lg:py-16 sm:py-6 mb-8 lg:mb-16 scroll-mt-[80px]">
        <h2 className="text-3xl sm:text-5xl text-center font-semibold text-blue-200 font-poppins mb-16 sm:mb-8">
          <span>Take a Look at</span><br />
          <span>Some of My Projects</span>
        </h2>

        {/* Projects Details */}
        <div className="flex flex-col items-center xl:items-start space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={project.title}
                className={`
                  w-full flex flex-col items-center xl-custom:items-start
                  xl-custom:flex-row ${!isEven ? 'xl-custom:flex-row-reverse' : ''}
                  justify-start xl-custom:justify-between
                  gap-x-24 sm:gap-x-16 md:gap-x-24 xl-custom:gap-x-64
                `}
              >
                <div
                  className="
                    w-full order-1 xl:order-none
                    px-4 sm:px-0
                    space-y-2
                    sm:space-y-3
                    md:space-y-4
                    xl:space-y-4
                  "
                >
                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-blue-200 font-poppins">
                    {project.title}
                  </h3>
                  {/* Project Date */}
                  <p className="text-xs sm:text-sm text-[#c0cad8] font-poppins">
                    {project.date}
                  </p>
                  {/* Project Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group relative w-7 h-7 bg-[#e4e6e9] rounded-full flex items-center justify-center border-2 border-[#6f85a3]"
                      >
                        {/* Skill Icon */}
                        <img src={`logos/${skill}.svg`} alt={skill} className="w-4 h-4" />
                        
                        {/* Tooltip (Name of Skill) */}
                        <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 text-xs text-[#445874] font-semibold transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100 scale-75">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Project Description */}
                  <p className="text-sm sm:text-lg xl:text-lg font-poppins text-gray-100">
                    {project.description}
                  </p>
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs sm:text-sm bg-[#e0edff] text-[#445874] font-semibold font-poppins rounded-full border-2 border-[#6f85a3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#eff4ff] text-[#41567e] font-semibold font-poppins py-1.5 px-6 rounded-xl border-2 border-[#6f85a3] shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-200 block xl:hidden"
                  >
                    Visit
                  </a>
                </div>

                {/* Floating Laptop */}
                <div className="w-auto max-w-[420px] flex-shrink-0 order-2 xl:order-none sm:mt-4 mt-8">
                  <FloatingLaptop
                    imageSrc={project.image}
                    linkSrc={project.link}
                    className="w-full h-auto"
                    width={420}
                    height={280}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
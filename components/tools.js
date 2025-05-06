import React from "react";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("./ui/icon_cloud"), {
  ssr: false,
});

export default function SkillsSphere() {
  const skills = {
    "Programming Languages": [
      "/icons/programming_languages/haskell.svg",
      "/icons/programming_languages/c.svg",
      "/icons/programming_languages/csharp.svg",
      "/icons/programming_languages/c++.svg",
      "/icons/programming_languages/python.svg",
      "/icons/programming_languages/java.svg",
      "/icons/programming_languages/latex.svg",
    ],
    "Machine & Deep Learning": [
      "/icons/machine_and_deep_learning/keras.svg",
      "/icons/machine_and_deep_learning/opencv.svg",
      "/icons/machine_and_deep_learning/tensorflow.svg",
      "/icons/machine_and_deep_learning/pytorch.svg",
      "/icons/machine_and_deep_learning/scikit-learn.svg",
      "/icons/machine_and_deep_learning/onnx.svg",
      "/icons/machine_and_deep_learning/mlflow.svg",
      "/icons/machine_and_deep_learning/huggingface.svg",
    ],
    "Data Science & Visualization": [
      "/icons/data_science/jupyter.svg",
      "/icons/data_science/kaggle.svg",
      "/icons/data_science/matplotlib.svg",
      "/icons/data_science/numpy.svg",
      "/icons/data_science/pandas.svg",
      "/icons/data_science/seaborn.svg",
      "/icons/data_science/networkx.svg",
    ],
    "Cloud, DevOps & Infrastructure": [
      "/icons/devops_and_cloud/aws.svg",
      "/icons/devops_and_cloud/azure.svg",
      "/icons/devops_and_cloud/git.svg",
      "/icons/devops_and_cloud/linux.svg",
      "/icons/devops_and_cloud/mysql.svg",
      "/icons/devops_and_cloud/postgres.svg",
      "/icons/devops_and_cloud/docker.svg",
      "/icons/devops_and_cloud/sqlalchemy.svg",
      "/icons/devops_and_cloud/flask.svg",
      "/icons/devops_and_cloud/airflow.svg",
    ],
  };

  return (
    <section id="tools" className="w-full mx-auto mt-24 py-8 lg:py-16 scroll-mt-[80px]">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center font-semibold text-blue-200 font-poppins mb-20">
        Development Stack
      </h2>
      {/* Tools Cards*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-y-6 gap-x-2 xl:gap-x-2 2xl:gap-x-6 mb-8 lg:mb-16 justify-items-center">
        {Object.entries(skills).map(([title, icons]) => (
          <div
            key={title}
            className="relative bg-[#02001E]/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center border border-white/10 max-w-[clamp(300px,25vw,400px)] w-full"
            style={{ height: "400px" }}
          >
            {/* Title Tool*/}
            <h3 className="text-xl font-semibold text-blue-300 font-poppins mb-4 text-center">
              {title}
            </h3>
            {/* Icons Cloud*/}
            <div className="flex justify-center items-center" style={{ width: "300px", height: "300px" }}>
              <IconCloud images={icons} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

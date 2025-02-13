export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  {name: "Work Experience", link: "#workExperience"},
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "#resume" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize leveraging AI and machine learning to drive innovation, enabling data-driven decision-making and predictive analytics. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "./AI.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a AI-Fitness tracker using Computer Vision",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "An Effective EEG Signal-Based Sleep Staging System using Machine Learning Techniques",
    des: "Developed an automated sleep staging system using machine learning, achieving 93.3% accuracy in classifying sleep stages from EEG data, and published the work in IEEE Xplore.",
    img: "./eeg.jpg",
    height: "300px",
    width: "400px"
    ,
    link: "https://ieeexplore.ieee.org/document/9997950",
  },
  {
    id: 2,
    title: "Computer Vision in Biomedics",
    des: "Led a comprehensive project in computer vision for biomedical imaging, specializing in chest X-ray datasets (Chest X-ray 14, MIMIC, Chexpert, VinDrCXR, Node21, TBX 11, ChestXDet, Pneumothorax), implementing advanced deep learning architectures for segmentation (PEAC, UperNEt, Unet/Unet++, Swin, Dice/IoU), localization (Adam, DINO, Faster-RCNN, Swin, FROC), and classification (ARK, ConvNext, Swin, Internimage), achieving consistent accuracy over 90%, developing custom PyTorch dataloaders, and utilizing rigorous evaluation methodologies.",
    img: "./face.jpg",
     height: "300px",
    width: "400px",
    
    
  },
  {
    id: 3,
    title: "Scalable Video Analysis Platform Using AWS Serverless Architecture",
    des: "Developed a scalable video analysis application on AWS Lambda, S3, and IAM, employing serverless computing with FFmpeg for video splitting and ResNet-34 for face recognition, and optimized performance and security using CloudWatch and custom auto-scaling techniques.",
    img: "./video.jpg",
     height: "300px",
    width: "400px",

  },
  {
    id: 4,
    title: "Healthcare Management System",
    des: "Healthcare Management System integrates DBMS techniques for hospital and vaccine management, with IoT for enhanced supply chain optimization through device and sensor connectivity.",
    img: "./health.jpg",
     height: "300px",
    width: "400px",
    link: "https://github.com/shrey0801/Hospital_Management_System",
    
  },
];



export const workExperience = [

  {
    id: 4,
    title: "Machine Learning Full Stack Intern",
    desc: "Collaborated with Silicon Valley FAANG engineers to develop a real-time exercise tracking system using Python, MediaPipe, and OpenCV, integrating a ReactJS/TypeScript frontend with a FastAPI backend. Engineered a scalable JSON-configured architecture to support diverse exercises and leveraged WebSocket for real-time video streaming. Designed intuitive Figma-based interfaces and implemented advanced computer vision techniques for accurate repetition counting, balancing full-stack development with performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },

  {
    id: 1,
    title: "Research Intern, Indian Space Research Organisation",
    desc: "Developed a novel navigation solution using Low Earth Orbit satellites by formulating and implementing a mathematical algorithm in MATLAB, achieving an 89.9% position accuracy rate.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Intern, Fortius Infotech",
    desc: "Developed a web application using ReactJS and Node.js to serve consumers and manage digital billboards for video advertisement broadcasting.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Data Scientist, eAgent ",
    desc: "Leveraged Numpy and Pandas to preprocess and update daily data files, used Seaborn for data visualization, and contributed to a full-stack web application using MongoDB, ReactJS, and Node.js.",
    className: "md:col-span-4 flex justify-center", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/shrey0801",
  },
  
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/shreythakkar0801/",
  },
];
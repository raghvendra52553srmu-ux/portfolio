export const PERSONAL_INFO = {
  name: "Raghvendra Pandey",
  role: "BCA Student • Developer • Data Analytics Enthusiast",
  university: "Shri Ramswaroop Memorial University (SRMU), Lucknow",
  degree: "BCA (Bachelor of Computer Applications)",
  duration: "2025 – Present",
  status: "Currently pursuing BCA",
  location: "Lucknow, India",
  tagline: "I enjoy turning what I learn into real projects — from web applications and software solutions to data analysis and interactive dashboards.",
  brandMotto: "BUILD • LEARN • ANALYZE • CREATE",
  aboutParagraphs: [
    "I'm a BCA student at Shri Ramswaroop Memorial University (SRMU), Lucknow. Rather than treating computer science purely as theoretical coursework, I focus on practical execution — building tools, writing code, and analyzing datasets.",
    "My current technical focus spans full-stack web development (React, JavaScript) and data analytics (Python, Power BI, SQL, Excel). I find the intersection between software workflows and data-driven insights especially rewarding.",
    "I participate actively in university techfests and hackathons. Collaborating under time constraints has helped me sharpen my problem-solving ability, Git collaboration, and end-to-end project architecture."
  ],
  profilePanel: {
    education: "BCA — SRMU",
    focus: "Development + Data Analytics",
    basedIn: "Lucknow, India",
    learningApproach: "Learning by building"
  },
  github: "https://github.com/raghvendra52553srmu-ux",
  linkedin: "https://www.linkedin.com/in/raghvendra-pandey-85144b387/",
  email: "raghvendra.contact.dev@gmail.com",
  highlights: [
    { title: "BCA Student", desc: "SRMU Lucknow" },
    { title: "Project Builder", desc: "5+ Built Works" },
    { title: "Hackathon Participant", desc: "University Sprints" },
    { title: "Continuous Learner", desc: "Daily Upskilling" }
  ]
};

export const SKILLS_CATEGORIES = [
  {
    category: "PROGRAMMING",
    skills: [
      { name: "Python", status: "Building With", tag: "Data & Scripts", icon: "Code" },
      { name: "C++", status: "Working Knowledge", tag: "Algorithms", icon: "Terminal" },
      { name: "JavaScript", status: "Building With", tag: "ES6+, Async", icon: "FileCode2" }
    ]
  },
  {
    category: "WEB DEVELOPMENT",
    skills: [
      { name: "React", status: "Building With", tag: "Components & State", icon: "Atom" },
      { name: "Vite", status: "Working Knowledge", tag: "Fast Tooling", icon: "Zap" },
      { name: "HTML5", status: "Working Knowledge", tag: "Semantic Markup", icon: "Layout" },
      { name: "CSS3 / Tailwind", status: "Building With", tag: "Modern Layouts", icon: "Palette" }
    ]
  },
  {
    category: "DATA & ANALYTICS",
    skills: [
      { name: "Power BI", status: "Learning", tag: "Dashboards & DAX", icon: "BarChart3" },
      { name: "Excel", status: "Working Knowledge", tag: "Formulas & Pivot", icon: "Table" },
      { name: "SQL", status: "Learning", tag: "Queries & Joins", icon: "Database" },
      { name: "Pandas", status: "Learning", tag: "Data Frames", icon: "LineChart" },
      { name: "Matplotlib", status: "Learning", tag: "Data Viz", icon: "PieChart" }
    ]
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", status: "Working Knowledge", tag: "Version Control", icon: "GitBranch" },
      { name: "GitHub", status: "Building With", tag: "Public Repos", icon: "Github" },
      { name: "VS Code", status: "Working Knowledge", tag: "Development", icon: "Laptop" }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "medikiosk",
    number: "01",
    isFeatured: true,
    title: "MediKiosk",
    shortDesc: "An AI-assisted healthcare kiosk concept designed to improve the patient first-mile experience by collecting information before consultation.",
    problemSolved: "Overcrowded outpatient departments (OPDs) in high-volume hospitals suffer from severe triage delays, long lines, and overburdened doctors taking repetitive preliminary medical histories.",
    solution: "A self-service kiosk workflow enabling automated patient registration, guided clinical history collection, intelligent doctor routing, token generation, and OCR document scanning with live doctor queues.",
    category: "Healthcare System",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL / MySQL",
      "Tesseract.js",
      "Socket.IO"
    ],
    features: [
      { title: "Patient Registration", desc: "Rapid demographic entry and patient identity generation." },
      { title: "Symptom Collection", desc: "Structured guided questions collecting chief complaints." },
      { title: "Hospital/Doctor Routing", desc: "Specialty-based triage directing patients to the right clinic." },
      { title: "OPD Token Workflow", desc: "Real-time token generation to streamline waiting room flow." },
      { title: "Medical History", desc: "Pre-consultation clinical summary preparation." },
      { title: "Document Scanning", desc: "Tesseract.js OCR to digitize past prescriptions & reports." },
      { title: "Doctor-side Information Flow", desc: "Socket.IO streaming triage records straight to clinician screens." }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/Medikiosk",
    demo: null
  },
  {
    id: "gurukul",
    number: "02",
    isFeatured: false,
    title: "Gurukul Digital Library",
    shortDesc: "A modern web platform designed to provide students with easy access to educational resources, books, and learning materials.",
    problemSolved: "College students often face fragmented access to semester study modules, textbooks, and syllabus references spread across disparate channels.",
    solution: "A unified, accessible web library interface categorizing study resources by semester and subject with rapid client-side search and clean reading previews.",
    category: "EdTech Platform",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      { title: "Categorized Resource Catalog", desc: "Filter by semester, subject, and reference type." },
      { title: "Fast Search", desc: "Instant filtering across title, author, and topics." },
      { title: "Responsive Reading UI", desc: "Optimized typography for laptop, tablet, and mobile study." }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/gurukul-digital-library",
    demo: null
  },
  {
    id: "interview-saathi",
    number: "03",
    isFeatured: false,
    title: "Interview Saathi",
    shortDesc: "A web-based project focused on helping users practice interview and spoken-English skills.",
    problemSolved: "Students preparing for campus placements lack accessible, judgment-free environments to practice behavioral answers and spoken English articulation.",
    solution: "An interactive drill system providing structured technical and HR prompts, self-review checklists, and verbal practice scenarios.",
    category: "Placements & Prep",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Web Audio API"],
    features: [
      { title: "Practice Modules", desc: "Curated HR, behavioral, and technical question sets." },
      { title: "Spoken-English Drills", desc: "Fluency practice prompts and speaking time trackers." },
      { title: "Self-Evaluation Checkpoints", desc: "Rubrics to evaluate answer structure and clarity." }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/Interview_Saathi",
    demo: null
  },
  {
    id: "quiz-game",
    number: "04",
    isFeatured: false,
    title: "Python Quiz Game",
    shortDesc: "A beginner-friendly interactive quiz project created while learning programming fundamentals.",
    problemSolved: "Practicing programming control flow, conditional branching, score accumulation, and state management through interactive questions.",
    solution: "A modular quiz engine supporting multiple categories, instant response feedback, score calculation, and post-quiz performance summaries.",
    category: "Logic & Fundamentals",
    techStack: ["Python", "Control Flow", "Object-Oriented Design"],
    features: [
      { title: "Score & Feedback Engine", desc: "Real-time accuracy tracking and explanations." },
      { title: "Category-Based Question Banks", desc: "Computer science principles and logic exercises." },
      { title: "Modular Architecture", desc: "Extensible structure allowing easy additions of questions." }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/quiz-game",
    hasPlayableDemo: true,
    demo: null
  },
  {
    id: "bunk-learn-os",
    number: "05",
    isFeatured: false,
    title: "Bunk Learn OS",
    shortDesc: "An educational/student-focused web project exploring useful academic and learning workflows.",
    problemSolved: "Balancing university minimum attendance requirements, exam schedules, and daily coursework planning without complex spreadsheets.",
    solution: "A student dashboard featuring an attendance threshold calculator, task planner, and quick study notes scratchpad.",
    category: "Student Tools",
    techStack: ["React", "JavaScript", "Local Storage", "CSS"],
    features: [
      { title: "Attendance & Safe Bunk Calculator", desc: "Calculate permissible leaves while meeting university criteria." },
      { title: "Study Scheduler", desc: "Track daily coursework milestones and exam timelines." },
      { title: "Lecture Scratchpad", desc: "Store fast class notes and assignment deadlines." }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/bunk-learn-os",
    demo: null
  }
];

export const CERTIFICATES_DATA = [
  {
    id: "cert-internshala-iitm",
    title: "Data Science with AI (8-Week Training)",
    issuer: "Internshala Trainings & IITM Pravartak",
    issuerSubtitle: "IIT Madras Pravartak Technologies Foundation",
    category: "Data Analytics",
    date: "July 2026",
    credentialId: "bctq23cf67a",
    verifyUrl: "https://trainings.internshala.com/verify_certificate",
    image: "/certificates/internshala-iitm-data-science.jpg",
    description: "Comprehensive 8-week curriculum covering Data Science with AI, Data Analysis with AI-Powered Excel, Power BI & Tableau visualization, Data Cleaning, and Machine Learning predictive analytics with Capstone project.",
    highlights: ["Power BI & Tableau", "AI-Powered Excel", "Machine Learning", "Capstone Project"],
    verified: true
  },
  {
    id: "cert-skill-india-nsdc",
    title: "Certificate Program in Data Science with AI",
    issuer: "Skill India • NSDC • Scholiverse Educare",
    issuerSubtitle: "National Skill Development Corporation",
    category: "Data Analytics",
    date: "22 July 2026",
    credentialId: "kib79h150vg9r98w",
    grade: "Grade A",
    image: "/certificates/skill-india-data-science-ai.jpg",
    description: "Awarded Grade A in the certified program in Data Science with AI under Skill India & NSDC framework, validated by Scholiverse Educare.",
    highlights: ["Grade A Achiever", "Skill India Certified", "NSDC Recognized", "Python & Data Science"],
    verified: true
  },
  {
    id: "cert-srmu-hackathon",
    title: "Hack-A-Thon — VIVEKA: The Intelligence 5.0",
    issuer: "Shri Ramswaroop Memorial University (SRMU)",
    issuerSubtitle: "Tech Fusion Club & IQAC (Techfest 2k26)",
    category: "Hackathons",
    date: "18–20 Feb 2026",
    credentialId: "SRMU-VIVEKA-2K26",
    image: "/certificates/srmu-viveka-hackathon.jpg",
    description: "Official certificate of participation in the flagship 48-hour Hack-A-Thon at VIVEKA: The Intelligence 5.0 (Techfest 2k26), building rapid software solutions.",
    highlights: ["48-Hour Hackathon", "SRMU Techfest", "Team Collaboration", "Prototyping"],
    verified: true
  },
  {
    id: "cert-mybharat-vbyld",
    title: "Viksit Bharat Young Leaders Dialogue (VBYLD)",
    issuer: "Ministry of Youth Affairs & Sports (MYBharat)",
    issuerSubtitle: "Government of India",
    category: "Youth & Leadership",
    date: "19 September 2026",
    credentialId: "MYBHARAT-VBYLD-2027",
    image: "/certificates/mybharat-vbyld-quiz.jpg",
    description: "Certificate of participation in the nationwide Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 conducted on the official MYBharat portal.",
    highlights: ["Ministry of Youth Affairs", "National Participation", "Youth Leadership"],
    verified: true
  }
];

export const EXPERIENCE_DATA = [
  {
    year: "2026",
    role: "Internship — Web & Software Development",
    organization: "Unified Mentor Pvt. Ltd.",
    type: "Internship",
    location: "Remote / India",
    description: "Focused on practical software development workflows, translating application requirements into component-driven code, and adhering to modern web development standards.",
    points: [
      "Developed modular web components and structured interfaces using JavaScript and modern frameworks",
      "Collaborated on technical tasks, code reviews, and software project milestones",
      "Deepened practical understanding of clean coding, Git version control, and problem decomposition"
    ]
  },
  {
    year: "2025 – Present",
    role: "BCA & Practical Project Engineering",
    organization: "Shri Ramswaroop Memorial University (SRMU)",
    type: "Academic & Projects",
    location: "Lucknow, India",
    description: "Designing and building end-to-end applications to solve operational workflows while progressing through core computer applications coursework.",
    points: [
      "Architected MediKiosk, an OPD clinical queue system integrating Tesseract.js OCR and Socket.IO",
      "Created student productivity platforms including Gurukul Digital Library and Bunk Learn OS",
      "Hands-on practice in Data Analytics workflows using Python, Power BI, and SQL"
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    year: "Feb 2026",
    event: "SRMU VIVEKA 5.0 Hack-A-Thon Participation",
    action: "Participated in the university flagship hackathon at VIVEKA: The Intelligence 5.0 organized by Tech Fusion Club, SRMU.",
    track: "Healthcare & Utility Track",
    badge: "Official Certificate"
  },
  {
    year: "July 2026",
    event: "Data Science with AI — Grade A Completion",
    action: "Completed rigorous 8-week training certified by IITM Pravartak Technologies & Internshala with Grade A under Skill India & NSDC.",
    track: "Data Analytics & AI",
    badge: "Grade A Certified"
  },
  {
    year: "Sept 2026",
    event: "Viksit Bharat Young Leaders Dialogue (VBYLD)",
    action: "Represented student participation in the Ministry of Youth Affairs & Sports (MYBharat) national initiative.",
    track: "National Youth Dialogue",
    badge: "MYBharat Verified"
  },
  {
    year: "2025 – 2026",
    event: "5+ Real Repositories Built & Maintained on GitHub",
    action: "Engineered and deployed active public projects including MediKiosk, Gurukul Digital Library, Interview Saathi, and Bunk Learn OS.",
    track: "Open Source & Building in Public",
    badge: "GitHub Active"
  }
];

export const LEARNING_AREAS = [
  {
    title: "Python for Data Analysis",
    stage: "Building With",
    description: "Deepening practical capabilities in data cleaning, exploratory data analysis, and Pandas transformations.",
    topics: ["Pandas", "Matplotlib", "Data Cleaning", "Automation Scripts"]
  },
  {
    title: "Power BI & Business Intelligence",
    stage: "Active Learning",
    description: "Developing interactive visual dashboards, data modeling, and business-focused reporting.",
    topics: ["Interactive Visuals", "Data Modeling", "DAX Formulas", "Executive Reports"]
  },
  {
    title: "SQL & Relational Databases",
    stage: "Active Learning",
    description: "Writing complex queries, joins, aggregates, and understanding database schema normalization.",
    topics: ["Joins & Subqueries", "Aggregations", "Schema Design", "PostgreSQL / MySQL"]
  },
  {
    title: "Modern React & Frontend Architecture",
    stage: "Building With",
    description: "Refining clean component architecture, state management, and accessible user interfaces.",
    topics: ["Component Composition", "Tailwind CSS", "Vite Tooling", "Performance"]
  }
];

export const SAMPLE_QUIZ_QUESTIONS = [
  {
    question: "Which of the following in Python creates a DataFrame from a dictionary?",
    options: ["pd.DataFrame(data)", "pd.to_dataframe(data)", "pd.Series(data)", "pd.as_matrix(data)"],
    correct: 0,
    explanation: "pd.DataFrame(data) is the standard method in pandas to convert dictionaries and records into tabular 2D DataFrames."
  },
  {
    question: "What is the primary purpose of DAX in Microsoft Power BI?",
    options: ["Styling visual themes", "Data Analysis Expressions for custom calculations & metrics", "Web scraping data", "Formatting JSON responses"],
    correct: 1,
    explanation: "DAX (Data Analysis Expressions) is a formula expression language used to create custom calculated columns, measures, and tables in Power BI."
  },
  {
    question: "In SQL, which clause is used to filter records AFTER an aggregation with GROUP BY?",
    options: ["WHERE", "FILTER", "HAVING", "LIMIT"],
    correct: 2,
    explanation: "HAVING filters aggregated grouped results, whereas WHERE filters individual rows before aggregation occurs."
  },
  {
    question: "Which React hook is commonly used to perform side effects like fetching data or setting event listeners?",
    options: ["useState", "useEffect", "useMemo", "useContext"],
    correct: 1,
    explanation: "useEffect is specifically designed to handle component lifecycle side effects such as API requests, subscriptions, and DOM updates."
  }
];

export const PERSONAL_INFO = {
  name: "Raghvendra Pandey",
  role: "BCA Student • Developer • Data Analytics Enthusiast",
  university: "Shri Ramswaroop Memorial University (SRMU), Lucknow",
  degree: "BCA (Bachelor of Computer Applications)",
  duration: "2025–2027",
  status: "Currently pursuing BCA",
  location: "Lucknow, Uttar Pradesh, India",
  tagline: "I build practical digital solutions, explore data-driven insights, and continuously turn what I learn into real projects.",
  aboutText: [
    "I'm Raghvendra Pandey, a BCA student at Shri Ramswaroop Memorial University, Lucknow. I enjoy learning by building real projects rather than only studying theory.",
    "My interests span web development, programming, data analytics, and problem-solving. I am passionate about crafting applications that address genuine operational needs—from healthcare triage workflows to student learning platforms.",
    "When I'm not coding or exploring datasets, I enjoy participating in university hackathons, collaborating with fellow tech enthusiasts, and experimenting with new development tools."
  ],
  github: "https://github.com/raghvendra52553srmu-ux",
  linkedin: "https://www.linkedin.com/in/raghvendra-pandey-85144b387/",
  email: "raghvendra.contact.dev@gmail.com", // placeholder, easily editable
  badges: ["BCA Student", "Developer", "Data Analytics", "Builder"],
  stats: [
    { label: "Public Repositories", value: "10+", icon: "FolderGit2" },
    { label: "Projects Built", value: "5+", icon: "Code2" },
    { label: "Hackathon Sprints", value: "Active", icon: "Trophy" },
    { label: "Learning Mindset", value: "Continuous", icon: "Sparkles" }
  ]
};

export const SKILLS_DATA = [
  {
    category: "Programming",
    description: "Core logic, algorithms, and software development fundamentals",
    items: [
      { name: "Python", level: "Building With", icon: "Code", color: "from-blue-500 to-yellow-500", highlight: "Data scripts & automation" },
      { name: "C++", level: "Working Knowledge", icon: "Terminal", color: "from-blue-600 to-indigo-600", highlight: "Data structures & logic" },
      { name: "JavaScript", level: "Building With", icon: "FileCode2", color: "from-amber-400 to-yellow-500", highlight: "ES6+, Async, DOM" }
    ]
  },
  {
    category: "Web Development",
    description: "Modern component-driven frontends & full-stack architectures",
    items: [
      { name: "React", level: "Building With", icon: "Atom", color: "from-cyan-400 to-blue-500", highlight: "Hooks, State, Components" },
      { name: "Vite", level: "Working Knowledge", icon: "Zap", color: "from-purple-500 to-pink-500", highlight: "Fast dev builds" },
      { name: "HTML5", level: "Working Knowledge", icon: "Layout", color: "from-orange-500 to-amber-600", highlight: "Semantic layout & SEO" },
      { name: "CSS3 / Tailwind", level: "Building With", icon: "Palette", color: "from-sky-400 to-cyan-500", highlight: "Responsive & Modern UI" },
      { name: "JavaScript", level: "Building With", icon: "FileCode2", color: "from-amber-400 to-yellow-500", highlight: "Interactive web logic" }
    ]
  },
  {
    category: "Data & Analytics",
    description: "Transforming raw data into actionable dashboards and insights",
    items: [
      { name: "Power BI", level: "Learning", icon: "BarChart3", color: "from-amber-500 to-orange-500", highlight: "Visual reports & dashboards" },
      { name: "Excel", level: "Working Knowledge", icon: "Table", color: "from-emerald-500 to-teal-600", highlight: "Formulas, Pivot Tables, Analysis" },
      { name: "SQL", level: "Learning", icon: "Database", color: "from-blue-500 to-cyan-500", highlight: "Relational queries & joins" },
      { name: "Python for Data", level: "Building With", icon: "Binary", color: "from-blue-400 to-emerald-400", highlight: "Data exploration" },
      { name: "Pandas", level: "Learning", icon: "LineChart", color: "from-indigo-400 to-purple-500", highlight: "Data manipulation" },
      { name: "Matplotlib", level: "Learning", icon: "PieChart", color: "from-rose-400 to-orange-400", highlight: "Data plotting & charting" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Version control, editor environments, and developer productivity",
    items: [
      { name: "Git", level: "Working Knowledge", icon: "GitBranch", color: "from-orange-500 to-red-500", highlight: "Branches & commit workflows" },
      { name: "GitHub", level: "Building With", icon: "Github", color: "from-slate-400 to-slate-200", highlight: "Open source & project hosting" },
      { name: "VS Code", level: "Working Knowledge", icon: "Laptop", color: "from-blue-500 to-sky-400", highlight: "Primary coding environment" }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "medikiosk",
    isFeatured: true,
    title: "MediKiosk",
    tagline: "AI-assisted clinical history-taking and OPD queue system for high-volume Indian hospitals.",
    category: "Full Stack / Healthcare",
    description: "A comprehensive healthcare workflow project focused on transforming the patient first-mile experience. It streamlines hospital OPD check-ins through conversational clinical triage, token generation, and real-time medical queue management.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL / PostgreSQL",
      "Tesseract.js",
      "Socket.IO"
    ],
    features: [
      { title: "Patient Registration", desc: "Fast check-in process capturing vital demographics" },
      { title: "Symptom & Problem Collection", desc: "Structured guided questionnaire tailored for Indian clinics" },
      { title: "Hospital & Doctor Routing", desc: "Intelligent triage directing patients to appropriate OPD specialties" },
      { title: "OPD Token Generation", desc: "Automated real-time token issue reducing crowded waiting areas" },
      { title: "Medical History Collection", desc: "Digitized baseline clinical summaries prior to doctor consult" },
      { title: "Document Scanning", desc: "Tesseract.js OCR integration for scanning past medical papers" },
      { title: "Doctor-side Information Flow", desc: "Live Socket.IO feed delivering triage summaries directly to clinicians" }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/Medikiosk",
    demo: null,
    metrics: ["Multi-Specialty Routing", "OCR Document Parsing", "Real-Time OPD Tokens"],
    accent: "from-cyan-500/20 via-blue-500/20 to-purple-500/20"
  },
  {
    id: "gurukul-digital-library",
    isFeatured: false,
    title: "Gurukul Digital Library",
    tagline: "A modern web platform designed to provide students with easy access to educational resources, books, and learning materials.",
    category: "Web Application",
    description: "An accessible educational resource portal built to organize and distribute textbooks, course notes, and study modules with responsive filtering and categorized catalogs.",
    techStack: ["React", "JavaScript", "CSS3", "Vite", "Responsive Design"],
    features: [
      { title: "Categorized Resource Catalog", desc: "Effortless browsing across subjects, semesters, and reference books" },
      { title: "Search & Filtering", desc: "Instant title and author search with responsive grid previews" },
      { title: "Student-Friendly UI", desc: "Optimized readability for laptops, tablets, and smartphones" }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/gurukul-digital-library",
    demo: null,
    accent: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "interview-saathi",
    isFeatured: false,
    title: "Interview Saathi",
    tagline: "A web-based project focused on helping users practice interview and spoken-English skills.",
    category: "AI & EdTech",
    description: "Designed to help students build confidence in professional interviews through guided practice questions, spoken English self-assessment, and scenario-based roleplays.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Web Audio API", "Interactive Prompts"],
    features: [
      { title: "Interview Practice Modules", desc: "Curated technical, HR, and situational question drills" },
      { title: "Spoken-English Practice", desc: "Guided prompts designed to improve fluency and verbal articulation" },
      { title: "Self-Review Checkpoints", desc: "Structured feedback checklists to evaluate mock responses" }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/Interview_Saathi",
    demo: null,
    accent: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: "quiz-game",
    isFeatured: false,
    title: "Python Quiz Game",
    tagline: "A beginner-friendly interactive quiz project created while learning programming fundamentals.",
    category: "Python & Logic",
    description: "A logic-driven interactive quiz system demonstrating object-oriented programming, user input validation, dynamic score calculation, and multi-category question sets.",
    techStack: ["Python", "Algorithms", "Control Flow", "CLI / Web Logic"],
    features: [
      { title: "Score & Feedback Engine", desc: "Real-time accuracy tracking with immediate response explanations" },
      { title: "Diverse Question Banks", desc: "Computer science basics, general knowledge, and logic puzzles" },
      { title: "Clean Modular Structure", desc: "Easy to extend with custom quiz categories and questions" }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/quiz-game",
    hasPlayableDemo: true,
    demo: null,
    accent: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "bunk-learn-os",
    isFeatured: false,
    title: "Bunk Learn OS",
    tagline: "An educational/student-focused web project exploring useful academic and learning workflows.",
    category: "Productivity / Student Tools",
    description: "An academic dashboard concept engineered to help college students balance class schedules, monitor attendance ratios, organize notes, and maintain study momentum.",
    techStack: ["React", "JavaScript", "Local Storage", "CSS Modules"],
    features: [
      { title: "Attendance & Bunk Calculator", desc: "Calculate safe leaves while staying within university minimum percentages" },
      { title: "Study Scheduler", desc: "Daily task checklists and timetable tracking" },
      { title: "Quick Notes Drawer", desc: "Instant scratchpad for lecture pointers and upcoming exam dates" }
    ],
    github: "https://github.com/raghvendra52553srmu-ux/bunk-learn-os",
    demo: null,
    accent: "from-purple-500/20 to-pink-500/20"
  }
];

export const EXPERIENCE_DATA = [
  {
    year: "2026",
    role: "Internship & Professional Learning",
    organization: "Technical Learning & Project Development",
    type: "Current Focus",
    location: "Lucknow, India",
    description: "Actively dedicated to building production-grade web applications, deepening full-stack software development workflows, and developing analytical problem-solving skills in Python, Power BI, and relational databases.",
    highlights: [
      "Architecting end-to-end applications including clinical triage and student resource systems",
      "Implementing component design, REST endpoints, and database models",
      "Focused on code cleanliness, version control, and real-world system architecture"
    ]
  },
  {
    year: "2026",
    role: "Hackathons & Project Development",
    organization: "SRMU Tech Community & Hackathon Sprints",
    type: "Collaborative Sprints",
    location: "SRMU, Lucknow",
    description: "Participated in university hackathon sprints and techfest activities, collaborating with peers to design, prototype, and build practical software solutions under time constraints.",
    highlights: [
      "Collaborated in team environments to brainstorm, design, and prototype digital solutions",
      "Pitched practical solutions to address first-mile operational challenges in Indian contexts",
      "Strengthened rapid debugging, API integration, and collaborative Git workflow capabilities"
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "SRMU / VIVEKA Techfest Participation",
    category: "Hackathons & Techfest",
    period: "2025–2026",
    institution: "Shri Ramswaroop Memorial University",
    description: "Active participant in SRMU annual technical fest and hackathons, presenting software solutions and engaging with coding competitions.",
    badge: "Techfest Participant",
    icon: "Trophy"
  },
  {
    title: "Full-Stack Project Development",
    category: "Software Engineering",
    period: "2025–2026",
    institution: "Independent & Academic Sprints",
    description: "Engineered complex practical projects including MediKiosk (OPD triage with OCR & websockets) and Gurukul Digital Library, published to GitHub.",
    badge: "5+ Built Projects",
    icon: "CheckCircle2"
  },
  {
    title: "Data Analytics & Python Upskilling",
    category: "Skill Development",
    period: "Ongoing",
    institution: "Self-Paced & Coursework",
    description: "Hands-on practice with Power BI business intelligence dashboards, Excel data modeling, and Python Pandas data manipulation.",
    badge: "Analytics Pathway",
    icon: "GraduationCap"
  }
];

export const EDUCATION_DATA = {
  institution: "Shri Ramswaroop Memorial University (SRMU)",
  location: "Lucknow, Uttar Pradesh",
  degree: "Bachelor of Computer Applications (BCA)",
  period: "2025 – 2027",
  status: "Currently pursuing BCA",
  description: "Pursuing foundational and applied computer applications coursework with strong emphasis on software engineering principles, database systems, object-oriented programming, and web architectures.",
  keyCourses: [
    "Object-Oriented Programming (C++ & Python)",
    "Database Management Systems (DBMS / SQL)",
    "Web Technologies & Frontend Development",
    "Computer Networks & Operating Systems",
    "Data Analytics Fundamentals"
  ]
};

export const SAMPLE_QUIZ_QUESTIONS = [
  {
    question: "In Python, which built-in function returns the number of items in a list?",
    options: ["count()", "len()", "size()", "index()"],
    correct: 1,
    explanation: "len() is Python's standard function to obtain the length or item count of any sequence or collection."
  },
  {
    question: "In React, which hook is primarily used for managing side effects like fetching data or DOM updates?",
    options: ["useState", "useEffect", "useMemo", "useContext"],
    correct: 1,
    explanation: "useEffect lets you synchronize a component with an external system or perform side effects after render."
  },
  {
    question: "In Data Analytics, which Power BI feature allows creating custom calculated columns and measures?",
    options: ["DAX (Data Analysis Expressions)", "Power Query M", "SQL DDL", "VBA"],
    correct: 0,
    explanation: "DAX (Data Analysis Expressions) is the formula language used across Power BI to define custom calculations."
  }
];

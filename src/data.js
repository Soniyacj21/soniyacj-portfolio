// ✏️ Edit your content here. The page updates automatically.

export const profile = {
  name: "SONIYA C J",
role: "AI/ML Engineer",
headline: "Turning data into intelligent products that ship.",
summary:
  "AI/ML Engineer with 1+ years of software engineering experience across React, Node.js and Django. I build and evaluate machine learning models in Python and Scikit-learn, work with LLMs, RAG and agentic workflows, and deliver them as APIs and apps people use every day.",
  email: "soniyacj21@gmail.com",
  phone: "+971 55 722 5513",
  phoneHref: "+971557225513",
  github: "https://github.com/Soniyacj21",
  linkedin: "https://www.linkedin.com/in/soniya-c-j", 
  photo: "photo.png", 
  resume: "Soniya_CJ_AI_ML_Engineer.pdf", 
};



export const skills = [
  { group: "AI tools & LLMs", items: ["LLM APIs", "Claude / OpenAI", "Prompt engineering", "LangGraph", "RAG", "MCP", "Agentic workflows"] },
  { group: "Machine learning", items: ["Scikit-learn", "Classification", "Regression", "Feature engineering", "Cross-validation", "Hyperparameter tuning", "Model evaluation"] },
  { group: "Databases", items: ["SQL", "MySQL", "MongoDB", "Qdrant (vector DB)", "SQLite", "Query optimisation"] },
  { group: "Data", items: ["Python", "Pandas", "NumPy", "EDA", "Data cleaning"] },
  { group: "Backend & APIs", items: ["FastAPI", "Node.js", "Express.js", "Django", "REST APIs", "JWT auth"] },
  { group: "Frontend", items: ["React.js", "Redux", "React Hooks", "Tailwind CSS"] },
  { group: "Cloud & tools", items: ["AWS", "Docker", "CI/CD", "Git/GitHub", "Jupyter", "VS Code"] },
  { group: "BI & reporting", items: ["Power BI", "DAX", "Power Query", "Excel"] },
];

export const experience = [
  {
    role: "Data Science Trainee",
    org: "Luminar Technolab",
    place: "Thrissur, Kerala",
    period: "Jan 2026 – Present",
    points: [
      "Built and evaluated classification and regression models with Scikit-learn, using cross-validation and hyperparameter tuning to lift accuracy.",
      "Cleaned real-world datasets with Pandas and NumPy, and used feature engineering to cut overfitting.",
      "Ran EDA to guide modeling decisions and shared results through Power BI dashboards for non-technical stakeholders.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Capsdata Technologies",
    place: "Ernakulam, Kerala",
    period: "Mar 2025 – Jan 2026",
    note: "PickAdSpace, an advertising ad-tech platform",
    points: [
      "Built the full-stack platform with React.js, Node.js, Express.js and MongoDB.",
      "Designed REST APIs across advertiser, campaign and revenue-sharing modules, secured with JWT and role-based access.",
      "Delivered real-time dashboards for campaign performance, budget use and viewership.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    org: "ZH Healthcare (blueBriX)",
    place: "Ernakulam, Kerala",
    period: "Feb 2024 – Aug 2024",
    note: "Low-code EHR platform used by 12,000+ providers and 2.2M+ patients",
    points: [
      "Developed and tested REST APIs for EHR integrations across healthcare systems.",
      "Built care coordination and clinical documentation features on the MERN stack, following HIPAA-compliant practices.",
    ],
  },
  {
    role: "Python Django Intern",
    org: "Camerinfolks",
    place: "Ernakulam, Kerala",
    period: "Aug 2023 – Dec 2023",
    points: [
      "Built backend functionality for data processing and server-side logic in Python and Django.",
    ],
  },
];

export const projects = [
  {
    title: "Machine learning predictive modeling workflow",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    text: "End-to-end workflow on real-world datasets: cleaning, feature engineering, training, cross-validation, tuning and evaluation. Results were shared through Power BI dashboards.",
    metrics: [],
  },
  {
    title: "Superstore sales & profit dashboard",
    stack: ["Power BI", "DAX", "Power Query"],
    text: "Cleaned a 9,994-row retail dataset and built an interactive dashboard with DAX measures for margin and year-over-year growth. Found that discounts above 20% caused about $135K in losses, and recommended discount caps.",
    metrics: [
      { v: "$2.30M", l: "Sales" },
      { v: "$286K", l: "Profit" },
      { v: "12.5%", l: "Margin" },
    ],
  },
];

export const education = [
  { title: "B.Tech, Computer Engineering", place: "Universal Engineering College, Irinjalakuda", period: "2020 – 2023" },
  { title: "Diploma, Computer Technology", place: "Women's Polytechnic College, Thrissur", period: "2017 – 2020" },
];

export const certifications = [
  { title: "Google AI Essentials", issuer: "Google" },
  { title: "AI Fluency Framework & Foundation", issuer: "Anthropic" },
];

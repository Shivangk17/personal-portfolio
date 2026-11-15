// Edit this file only: it holds all your content.
export const profile = {
    name: "Shivang Kosty",
    initials: "SK",
    role: "AI/ML developer in Ahmedabad, India",
    bio: [
        "I build production AI systems: RAG pipelines, LangGraph agents, fine-tuned LLMs and MCP servers, from architecture through to deployment on AWS.",
        "Over almost two years I've turned business requirements into maintainable AI applications for enterprise clients, and handled the full project lifecycle on my own.",
    ],
    email: "shivangkosty@gmail.com",
    links: [
        { label: "GitHub", href: "https://github.com/Shivangk17" },
        { label: "LinkedIn", href: "https://linkedin.com/in/shivang-kosty-80b837307" },
    ],
};

// Client work is private, so these have no links. Add `href` to any item once you have a public repo or demo.
export const items = [
    {
        title: "Natural language to SQL with a fine-tuned LLM",
        date: "2025–26", type: "Project",
        blurb: "Fine-tuned Qwen 2.5 Coder with LoRA to write T-SQL, reaching about 85% query accuracy. An MCP server scans any database from a connection URL and checks each result against the question.",
        stack: "Qwen 2.5 Coder, LoRA, MCP, AWS SageMaker",
    },
    {
        title: "Loan Intelligence Agent",
        date: "2025–26", type: "Project",
        blurb: "A RAG agent that searches lender eligibility across complex PDFs, cutting document review time for loan brokers. Heavy PDF parsing runs in the background with retries.",
        stack: "FastAPI, Qdrant, OpenAI API, Celery, Redis, Docker, AWS EC2",
    },
    {
        title: "Multi-tenant AI data agent",
        date: "2025–26", type: "Project",
        blurb: "A LangGraph agent for a SaaS platform that answers questions from the database and draws charts. It streams answers live and keeps each tenant's data separate with role-based access.",
        stack: "FastAPI, LangGraph, OpenSearch, OpenAI API",
    },
    {
        title: "MCP server for real estate transactions",
        date: "2025–26", type: "Project",
        blurb: "Lets Claude and other MCP clients query live deal data in plain language, across Buyer, Seller, Dual and Referral deals. Estimated to cut research and cross-checking by 40–50%.",
        stack: "Model Context Protocol, PostgreSQL, LLM tool use",
    },
    {
        title: "HR email automation",
        date: "2024–25", type: "Project",
        blurb: "Screens resumes, scores candidate fit with Gemini, and sends timed follow-ups. Saved about 170 HR hours over six months.",
        stack: "n8n, JavaScript, Gmail API, Google Sheets, Gemini API",
    },
];

export const experience = [
    {
        role: "Junior AI/ML Developer", company: "WebMob Technologies", period: "Jun 2025 – Oct 2026",
        points: [
            "Shipped four production AI systems covering NL-to-SQL, RAG, agents and MCP servers.",
            "Ran the full model pipeline on SageMaker: data prep, training, versioning and endpoint deployment.",
            "Deployed Dockerized APIs to AWS EC2 through GitLab CI/CD.",
        ],
    },
    {
        role: "AI/ML Engineer Intern", company: "WebMob Technologies", period: "Dec 2024 – May 2025",
        points: ["Automated HR screening and follow-ups with n8n and Gemini, saving about 170 hours."],
    },
];

export const education = {
    degree: "B.E. in Computer Engineering", school: "LJ University, Ahmedabad",
    period: "2022 – 2026", note: "CGPA 8.87 / 10",
};

export const skills = [
    { group: "AI and LLMs", list: "LangChain, LangGraph, LangSmith, PyTorch, TensorFlow, RAG, LoRA fine-tuning, AI agents, MCP, embeddings, OpenCV, YOLO" },
    { group: "Backend and data", list: "Python, FastAPI, Celery, Redis, PostgreSQL, MongoDB, OpenSearch, Qdrant, Milvus, SQL" },
    { group: "Cloud and tools", list: "AWS EC2, AWS SageMaker, Docker, GitLab CI/CD, Git, n8n" },
    { group: "Frontend", list: "JavaScript, React, Streamlit, HTML, CSS" },
];
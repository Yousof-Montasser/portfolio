export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Computer Vision & Verification" | "LLM & Agent Systems" | "Data Pipelines & Ingestion";
  organization: string;
  period: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  problem: string;
  architecture: {
    stages: {
      step: number;
      name: string;
      description: string;
      badge?: string;
      isValidation?: boolean;
    }[];
  };
  reliabilityMechanism: string;
  technicalDetails: string[];
  impact: string;
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export const PROFILE = {
  name: "Yousof Montasser Osman",
  role: "AI Engineer / Software Engineer",
  location: "Cairo, Egypt",
  headline: "Building production AI systems that remain reliable when models are wrong.",
  summary:
    "AI Engineer with hands-on experience designing, building, and deploying production AI systems end-to-end. Specializes in building deterministic validation layers around probabilistic models, real-time computer vision pipelines, on-premise RAG architectures, and resilient backend services on AWS.",
  philosophy: {
    corePrinciple: "The component will fail, so design the system so failure does not matter.",
    thesis:
      "Modern AI models are inherently probabilistic. In real-world production environments—whether processing 50fps sensor feeds or orchestrating autonomous tool execution—a 95% model accuracy rate means thousands of catastrophic failures per day. Real engineering begins where the model's certainty ends: building deterministic verification boundaries, Kalman state compensation, idempotent data reconciliation, and safety-enforced execution runtimes.",
    tenets: [
      {
        title: "Deterministic Validation over Raw Confidence",
        description:
          "Never pass raw model outputs directly into downstream mission-critical state. Models hallucinate and misread noisy inputs; runtime mathematical bounds (e.g., kinematic laws, Kalman filtering, range checks) determine whether an inference is accepted or substituted.",
        tag: "Verification Engineering",
      },
      {
        title: "The LLM Proposes, The Runtime Enforces",
        description:
          "In agentic workflows, prompts guide intent, but deterministic code polices safety. Destructive actions, state mutations, and external API calls must require deterministic confirmation tokens and strict schema validation rather than relying on system prompt compliance.",
        tag: "Agent Safety",
      },
      {
        title: "Provenance & Idempotent Ingestion",
        description:
          "Data pipelines feeding intelligence systems must guarantee source provenance through retrieval and handle updates via idempotent upserts. When upstream sources revise documents, systems must replace rather than duplicate, preserving truth.",
        tag: "Data Integrity",
      },
      {
        title: "Closed-Loop Hardware Integration",
        description:
          "Connecting vision systems to physical or tactical protocols (WinTAK Cursor-on-Target, MAVLink autopilots) demands strict latency budgets and fail-safe disconnects to maintain stability when feeds degrade.",
        tag: "Systems & Control",
      },
    ],
  },
  contact: {
    email: "yousofmontasser@yahoo.com",
    github: "https://github.com/Yousof-Montasser",
    githubUsername: "Yousof-Montasser",
    linkedin: "https://linkedin.com/in/yousof-montasser",
    linkedinUsername: "yousof-montasser",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "vantage",
    title: "Vantage — Real-Time HUD OCR & Live Map Visualization",
    subtitle: "Tactical telemetry extraction pipeline with Kalman-based error compensation",
    category: "Computer Vision & Verification",
    organization: "Egyptian Military (Military Intelligence Agency)",
    period: "Apr 2025 – Jun 2026",
    githubUrl: "https://github.com/Yousof-Montasser/vantage",
    metrics: [
      { label: "Throughput", value: "50 fps @ 10k bitrate" },
      { label: "Positional Accuracy", value: "80% → ~100%" },
      { label: "Damaged Read Recovery", value: "32 of 33 Recovered" },
      { label: "Analyst Time Saved", value: "1–2 days / mission" },
    ],
    problem:
      "Extracting flight and sensor telemetry (GPS coordinates, azimuth, heading) from FLIR HUD video feeds in real time. At 50 frames per second, even a 95% accurate OCR model yields multiple visible errors every second. Glare, motion blur, and dropped hemisphere indicators cause erratic coordinate jumps on tactical mission maps, destroying operator trust.",
    architecture: {
      stages: [
        {
          step: 1,
          name: "Video Ingestion & Crop Isolation",
          description: "Recognition-only OCR over calibrated ROI crops, bypassing full-frame detection to cut pass latency by 4x (~2.2s to ~0.57s).",
        },
        {
          step: 2,
          name: "Multiprocessing Isolation",
          description: "CPU-bound OCR runs in a decoupled process across IPC queues, guaranteeing zero GUI frame drops at native frame rates.",
        },
        {
          step: 3,
          name: "DMS Parsing & Structure Repair",
          description: "Strict DD°MM'SS.ss\" syntax enforcement recovers dropped hemisphere characters (W/E) and eliminates stray period artifacts.",
          badge: "Syntax Repair",
          isValidation: true,
        },
        {
          step: 4,
          name: "Kalman Kinematic Gate",
          description: "State prediction cross-checks readings against physical flight envelopes; out-of-range readings are rejected and replaced by Kalman estimates.",
          badge: "Verification Gate",
          isValidation: true,
        },
        {
          step: 5,
          name: "Cursor-on-Target (CoT) Packets",
          description: "Sanitized coordinates and heading packaged into military-standard CoT XML structures.",
        },
        {
          step: 6,
          name: "WinTAK Live Map Broadcast",
          description: "UDP multicast stream into WinTAK / ATAK, rendering real-time aircraft (EAGLE) and sensor footprint (CAMERA) positions.",
        },
      ],
    },
    reliabilityMechanism:
      "Instead of attempting to make the OCR model perfectly accurate on noisy HUD footage, the system models the aircraft's physical motion with a Kalman filter and enforces strict DMS coordinate geometry. Validated across 1,339 frames of real footage: 0 regressions on good reads, 32 of 33 damaged reads repaired, and genuinely unreadable frames safely refused rather than guessed. Positional accuracy jumped from ~80% to near 100%.",
    technicalDetails: [
      "Engineered recognition-only OCR over fixed coordinate ROIs, cutting inference latency by 4x (~2.2s down to ~0.57s).",
      "Decoupled OCR compute into an independent OS process, preserving native video framerate playback without GIL bottlenecks.",
      "Built a structural DMS repair parser recovering damaged degree symbols and dropped hemisphere letters (validated on 1,339 frames).",
      "Integrated real-time Kalman filtering to dynamically compensate for glare anomalies and out-of-bounds readings.",
      "Streamed sanitized telemetry into WinTAK over Cursor-on-Target (CoT) UDP multicast, saving 1–2 analyst-days of manual footage review per mission.",
    ],
    impact:
      "Eliminated 1–2 analyst-days of manual video review per flight while delivering seamless tactical situational awareness without erratic map teleportation.",
    technologies: [
      "Python",
      "Computer Vision",
      "OCR",
      "Kalman Filtering",
      "State Estimation",
      "Multiprocessing",
      "Cursor-on-Target (CoT)",
      "WinTAK / ATAK",
    ],
  },
  {
    id: "osint-pipeline",
    title: "Automated OSINT Ingestion Pipeline — Taranis AI to RAGFlow",
    subtitle: "On-premise incremental ingestion pipeline feeding self-hosted RAG with zero data leaks",
    category: "Data Pipelines & Ingestion",
    organization: "Egyptian Military (Military Intelligence Agency)",
    period: "Apr 2025 – Jun 2026",
    metrics: [
      { label: "Daily Volume", value: "1,500–3,500 articles" },
      { label: "Network Isolation", value: "100% On-Premise" },
      { label: "Analyst Effort", value: "Saved hours / day" },
      { label: "Data Integrity", value: "Idempotent Upserts" },
    ],
    problem:
      "Intelligence analysts spent hours daily manually triaging, reading, and organizing open-source intelligence across disparate news sources. The agency required an automated pipeline to feed articles into an LLM-powered RAG system without exposing sensitive collection queries, endpoints, or intelligence data to external third-party cloud APIs.",
    architecture: {
      stages: [
        {
          step: 1,
          name: "Taranis Collection",
          description: "Automated harvesting and triage of OSINT streams across multiple media sources.",
        },
        {
          step: 2,
          name: "Cursor-Based Sync",
          description: "Scheduled n8n orchestrator queries Taranis REST API with persistent cursor timestamps to guarantee zero ingestion gaps.",
        },
        {
          step: 3,
          name: "Provenance & Normalization",
          description: "Python code nodes standardize article bodies while preserving source metadata, authors, and timestamps through to retrieval.",
          badge: "Provenance Gate",
          isValidation: true,
        },
        {
          step: 4,
          name: "Idempotent Upsert",
          description: "Persisted report-to-document ID mapping checks whether revisions exist; updates replace stale docs rather than duplicating vector embeddings.",
          badge: "Idempotency Layer",
          isValidation: true,
        },
        {
          step: 5,
          name: "Parse-Status Polling",
          description: "RAGFlow ingestion polling confirms complete parsing, OCR of attachments, and chunk indexing before commit.",
        },
        {
          step: 6,
          name: "Dedicated Error Workflow",
          description: "Automated alert triggers upon parser failures, network timeouts, or schema mismatches, preventing silent ingestion failures.",
        },
      ],
    },
    reliabilityMechanism:
      "Built with cursor-based incremental synchronization and persisted report-to-document ID mappings. When news agencies update or redact an article, the pipeline recognizes the report identity and performs an idempotent upsert in RAGFlow rather than creating duplicate embeddings. Parse-status polling and dedicated error workflows guarantee zero silent data drops, fully on-premise without external network exposure.",
    technicalDetails: [
      "Deployed and configured both Taranis (OSINT collection) and RAGFlow (open-source RAG engine) completely on-premise.",
      "Engineered automated n8n workflows with embedded Python transformation nodes for high-throughput batching.",
      "Processed 1,500 to 3,500 articles per day, extracting full source provenance through to final retrieval chunks.",
      "Implemented a persistent mapping table to enable idempotent document updates, eliminating vector redundancy.",
      "Integrated health checks, parse-status polling loops, and failure alert notifications.",
    ],
    impact:
      "Saved intelligence analysts hours of manual triage daily and provided conversational semantic search over live OSINT data with strict on-premise data confidentiality.",
    technologies: [
      "Python",
      "n8n",
      "RAGFlow",
      "Taranis AI",
      "REST APIs",
      "RAG Architecture",
      "Vector Embeddings",
      "On-Premise Deployment",
      "Idempotency",
    ],
  },
  {
    id: "uav-tracking",
    title: "Real-Time Object Detection & Tracking for Drone Systems",
    subtitle: "Closed-loop computer vision pipeline interfacing YOLO detections with flight controllers",
    category: "Computer Vision & Verification",
    organization: "Egyptian Military (Military Intelligence Agency)",
    period: "Apr 2025 – Jun 2026",
    metrics: [
      { label: "Target Tracking", value: "Moving Targets" },
      { label: "Control Loop", value: "Closed-Loop Autopilot" },
      { label: "Validation", value: "Simulation Validated" },
      { label: "Inference", value: "Real-Time Low-Latency" },
    ],
    problem:
      "Deploying computer vision on aerial drone platforms requires tracking moving targets in dynamic environments under vibration, scale variation, and occlusion. Raw detections alone cannot guide an aircraft; vision outputs must be transformed into continuous guidance vectors suitable for flight controllers without destabilizing the drone.",
    architecture: {
      stages: [
        {
          step: 1,
          name: "Feed Acquisition",
          description: "Live camera stream ingestion from drone payload gimbal.",
        },
        {
          step: 2,
          name: "YOLO Detection",
          description: "Real-time bounding box prediction and target classification.",
        },
        {
          step: 3,
          name: "Track Association",
          description: "Multi-frame tracking maintains target identity across camera motion and occlusion.",
          badge: "Track Lock",
          isValidation: true,
        },
        {
          step: 4,
          name: "Guidance Mapping",
          description: "Pixel coordinate error offsets translated into spatial velocity setpoints.",
        },
        {
          step: 5,
          name: "Flight Controller Interface",
          description: "Closed-loop communication with autopilot controller to execute autonomous pursuit.",
        },
      ],
    },
    reliabilityMechanism:
      "Incorporated multi-frame track persistence and spatial smoothing between detection frames. Rather than abruptly re-orienting the vehicle upon noisy single-frame false detections, the tracking pipeline enforces target lock continuity and validates coordinate offsets before sending setpoints to the autopilot.",
    technicalDetails: [
      "Built real-time YOLO object detection and tracking pipeline running on live aerial camera feeds.",
      "Engineered target lock capability to identify, lock onto, and follow moving ground targets.",
      "Integrated vision outputs directly with the flight controller for autonomous closed-loop pursuit.",
      "Validated system dynamics, latency bounds, and control loop stability in simulation environments.",
    ],
    impact:
      "Successfully demonstrated closed-loop target acquisition and autonomous tracking in simulation, establishing an end-to-end aerial vision guidance capability.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Object Detection & Tracking",
      "Flight Controllers",
      "Closed-Loop Control",
      "Simulation Validation",
    ],
  },
  {
    id: "ai-notetaker",
    title: "AI_NoteTaker — Agentic System with Enforced Safety Controls",
    subtitle: "Conversational agent with deterministic confirmation tokens and RRF hybrid retrieval",
    category: "LLM & Agent Systems",
    organization: "Independent System Implementation",
    period: "2026",
    githubUrl: "https://github.com/Yousof-Montasser/AI_NoteTaker",
    metrics: [
      { label: "Architecture", value: "Tool-Calling Loop" },
      { label: "Safety Policy", value: "Cryptographic Token Gate" },
      { label: "Retrieval", value: "Hybrid FTS5 + Dense (RRF)" },
      { label: "Unit & Eval Tests", value: "22 Unit + 15 Scenarios" },
    ],
    problem:
      "Most LLM agents rely entirely on prompt instructions to avoid destructive operations (such as deleting files or overwriting user notes). Prompt-based safety fails unpredictably under jailbreaks or model confusion. Furthermore, standard semantic search often fails on exact keyword identifiers, while BM25 fails on semantic concepts.",
    architecture: {
      stages: [
        {
          step: 1,
          name: "User Intent & REPL",
          description: "Natural language query or command processed with sliding conversation window.",
        },
        {
          step: 2,
          name: "Agent Reasoning",
          description: "LLM plans tool invocation via strictly typed Pydantic parameter schemas.",
        },
        {
          step: 3,
          name: "Deterministic Safety Gate",
          description: "Mutations require exact note_id. Destructive actions return a one-time confirmation token rather than executing.",
          badge: "Token-Enforced Gate",
          isValidation: true,
        },
        {
          step: 4,
          name: "Two-Phase Redemption",
          description: "Destructive change is applied only upon token redemption on a subsequent turn; the model cannot bypass confirmation.",
          badge: "Deterministic Runtime",
          isValidation: true,
        },
        {
          step: 5,
          name: "Multi-User Isolation",
          description: "User identity is bound at store instantiation; user_id is excluded from tool args to prevent address spoofing.",
        },
        {
          step: 6,
          name: "Hybrid RRF Retrieval",
          description: "Fuses SQLite FTS5 lexical ranking with local all-MiniLM-L6-v2 dense embeddings via Reciprocal Rank Fusion.",
        },
      ],
    },
    reliabilityMechanism:
      "'The LLM proposes, the runtime enforces.' Destructive tool executions return a confirmation token that must be redeemed on a subsequent turn. Safety is guaranteed at the code level, not the prompt level. Tool schemas do two jobs: they guide the LLM and they police parameter boundaries. Retrieval utilizes Reciprocal Rank Fusion (RRF) to merge SQLite FTS5 keyword indexing with sentence-transformer embeddings, preventing semantic drift on exact terms.",
    technicalDetails: [
      "Engineered an agentic orchestration loop utilizing structured LLM tool-calling with Pydantic validation.",
      "Implemented token-based two-phase confirmation gates for note deletion and body removal.",
      "Bound user identity directly to NoteStore instances to eliminate user-impersonation tool vectors.",
      "Designed hybrid retrieval fusing SQLite FTS5 BM25-style lexical search with dense all-MiniLM-L6-v2 embeddings.",
      "Combined search results using Reciprocal Rank Fusion (RRF) for robust precision and recall balance.",
      "Built a comprehensive test suite (22 unit tests) and conversational evaluation runner (15 scripted multi-turn scenarios).",
      "Containerized complete application stack with Docker for reproducible zero-drift deployment.",
    ],
    impact:
      "Demonstrates high-reliability agent engineering principles: deterministic safety boundaries preventing accidental data loss, coupled with production-grade hybrid retrieval.",
    technologies: [
      "Python",
      "LLM Tool-Calling",
      "Agent Orchestration",
      "Pydantic",
      "SQLite FTS5",
      "Sentence-Transformers",
      "Reciprocal Rank Fusion (RRF)",
      "Docker",
      "Conversational Evals",
    ],
  },
  {
    id: "instasearch",
    title: "InstaSearch — Instagram Product Discovery Platform",
    subtitle: "Few-shot classification pipeline and natural-language-to-SQL search engine",
    category: "LLM & Agent Systems",
    organization: "Cairo University (Graduation Project)",
    period: "2024",
    metrics: [
      { label: "Data Scale", value: "Thousands of posts / 200+ sellers" },
      { label: "Data Annotation", value: "Zero labeled training data" },
      { label: "Classification", value: "Multi-Stage Few-Shot" },
      { label: "Interface", value: "Natural Language to SQL" },
    ],
    problem:
      "Egypt's fashion e-commerce is heavily decentralized across thousands of informal Instagram merchant pages with no standardized catalogs, inconsistent captions, and no search infrastructure. Classifying thousands of unstructured posts without budget for manual data labeling was a critical barrier.",
    architecture: {
      stages: [
        {
          step: 1,
          name: "Web Scraping",
          description: "Harvested thousands of unstructured posts across 200+ Egyptian fashion seller pages.",
        },
        {
          step: 2,
          name: "Caption Extraction",
          description: "Parsed captions, hashtags, seller metadata, and top user comments.",
        },
        {
          step: 3,
          name: "Stage 1 Few-Shot LLM",
          description: "High-level category tagging using system prompts with targeted category exemplars.",
          badge: "Few-Shot Invariant",
          isValidation: true,
        },
        {
          step: 4,
          name: "Stage 2 Attribute Extraction",
          description: "Refined granular attributes (material, size, price cues) cross-checked against comments.",
        },
        {
          step: 5,
          name: "Relational Indexing",
          description: "Structured data committed to relational SQL schema.",
        },
        {
          step: 6,
          name: "NL-to-SQL Chatbot",
          description: "Translates conversational customer inquiries into parameterized SQL queries in real time.",
        },
      ],
    },
    reliabilityMechanism:
      "Employed a multi-stage few-shot prompting pipeline with strict category definitions and input boundary constraints. Rather than attempting costly and fragile fine-tuning without ground truth, few-shot prompt chaining leveraged structured examples to enforce consistent category mappings across colloquial Egyptian Arabic and English captions.",
    technicalDetails: [
      "Engineered automated scraping system to collect and index posts across 200+ fashion merchants.",
      "Architected multi-stage LLM classification pipeline relying strictly on few-shot prompting without labeled data.",
      "Extracted structured product attributes by synthesizing post captions, merchant bio data, and user comments.",
      "Implemented a natural-language-to-SQL translation agent enabling users to execute complex relational filters via chat.",
      "Built discovery web interface providing unified multi-store search for consumers.",
    ],
    impact:
      "Proved end-to-end viability of structuring messy social commerce data into an interactive relational discovery platform without requiring manual data labeling.",
    technologies: [
      "Python",
      "LLMs",
      "Few-Shot Prompting",
      "Natural Language to SQL",
      "Web Scraping",
      "SQL / Relational DBs",
      "Data Pipeline",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Revovac",
    role: "Software Engineer",
    period: "Jul 2026 – Present",
    location: "Cairo, Egypt",
    summary:
      "Developing and maintaining backend services and REST APIs, working across the complete delivery cycle from implementation through production deployment.",
    bulletPoints: [
      "Develop and maintain robust backend microservices and REST APIs supporting core platform operations.",
      "Work across delivery cycle from technical implementation and integration testing through production deployment.",
      "Deploy and manage services on AWS infrastructure with Git-based version control and CI/CD workflows.",
      "Maintain rigorous technical documentation, service specifications, and interface contracts for supported systems.",
    ],
    technologies: ["Python", "REST APIs", "AWS", "Backend Services", "Git", "Production Deployment", "Docker"],
  },
  {
    company: "Egyptian Military (Military Intelligence Agency)",
    role: "AI Engineer",
    period: "Apr 2025 – Jun 2026",
    location: "Cairo, Egypt",
    summary:
      "Designed and deployed production computer vision, telemetry extraction, and automated intelligence ingestion pipelines for critical operational workflows.",
    bulletPoints: [
      "Architected and deployed Vantage, extracting FLIR HUD flight telemetry at 50fps using OCR with Kalman-based prediction compensation, lifting positional accuracy from 80% to near 100% and saving 1–2 analyst-days per mission.",
      "Streamed parsed coordinates and heading into WinTAK via Cursor-on-Target (CoT) protocol for real-time mission map tracking.",
      "Engineered automated scheduled n8n ingestion pipeline ingesting 1,500–3,500 OSINT articles daily via Taranis REST API into self-hosted RAGFlow with cursor-based sync and idempotent upserts.",
      "Preserved source provenance through to retrieval and implemented parse-status polling and automated failure workflows fully on-premise.",
      "Built real-time YOLO object detection and tracking pipeline on live drone camera feeds, integrating vision outputs with flight controller for closed-loop autonomous tracking (validated in simulation).",
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "OCR",
      "Kalman Filtering",
      "WinTAK / CoT",
      "YOLO",
      "n8n",
      "RAGFlow",
      "REST APIs",
      "Autonomous Tracking",
      "On-Premise Infrastructure",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    description: "Architectures, model optimization, and agentic reasoning",
    skills: [
      "Machine Learning",
      "Deep Learning (CNNs, RNNs, Transformers)",
      "NLP",
      "LLMs & Tool Calling",
      "RAG (Retrieval-Augmented Generation)",
      "Few-Shot Prompting",
      "Time Series",
      "Model Optimization",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  {
    category: "Computer Vision & Verification",
    description: "Real-time edge vision, tracking, and state estimation",
    skills: [
      "OpenCV",
      "YOLO",
      "Real-Time Object Detection",
      "Multi-Object Tracking",
      "Optical Character Recognition (OCR)",
      "Kalman Filtering",
      "State Estimation",
      "Cursor-on-Target (CoT)",
      "WinTAK GIS Integration",
    ],
  },
  {
    category: "Backend & Systems",
    description: "Resilient services, API contracts, and deterministic runtimes",
    skills: [
      "REST APIs",
      "Backend Services Architecture",
      "Deterministic Verification Layers",
      "Agent Safety Runtimes",
      "Idempotent Architecture",
      "Linux / Bash",
      "Git / GitHub Workflows",
    ],
  },
  {
    category: "Data Engineering & Pipelines",
    description: "Ingestion, reconciliation, and vector storage",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib / Seaborn",
      "Jupyter Notebooks",
      "Apache Spark",
      "Apache Kafka",
      "n8n Workflow Automation",
      "Cursor-Based Incremental Sync",
      "Provenance Preservation",
      "SQLite FTS5",
      "Reciprocal Rank Fusion (RRF)",
    ],
  },
  {
    category: "Cloud & Databases",
    description: "Cloud platforms, containerization, and data stores",
    skills: [
      "AWS Services",
      "Azure",
      "Docker Containerization",
      "MySQL",
      "SQLite",
      "NoSQL",
      "On-Premise LLM Deployment",
    ],
  },
  {
    category: "Core Languages",
    description: "System and scientific computing runtimes",
    skills: ["Python", "SQL", "C++"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Cairo University",
    degree: "B.Sc. Computer Science (Data Science)",
    period: "2020 – 2024",
    location: "Cairo, Egypt",
    details: "Specialized in data science, algorithms, distributed systems, machine learning, and computer vision.",
  },
  {
    institution: "Misr Language School",
    degree: "IGCSE",
    period: "2017 – 2020",
    location: "Cairo, Egypt",
  },
];

export const CERTIFICATIONS_AND_LANGUAGES = {
  spokenLanguages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Fluent (IELTS Band 7, C1)" },
  ],
};

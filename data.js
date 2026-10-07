window.NEXUS_DATA = {
  "tracks": {
    "data": {
      "en": "Data & Analytics",
      "th": "ข้อมูลและการวิเคราะห์"
    },
    "ml": {
      "en": "Machine Learning",
      "th": "แมชชีนเลิร์นนิง"
    },
    "forecast": {
      "en": "Forecasting",
      "th": "การพยากรณ์"
    },
    "blockchain": {
      "en": "Blockchain",
      "th": "บล็อกเชน"
    },
    "ai": {
      "en": "AI Core",
      "th": "แกนหลัก AI"
    },
    "fullstack": {
      "en": "Full-Stack AI Build",
      "th": "การสร้างระบบ Full-Stack AI"
    }
  },
  "sourceLabels": {
    "course": {
      "en": "Course Material",
      "th": "เนื้อหาในคอร์ส"
    },
    "course_plus": {
      "en": "Course + Practical Extension",
      "th": "เนื้อหาในคอร์ส + ความรู้ต่อยอด"
    },
    "practical": {
      "en": "Practical Build",
      "th": "ภาคปฏิบัติสร้างระบบ"
    },
    "extension": {
      "en": "Practical Extension",
      "th": "ความรู้ต่อยอดเชิงปฏิบัติ"
    }
  },
  "curriculum": [
    {
      "id": 1,
      "track": "data",
      "title": {
        "en": "Data Analytics Foundations",
        "th": "พื้นฐานการวิเคราะห์ข้อมูล"
      },
      "summary": {
        "en": "Build the frame from problem to impact and separate descriptive, diagnostic, predictive, and prescriptive analytics.",
        "th": "วางกรอบจากปัญหาไปสู่ผลลัพธ์ และแยกความต่างของการวิเคราะห์แบบ descriptive, diagnostic, predictive และ prescriptive."
      },
      "badge": {
        "en": "DATA EXPLORER",
        "th": "นักสำรวจข้อมูล"
      },
      "source": "course",
      "keyPoints": [
        "Data vs information",
        "Analytics lifecycle",
        "Problem → decision",
        "Business impact"
      ]
    },
    {
      "id": 2,
      "track": "data",
      "title": {
        "en": "EDA / Data Scanner",
        "th": "EDA / การสแกนข้อมูล"
      },
      "summary": {
        "en": "Check data health with shape, dtype, missing values, duplicates, distributions, outliers, and correlations before modeling.",
        "th": "ตรวจสุขภาพข้อมูลด้วย shape, dtype, missing, duplicates, distribution, outliers และ correlation ก่อนสร้างโมเดล."
      },
      "badge": {
        "en": "DATA DETECTIVE",
        "th": "นักสืบข้อมูล"
      },
      "source": "course",
      "keyPoints": [
        "Missing values",
        "Duplicates",
        "Outliers",
        "Correlation ≠ causation"
      ]
    },
    {
      "id": 3,
      "track": "data",
      "title": {
        "en": "Statistics / Evidence Engine",
        "th": "สถิติ / เครื่องยนต์สร้างหลักฐาน"
      },
      "summary": {
        "en": "Use statistics to reason from sample to population with hypothesis testing and correct p-value interpretation.",
        "th": "ใช้สถิติเพื่อสร้างหลักฐานจาก sample ไปสู่ population พร้อม hypothesis testing และการตีความ p-value ให้ถูกต้อง."
      },
      "badge": {
        "en": "EVIDENCE ANALYST",
        "th": "นักวิเคราะห์หลักฐาน"
      },
      "source": "course",
      "keyPoints": [
        "Population & sample",
        "H0 / H1",
        "p-value & alpha",
        "Type I / II errors"
      ]
    },
    {
      "id": 4,
      "track": "ml",
      "title": {
        "en": "Machine Learning Core",
        "th": "แกนหลักแมชชีนเลิร์นนิง"
      },
      "summary": {
        "en": "Understand supervised vs unsupervised learning, train/test split, generalization, overfitting, and baselines.",
        "th": "เข้าใจ supervised/unsupervised learning, train-test split, generalization, overfitting และ baseline."
      },
      "badge": {
        "en": "PATTERN LEARNER",
        "th": "ผู้เรียนรู้รูปแบบ"
      },
      "source": "course",
      "keyPoints": [
        "X / y",
        "Train / test / CV",
        "Overfit vs underfit",
        "Baselines"
      ]
    },
    {
      "id": 5,
      "track": "ml",
      "title": {
        "en": "Feature Engineering",
        "th": "วิศวกรรมคุณลักษณะ"
      },
      "summary": {
        "en": "Transform raw features through encoding, scaling, imputation, and creation while keeping the pipeline leakage-safe.",
        "th": "แปลง raw features ผ่าน encoding, scaling, imputation และ feature creation โดยทำ pipeline ให้ปลอดภัยจาก leakage."
      },
      "badge": {
        "en": "FEATURE ALCHEMIST",
        "th": "นักปรุงฟีเจอร์"
      },
      "source": "course",
      "keyPoints": [
        "Encoding",
        "Scaling",
        "Imputation",
        "Leakage-safe pipeline"
      ]
    },
    {
      "id": 6,
      "track": "ml",
      "title": {
        "en": "Model Evaluation",
        "th": "การประเมินโมเดล"
      },
      "summary": {
        "en": "Read confusion matrices and choose the right metrics for imbalanced classification problems.",
        "th": "อ่าน Confusion Matrix และเลือก Accuracy, Precision, Recall, F1 ให้เหมาะกับโจทย์และ class imbalance."
      },
      "badge": {
        "en": "MODEL AUDITOR",
        "th": "ผู้ตรวจสอบโมเดล"
      },
      "source": "course",
      "keyPoints": [
        "TP/TN/FP/FN",
        "Precision vs Recall",
        "F1 variants",
        "Threshold"
      ]
    },
    {
      "id": 7,
      "track": "ml",
      "title": {
        "en": "Decision Tree & Random Forest",
        "th": "Decision Tree และ Random Forest"
      },
      "summary": {
        "en": "Learn split criteria, pruning, and ensemble bagging with Random Forest to reduce variance.",
        "th": "เรียนรู้การ split ด้วย Gini/Entropy, pruning และการรวมหลายต้นไม้ด้วย Random Forest เพื่อลด variance."
      },
      "badge": {
        "en": "FOREST ARCHITECT",
        "th": "สถาปนิกป่าโมเดล"
      },
      "source": "course",
      "keyPoints": [
        "Entropy / Gini",
        "Information gain",
        "Pruning",
        "Bagging"
      ]
    },
    {
      "id": 8,
      "track": "ml",
      "title": {
        "en": "KNN, Naive Bayes & Model Comparison",
        "th": "KNN, Naive Bayes และการเปรียบเทียบโมเดล"
      },
      "summary": {
        "en": "Compare simple models through assumptions, scaling sensitivity, distance, and multi-metric trade-offs.",
        "th": "เปรียบเทียบโมเดลจาก assumption, scaling, distance และหลาย metric แทนการเลือกจาก accuracy อย่างเดียว."
      },
      "badge": {
        "en": "MODEL STRATEGIST",
        "th": "นักวางกลยุทธ์โมเดล"
      },
      "source": "course",
      "keyPoints": [
        "KNN & scaling",
        "Naive Bayes",
        "CV mean ± std",
        "Trade-offs"
      ]
    },
    {
      "id": 9,
      "track": "forecast",
      "title": {
        "en": "Time Series Intelligence",
        "th": "ความฉลาดของอนุกรมเวลา"
      },
      "summary": {
        "en": "Separate trend, seasonality, and noise; then learn stationarity, ADF/KPSS, and ARIMA(p,d,q).",
        "th": "แยก Trend, Seasonality, Noise และเรียนรู้ Stationarity, ADF/KPSS และ ARIMA(p,d,q)."
      },
      "badge": {
        "en": "FORECAST ENGINEER",
        "th": "วิศวกรการพยากรณ์"
      },
      "source": "course",
      "keyPoints": [
        "Trend / seasonality",
        "Stationarity",
        "ADF / KPSS",
        "ARIMA p,d,q"
      ]
    },
    {
      "id": 10,
      "track": "forecast",
      "title": {
        "en": "Seasonal Forecasting",
        "th": "การพยากรณ์แบบมีฤดูกาล"
      },
      "summary": {
        "en": "Extend ARIMA to SARIMA/SARIMAX with time-aware validation and care around future exogenous variables.",
        "th": "ต่อยอดจาก ARIMA สู่ SARIMA/SARIMAX พร้อม time-aware validation และข้อควรระวังเรื่อง future exogenous variables."
      },
      "badge": {
        "en": "SEASONAL FORECASTER",
        "th": "ผู้พยากรณ์ฤดูกาล"
      },
      "source": "course_plus",
      "keyPoints": [
        "SARIMA / SARIMAX",
        "Seasonal components",
        "Walk-forward validation",
        "Exogenous leakage"
      ]
    },
    {
      "id": 11,
      "track": "blockchain",
      "title": {
        "en": "Blockchain Foundation",
        "th": "พื้นฐานบล็อกเชน"
      },
      "summary": {
        "en": "Understand blocks, hashes, nodes, consensus, PoW, and blockchain types.",
        "th": "เข้าใจ Block, Hash, Node, Consensus, PoW และชนิดของ Blockchain."
      },
      "badge": {
        "en": "CHAIN EXPLORER",
        "th": "นักสำรวจเชน"
      },
      "source": "course",
      "keyPoints": [
        "Hash chain",
        "Tamper evidence",
        "Proof of Work",
        "Public / private / consortium"
      ]
    },
    {
      "id": 12,
      "track": "blockchain",
      "title": {
        "en": "Ethereum Runtime",
        "th": "สภาพแวดล้อมการทำงานของ Ethereum"
      },
      "summary": {
        "en": "Learn Ethereum, EVM, gas, wallets, keys, state, and DApp architecture.",
        "th": "เข้าใจ Ethereum, EVM, Gas, Wallet, Keys, State และ DApp architecture."
      },
      "badge": {
        "en": "EVM OPERATOR",
        "th": "ผู้ควบคุม EVM"
      },
      "source": "course",
      "keyPoints": [
        "EVM",
        "Gas",
        "Wallet & keys",
        "Read vs write state"
      ]
    },
    {
      "id": 13,
      "track": "blockchain",
      "title": {
        "en": "Solidity Data Architecture",
        "th": "สถาปัตยกรรมข้อมูลใน Solidity"
      },
      "summary": {
        "en": "Practice primitive types, arrays, address, bytes/string, and data locations: storage, memory, calldata.",
        "th": "ฝึก primitive types, arrays, address, bytes/string และ data location: storage, memory, calldata."
      },
      "badge": {
        "en": "DATA ARCHITECT",
        "th": "สถาปนิกข้อมูล"
      },
      "source": "course",
      "keyPoints": [
        "Primitive types",
        "Address & payable",
        "Arrays",
        "storage / memory / calldata"
      ]
    },
    {
      "id": 14,
      "track": "blockchain",
      "title": {
        "en": "Solidity Function Engine",
        "th": "เครื่องยนต์ฟังก์ชันของ Solidity"
      },
      "summary": {
        "en": "Design functions with visibility, view/pure/payable, modifiers, and require/revert.",
        "th": "ออกแบบ function ด้วย visibility, view/pure/payable, modifier และ require/revert."
      },
      "badge": {
        "en": "CONTRACT GATEKEEPER",
        "th": "ผู้เฝ้าประตูสัญญา"
      },
      "source": "course",
      "keyPoints": [
        "Function anatomy",
        "Visibility",
        "Modifiers",
        "Access control"
      ]
    },
    {
      "id": 15,
      "track": "blockchain",
      "title": {
        "en": "Smart Contract Build Lab",
        "th": "แลบสร้าง Smart Contract"
      },
      "summary": {
        "en": "Combine Solidity knowledge to build preorder or subscription contracts with state, payment, and roles.",
        "th": "รวมความรู้ Solidity มาสร้าง Pre-Order / Subscription contract แบบมี state, payment และ role."
      },
      "badge": {
        "en": "SMART CONTRACT BUILDER",
        "th": "ผู้สร้างสมาร์ตคอนแทรกต์"
      },
      "source": "course",
      "keyPoints": [
        "State transitions",
        "Payment flow",
        "Admin vs user",
        "Contract challenge"
      ]
    },
    {
      "id": 16,
      "track": "blockchain",
      "title": {
        "en": "Solidity Debug & Security",
        "th": "ดีบักและความปลอดภัยใน Solidity"
      },
      "summary": {
        "en": "Inspect access control, payable logic, bounds issues, truncation, and data-location mistakes.",
        "th": "ตรวจ access control, payable logic, out-of-bounds, truncation และ data-location mistakes."
      },
      "badge": {
        "en": "CONTRACT AUDITOR",
        "th": "ผู้ตรวจสอบสัญญา"
      },
      "source": "course",
      "keyPoints": [
        "Access mistakes",
        "Payment safety",
        "Array safety",
        "Integer risks"
      ]
    },
    {
      "id": 17,
      "track": "blockchain",
      "title": {
        "en": "Solidity Integration",
        "th": "การเชื่อมต่อ Solidity"
      },
      "summary": {
        "en": "Connect smart contracts to full-stack concepts through mapping, ownership, and subscription platform design.",
        "th": "เชื่อม smart contract เข้ากับ full-stack concept ผ่าน mapping, ownership และ platform แบบ subscription."
      },
      "badge": {
        "en": "BLOCKCHAIN DEVELOPER",
        "th": "นักพัฒนาบล็อกเชน"
      },
      "source": "course",
      "keyPoints": [
        "Contract architecture",
        "Mapping",
        "Ownership",
        "Full-stack integration"
      ]
    },
    {
      "id": 18,
      "track": "ai",
      "title": {
        "en": "Neural Networks",
        "th": "โครงข่ายประสาทเทียม"
      },
      "summary": {
        "en": "Understand neurons, weights, bias, activation, forward pass, loss, backpropagation, and training loops.",
        "th": "เข้าใจ neuron, weights, bias, activation, forward pass, loss, backpropagation และ training loop."
      },
      "badge": {
        "en": "NEURAL ENGINEER",
        "th": "วิศวกรโครงข่ายประสาท"
      },
      "source": "extension",
      "keyPoints": [
        "Neuron / layers",
        "Activation",
        "Backpropagation",
        "Overfitting controls"
      ]
    },
    {
      "id": 19,
      "track": "ai",
      "title": {
        "en": "NLP & Embeddings",
        "th": "NLP และ Embeddings"
      },
      "summary": {
        "en": "Move from tokenization to embeddings, semantic similarity, cosine similarity, and vector search.",
        "th": "จาก tokenization ไปสู่ embeddings, semantic similarity, cosine similarity และ vector search."
      },
      "badge": {
        "en": "SEMANTIC EXPLORER",
        "th": "นักสำรวจความหมาย"
      },
      "source": "extension",
      "keyPoints": [
        "Tokenization",
        "Embeddings",
        "Cosine similarity",
        "Vector DB basics"
      ]
    },
    {
      "id": 20,
      "track": "ai",
      "title": {
        "en": "Transformers & LLM",
        "th": "Transformers และ LLM"
      },
      "summary": {
        "en": "Learn self-attention, Q/K/V, multi-head attention, context windows, and next-token prediction.",
        "th": "เรียน Self-Attention, Q/K/V, Multi-Head Attention, context window และการสร้างข้อความแบบ next-token prediction."
      },
      "badge": {
        "en": "TRANSFORMER OPERATOR",
        "th": "ผู้ควบคุมทรานส์ฟอร์เมอร์"
      },
      "source": "extension",
      "keyPoints": [
        "Q / K / V",
        "Self-Attention",
        "Transformer block",
        "Context & hallucination"
      ]
    },
    {
      "id": 21,
      "track": "ai",
      "title": {
        "en": "RAG — Retrieval-Augmented Generation",
        "th": "RAG — Retrieval-Augmented Generation"
      },
      "summary": {
        "en": "Design an ingestion and query pipeline from chunking to grounded answers with citations.",
        "th": "ออกแบบ ingestion/query pipeline ตั้งแต่ chunk → embed → retrieve → context → grounded answer + citation."
      },
      "badge": {
        "en": "KNOWLEDGE ENGINEER",
        "th": "วิศวกรความรู้"
      },
      "source": "extension",
      "keyPoints": [
        "Chunking",
        "Retrieval",
        "Grounding",
        "RAG evaluation"
      ]
    },
    {
      "id": 22,
      "track": "ai",
      "title": {
        "en": "AI Agents + Capstone",
        "th": "AI Agents + โปรเจกต์สรุป"
      },
      "summary": {
        "en": "Combine LLMs, tools, goals, state, and guardrails into agent workflows and an AI product architecture.",
        "th": "รวม LLM + Goal + Tools + State + Guardrails เป็น Agent workflow พร้อม final AI product architecture."
      },
      "badge": {
        "en": "AI SYSTEM ARCHITECT",
        "th": "สถาปนิกระบบ AI"
      },
      "source": "extension",
      "keyPoints": [
        "Tool use",
        "State / memory",
        "Human approval",
        "Multi-agent preview"
      ]
    },
    {
      "id": 23,
      "track": "fullstack",
      "title": {
        "en": "AI Full-Stack Project Kickoff",
        "th": "เริ่มต้นโปรเจกต์ AI Full-Stack"
      },
      "summary": {
        "en": "Define the React → ASP.NET Core → FastAPI → PostgreSQL architecture and MVP scope.",
        "th": "กำหนดสถาปัตยกรรม React → ASP.NET Core → FastAPI → PostgreSQL และขอบเขต MVP ของ AI Decision Platform."
      },
      "badge": {
        "en": "AI PRODUCT ARCHITECT",
        "th": "สถาปนิกผลิตภัณฑ์ AI"
      },
      "source": "practical",
      "keyPoints": [
        "Service boundaries",
        "MVP scope",
        "Modules",
        "Vertical slice"
      ]
    },
    {
      "id": 24,
      "track": "fullstack",
      "title": {
        "en": "First Working Pipeline",
        "th": "ไปป์ไลน์ทำงานได้จริงชุดแรก"
      },
      "summary": {
        "en": "Connect React, ASP.NET, FastAPI, and Pandas so a CSV can move end-to-end.",
        "th": "เชื่อม React → ASP.NET → FastAPI → Pandas ให้ CSV เดินทางครบวงจร."
      },
      "badge": {
        "en": "FULL-STACK INTEGRATOR",
        "th": "ผู้บูรณาการ Full-Stack"
      },
      "source": "practical",
      "keyPoints": [
        "Multipart upload",
        "API proxy",
        "CORS",
        "Network flow"
      ]
    },
    {
      "id": 25,
      "track": "fullstack",
      "title": {
        "en": "Dataset Inspector & Health Dashboard",
        "th": "ตัวตรวจข้อมูลและแดชบอร์ดสุขภาพ"
      },
      "summary": {
        "en": "Build dataset health, column profiles, imbalance, outlier, and leakage warnings as product UX.",
        "th": "สร้าง Dataset Health, column profile, imbalance, outlier และ leakage warning ในรูปแบบ product UX."
      },
      "badge": {
        "en": "DATA PRODUCT BUILDER",
        "th": "ผู้สร้างผลิตภัณฑ์ข้อมูล"
      },
      "source": "practical",
      "keyPoints": [
        "Health score",
        "Column profiling",
        "Target suggestion",
        "Actionable warnings"
      ]
    },
    {
      "id": 26,
      "track": "fullstack",
      "title": {
        "en": "Target Selection + ML Training Engine",
        "th": "การเลือก Target + เครื่องฝึก ML"
      },
      "summary": {
        "en": "Let users choose targets and train baseline plus ML models through a leakage-safe preprocessing pipeline.",
        "th": "ให้ผู้ใช้เลือก target และ train baseline + ML models ผ่าน preprocessing pipeline ที่ leakage-safe."
      },
      "badge": {
        "en": "ML PIPELINE ENGINEER",
        "th": "วิศวกรไปป์ไลน์ ML"
      },
      "source": "practical",
      "keyPoints": [
        "Task detection",
        "ColumnTransformer",
        "Baselines",
        "Model Arena"
      ]
    },
    {
      "id": 27,
      "track": "fullstack",
      "title": {
        "en": "Model Explainability + Prediction Studio",
        "th": "การอธิบายโมเดล + ห้องทดลองพยากรณ์"
      },
      "summary": {
        "en": "Persist fitted pipelines and build prediction APIs with probabilities, importances, and OOD warnings.",
        "th": "persist fitted pipeline, ทำ prediction API, probability output และ feature importance พร้อม OOD warnings."
      },
      "badge": {
        "en": "PREDICTION ENGINEER",
        "th": "วิศวกรการพยากรณ์"
      },
      "source": "practical",
      "keyPoints": [
        "Model persistence",
        "Prediction schema",
        "Feature importance",
        "Training-serving consistency"
      ]
    },
    {
      "id": 28,
      "track": "fullstack",
      "title": {
        "en": "LLM Explanation Engine",
        "th": "เครื่องอธิบายผลด้วย LLM"
      },
      "summary": {
        "en": "Use LLMs as explainers from evidence packages without changing predictions or inventing facts.",
        "th": "ใช้ LLM เป็น explainer จาก evidence package โดยไม่อนุญาตให้เปลี่ยน prediction หรือแต่ง facts."
      },
      "badge": {
        "en": "AI EXPLANATION ENGINEER",
        "th": "วิศวกรคำอธิบาย AI"
      },
      "source": "practical",
      "keyPoints": [
        "Evidence package",
        "Structured output",
        "Template fallback",
        "Grounded explanation"
      ]
    },
    {
      "id": 29,
      "track": "fullstack",
      "title": {
        "en": "Document Upload + RAG Knowledge Base",
        "th": "อัปโหลดเอกสาร + ฐานความรู้ RAG"
      },
      "summary": {
        "en": "Build PDF/DOCX/TXT ingestion, chunking, multilingual embeddings, and project-scoped vector indexes.",
        "th": "สร้าง PDF/DOCX/TXT ingestion, chunking, multilingual embeddings และ project-scoped vector index."
      },
      "badge": {
        "en": "KNOWLEDGE BASE ENGINEER",
        "th": "วิศวกรฐานความรู้"
      },
      "source": "practical",
      "keyPoints": [
        "Loaders",
        "Chunking",
        "Embeddings",
        "Project isolation"
      ]
    },
    {
      "id": 30,
      "track": "fullstack",
      "title": {
        "en": "RAG Chat + Citations",
        "th": "แชต RAG + การอ้างอิงแหล่งที่มา"
      },
      "summary": {
        "en": "Build sources-only and hybrid chat with citation validation and retrieval debugging.",
        "th": "สร้าง Sources Only / Hybrid chat, source ID validation, citation mapping และ retrieval debug flow."
      },
      "badge": {
        "en": "GROUNDED AI BUILDER",
        "th": "ผู้สร้าง AI ที่มีหลักฐานอ้างอิง"
      },
      "source": "practical",
      "keyPoints": [
        "Sources-only mode",
        "Citation validation",
        "Query rewrite",
        "Retrieval evaluation"
      ]
    },
    {
      "id": 31,
      "track": "fullstack",
      "title": {
        "en": "AI Agent Orchestrator",
        "th": "ตัวควบคุม AI Agent"
      },
      "summary": {
        "en": "Unify dataset, ML, RAG, and LLM into controlled tool workflows with human approvals.",
        "th": "รวม Dataset, ML, RAG และ LLM ผ่าน controlled tools, workflow state และ human approval gates."
      },
      "badge": {
        "en": "AGENT SYSTEM BUILDER",
        "th": "ผู้สร้างระบบเอเจนต์"
      },
      "source": "practical",
      "keyPoints": [
        "Tool registry",
        "Run state",
        "Approval gates",
        "Guardrails"
      ]
    },
    {
      "id": 32,
      "track": "fullstack",
      "title": {
        "en": "PostgreSQL + Project Persistence",
        "th": "PostgreSQL + การเก็บสถานะโปรเจกต์"
      },
      "summary": {
        "en": "Design users, projects, datasets, models, documents, and agent-run persistence.",
        "th": "ออกแบบ users/projects/datasets/models/documents/conversations/agent-runs และเก็บ state แบบถาวร."
      },
      "badge": {
        "en": "AI APPLICATION ENGINEER",
        "th": "วิศวกรแอปพลิเคชัน AI"
      },
      "source": "practical",
      "keyPoints": [
        "EF Core",
        "Relational schema",
        "JSONB",
        "Persistent state"
      ]
    },
    {
      "id": 33,
      "track": "fullstack",
      "title": {
        "en": "Authentication + Authorization + Project Security",
        "th": "การยืนยันตัวตน + สิทธิ์ + ความปลอดภัยโปรเจกต์"
      },
      "summary": {
        "en": "Add register/login, password hashing, JWT or cookies, project ownership, and RAG isolation.",
        "th": "เพิ่ม register/login, password hashing, JWT/cookie strategy, project ownership และ RAG isolation."
      },
      "badge": {
        "en": "AI PLATFORM SECURITY ENGINEER",
        "th": "วิศวกรความปลอดภัยแพลตฟอร์ม AI"
      },
      "source": "practical",
      "keyPoints": [
        "AuthN vs AuthZ",
        "Ownership",
        "Secure resources",
        "Tenant isolation"
      ]
    },
    {
      "id": 34,
      "track": "fullstack",
      "title": {
        "en": "Reports + Export + Project Results",
        "th": "รายงาน + การส่งออก + ผลลัพธ์โปรเจกต์"
      },
      "summary": {
        "en": "Combine dataset, ML, RAG, and agent outputs into report snapshots for executive and technical views.",
        "th": "รวม Dataset, ML, RAG, Agent และ limitations เป็น report snapshot พร้อม print/export foundation."
      },
      "badge": {
        "en": "AI REPORTING ENGINEER",
        "th": "วิศวกรรายงาน AI"
      },
      "source": "practical",
      "keyPoints": [
        "Report contract",
        "Snapshotting",
        "Views",
        "Print/export"
      ]
    },
    {
      "id": 35,
      "track": "fullstack",
      "title": {
        "en": "Background Jobs + Real-Time Progress",
        "th": "งานเบื้องหลัง + ความคืบหน้าแบบเรียลไทม์"
      },
      "summary": {
        "en": "Move long-running tasks to background jobs with queues, workers, retries, cancellation, and progress.",
        "th": "ย้ายงานยาวไป background jobs พร้อม queue, worker, progress, retry, cancel และ heartbeat."
      },
      "badge": {
        "en": "DISTRIBUTED WORKFLOW BUILDER",
        "th": "ผู้สร้างเวิร์กโฟลว์แบบกระจาย"
      },
      "source": "practical",
      "keyPoints": [
        "Job lifecycle",
        "Worker",
        "Progress updates",
        "Retry & cancellation"
      ]
    },
    {
      "id": 36,
      "track": "fullstack",
      "title": {
        "en": "Automated Testing + Quality Gates",
        "th": "การทดสอบอัตโนมัติ + ประตูคุณภาพ"
      },
      "summary": {
        "en": "Set up unit, integration, ML, RAG, and agent tests plus release gates.",
        "th": "วาง unit/integration/ML/RAG/Agent tests และ release gates สำหรับระบบ AI."
      },
      "badge": {
        "en": "AI QUALITY ENGINEER",
        "th": "วิศวกรคุณภาพ AI"
      },
      "source": "practical",
      "keyPoints": [
        "Unit tests",
        "Authorization tests",
        "RAG eval",
        "Agent workflow tests"
      ]
    },
    {
      "id": 37,
      "track": "fullstack",
      "title": {
        "en": "CI/CD with GitHub Actions",
        "th": "CI/CD ด้วย GitHub Actions"
      },
      "summary": {
        "en": "Create CI pipelines for frontend, ASP.NET, and Python with lint, test, build, and protection rules.",
        "th": "ทำ CI ให้ Frontend, ASP.NET และ Python พร้อม lint, test, build และ branch protection."
      },
      "badge": {
        "en": "AI DEVOPS BUILDER",
        "th": "ผู้สร้าง DevOps AI"
      },
      "source": "practical",
      "keyPoints": [
        "GitHub Actions",
        "Quality gate",
        "Artifacts",
        "Secrets"
      ]
    },
    {
      "id": 38,
      "track": "fullstack",
      "title": {
        "en": "Docker + Container Architecture",
        "th": "Docker + สถาปัตยกรรมคอนเทนเนอร์"
      },
      "summary": {
        "en": "Containerize React, ASP.NET, FastAPI, workers, and PostgreSQL with Docker Compose.",
        "th": "containerize React, ASP.NET, FastAPI, Worker, PostgreSQL และรวมด้วย Docker Compose."
      },
      "badge": {
        "en": "CONTAINER PLATFORM ENGINEER",
        "th": "วิศวกรแพลตฟอร์มคอนเทนเนอร์"
      },
      "source": "practical",
      "keyPoints": [
        "Dockerfile",
        "Compose networking",
        "Volumes",
        "Health checks"
      ]
    },
    {
      "id": 39,
      "track": "fullstack",
      "title": {
        "en": "Cloud Deployment + HTTPS + Domain",
        "th": "การนำขึ้นคลาวด์ + HTTPS + โดเมน"
      },
      "summary": {
        "en": "Plan a cost-aware portfolio deployment with HTTPS, secrets, and production database setup.",
        "th": "ออกแบบ deployment แบบประหยัดสำหรับ portfolio พร้อม HTTPS, environment secrets และ production database."
      },
      "badge": {
        "en": "CLOUD AI DEPLOYER",
        "th": "ผู้ติดตั้งระบบ AI บนคลาวด์"
      },
      "source": "practical",
      "keyPoints": [
        "Frontend hosting",
        "Backend hosting",
        "Secrets",
        "Cost strategy"
      ]
    },
    {
      "id": 40,
      "track": "fullstack",
      "title": {
        "en": "Monitoring + Logging + Observability",
        "th": "Monitoring + Logging + Observability"
      },
      "summary": {
        "en": "Add logs, metrics, traces, health checks, alerts, and AI-specific monitoring.",
        "th": "เพิ่ม logs, metrics, traces, health checks, alerts และ AI-specific monitoring."
      },
      "badge": {
        "en": "AI SYSTEM OBSERVABILITY ENGINEER",
        "th": "วิศวกรการสังเกตระบบ AI"
      },
      "source": "practical",
      "keyPoints": [
        "Structured logs",
        "P95 latency",
        "RAG/Agent metrics",
        "Alerts"
      ]
    },
    {
      "id": 41,
      "track": "fullstack",
      "title": {
        "en": "Performance Tuning + Scalability",
        "th": "การปรับประสิทธิภาพ + การขยายระบบ"
      },
      "summary": {
        "en": "Measure bottlenecks first, then optimize React, APIs, SQL, embeddings, RAG, caching, and workers.",
        "th": "วัด bottleneck แล้ว optimize React, API, SQL, ML, embeddings, RAG, caching และ worker concurrency."
      },
      "badge": {
        "en": "AI PERFORMANCE ENGINEER",
        "th": "วิศวกรประสิทธิภาพ AI"
      },
      "source": "practical",
      "keyPoints": [
        "Measure first",
        "Indexes",
        "Batch embeddings",
        "Scaling"
      ]
    },
    {
      "id": 42,
      "track": "fullstack",
      "title": {
        "en": "Final UI/UX + Product Polish",
        "th": "UI/UX ขั้นสุดท้าย + ขัดเกลาผลิตภัณฑ์"
      },
      "summary": {
        "en": "Create a design system, shell, states, demo mode, and cohesive product navigation.",
        "th": "ทำ Design System, App Shell, loading/error/empty states, demo mode และ cohesive product navigation."
      },
      "badge": {
        "en": "AI PRODUCT DESIGNER",
        "th": "นักออกแบบผลิตภัณฑ์ AI"
      },
      "source": "practical",
      "keyPoints": [
        "Design system",
        "Product states",
        "RAG/Agent UX",
        "Demo experience"
      ]
    },
    {
      "id": 43,
      "track": "fullstack",
      "title": {
        "en": "Documentation + Portfolio Case Study",
        "th": "เอกสาร + เคสสตัดดีสำหรับพอร์ต"
      },
      "summary": {
        "en": "Turn the project into a strong story through README, architecture, challenges, screenshots, and interview pitch.",
        "th": "เปลี่ยนโปรเจกต์ให้เล่าเรื่องเป็นผ่าน README, architecture, challenges, screenshots และ interview pitch."
      },
      "badge": {
        "en": "AI SOLUTION COMMUNICATOR",
        "th": "ผู้สื่อสารโซลูชัน AI"
      },
      "source": "practical",
      "keyPoints": [
        "README",
        "Architecture story",
        "Technical decisions",
        "Portfolio narrative"
      ]
    },
    {
      "id": 44,
      "track": "fullstack",
      "title": {
        "en": "Final Verification + Release v1.0",
        "th": "การตรวจสอบขั้นสุดท้าย + ปล่อย v1.0"
      },
      "summary": {
        "en": "Run fresh-clone to release verification: auth, data, ML, RAG, agents, reports, deploy, and v1.0 release.",
        "th": "ทดสอบ fresh clone → auth → data → ML → RAG → Agent → Report → deploy และปิดท้ายด้วย v1.0 release."
      },
      "badge": {
        "en": "FULL-STACK AI SYSTEM ARCHITECT",
        "th": "สถาปนิกระบบ Full-Stack AI"
      },
      "source": "practical",
      "keyPoints": [
        "End-to-end verification",
        "Security gate",
        "Release checklist",
        "v1.0"
      ]
    }
  ],
  "trackOrder": [
    "data",
    "ml",
    "forecast",
    "blockchain",
    "ai",
    "fullstack"
  ]
};

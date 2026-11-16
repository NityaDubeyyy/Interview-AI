export interface InterviewQuestion {
  id: string;
  question: string;
  category: 'Technical' | 'Architecture' | 'System Design' | 'Coding' | 'Behavioral' | 'Problem Solving';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  domain: string;
  suggestedDurationMins: number;
  keyPoints: string[];
  sampleHint: string;
}

export interface DomainOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
  popularRoles: string[];
}

export interface LevelOption {
  id: 'beginner' | 'intermediate' | 'advanced';
  name: string;
  experienceRange: string;
  description: string;
  badgeColor: string;
}

export const DOMAINS: DomainOption[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'React, Next.js, CSS Architecture, Web Vitals, Performance, & Client State',
    iconName: 'Layers',
    popularRoles: ['Frontend Engineer', 'React Developer', 'UI/UX Engineer', 'Web Architect']
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Distributed Systems, Node.js, Microservices, Databases, & Scalability',
    iconName: 'Terminal',
    popularRoles: ['Backend Engineer', 'Node.js Developer', 'API Architect', 'Systems Engineer']
  },
  {
    id: 'data',
    name: 'Data Engineering & Analytics',
    description: 'ETL Pipelines, SQL Optimization, Data Warehousing, PySpark, & Analytics',
    iconName: 'BarChart',
    popularRoles: ['Data Engineer', 'Data Analyst', 'Analytics Engineer', 'Big Data Developer']
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    description: 'End-to-end Web Applications, REST/GraphQL APIs, Databases, & UI Integration',
    iconName: 'Code',
    popularRoles: ['Full Stack Engineer', 'Software Engineer', 'Product Developer', 'Tech Lead']
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud Systems',
    description: 'CI/CD, Kubernetes, Docker, Terraform, AWS/GCP, & Reliability Infrastructure',
    iconName: 'Network',
    popularRoles: ['DevOps Engineer', 'Site Reliability Engineer', 'Cloud Architect', 'Platform Engineer']
  },
  {
    id: 'mobile',
    name: 'Mobile Engineering',
    description: 'React Native, iOS (Swift), Android (Kotlin), Performance, & Native Modules',
    iconName: 'Cpu',
    popularRoles: ['Mobile Engineer', 'iOS Developer', 'Android Developer', 'React Native Engineer']
  },
  {
    id: 'ai_ml',
    name: 'AI & Machine Learning',
    description: 'LLM Fine-tuning, RAG, PyTorch, Model Deployment, & Vector Embeddings',
    iconName: 'Brain',
    popularRoles: ['AI Engineer', 'ML Engineer', 'LLM Developer', 'Data Scientist']
  },
  {
    id: 'security',
    name: 'Cyber Security',
    description: 'Application Security, OAuth2, Cryptography, Penetration Testing, & Compliance',
    iconName: 'Shield',
    popularRoles: ['Security Engineer', 'AppSec Specialist', 'DevSecOps Engineer', 'Cybersecurity Analyst']
  }
];

export const EXPERIENCE_LEVELS: LevelOption[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    experienceRange: '0 - 2 Years',
    description: 'Core concepts, fundamentals, syntax, and foundational problem solving',
    badgeColor: '#10b981'
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    experienceRange: '2 - 5 Years',
    description: 'Practical implementation, design patterns, optimization, and collaboration',
    badgeColor: '#3b82f6'
  },
  {
    id: 'advanced',
    name: 'Advanced',
    experienceRange: '5+ Years',
    description: 'System architecture, high availability, cross-team strategy, and leadership',
    badgeColor: '#8b5cf6'
  }
];

// Rich local question repository indexed by domain and level
const QUESTION_BANK: Record<string, Record<string, Omit<InterviewQuestion, 'id'>[]>> = {
  frontend: {
    beginner: [
      {
        question: 'Explain the difference between Virtual DOM and Real DOM in React. How does reconciliation work under the hood?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 4,
        keyPoints: ['Virtual DOM in-memory representation', 'Diffing algorithm efficiency O(n)', 'Batching state updates and DOM commits'],
        sampleHint: 'Mention how React compares snapshots of lightweight JS objects before applying actual DOM mutations.'
      },
      {
        question: 'How do `useState` and `useEffect` hooks operate in React? Explain dependency arrays and cleanup functions.',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 4,
        keyPoints: ['State persistence across re-renders', 'Side effect scheduling', 'Cleanup functions to prevent memory leaks'],
        sampleHint: 'Discuss what happens when passing an empty array vs no array vs specific variables in `useEffect`.'
      },
      {
        question: 'What is CSS Flexbox vs Grid, and when would you choose one layout paradigm over the other?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 3,
        keyPoints: ['1D (Flexbox) vs 2D (Grid) layouts', 'Alignment properties', 'Responsiveness without media queries'],
        sampleHint: 'Flexbox works best for linear component alignment, while CSS Grid excels at macro page layouts.'
      },
      {
        question: 'Describe how event propagation works in JavaScript (Capturing vs Bubbling).',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 3,
        keyPoints: ['Capture phase (top-down)', 'Target phase', 'Bubble phase (bottom-up)', '`stopPropagation()` and event delegation'],
        sampleHint: 'Explain how event delegation uses bubbling to listen for events on a parent element.'
      },
      {
        question: 'What are Semantic HTML tags and why are they crucial for Accessibility (a11y) and SEO?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 3,
        keyPoints: ['Semantic tags `<main>`, `<article>`, `<nav>`', 'Screen readers & DOM tree mapping', 'SEO crawlers understanding content structure'],
        sampleHint: 'Contrast generic `<div>` soup with meaningful semantic tags.'
      },
      {
        question: 'Walk me through how you debug a broken UI element or unexpected JavaScript error using Browser DevTools.',
        category: 'Behavioral',
        difficulty: 'Beginner',
        domain: 'Frontend Development',
        suggestedDurationMins: 4,
        keyPoints: ['Inspecting DOM & Computed Styles', 'Console stack traces', 'Breakpoints in Sources panel', 'Network tab inspection'],
        sampleHint: 'Provide a structured step-by-step troubleshooting approach.'
      }
    ],
    intermediate: [
      {
        question: 'How do you optimize Core Web Vitals (LCP, INP, CLS) in a modern Next.js / React application?',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['Largest Contentful Paint (LCP) image optimization', 'Interaction to Next Paint (INP) main thread reduction', 'Cumulative Layout Shift (CLS) dimensions reserving'],
        sampleHint: 'Mention image preloading, dynamic imports (`next/dynamic`), font loading strategies, and avoiding layout shifts.'
      },
      {
        question: 'Compare client-side rendering (CSR), server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR).',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['Build time vs Request time rendering', 'SEO and initial load performance', 'Caching strategies at CDN edge'],
        sampleHint: 'Highlight trade-offs between dynamic data needs and fast TTFB (Time to First Byte).'
      },
      {
        question: 'How would you architect state management for a large multi-step form application in React without causing global re-renders?',
        category: 'System Design',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['Form state isolation (React Hook Form / Zustand / Context boundaries)', 'Uncontrolled vs Controlled components', 'Memoization (`useMemo`, `useCallback`)'],
        sampleHint: 'Discuss keeping form state localized or using atomic state stores.'
      },
      {
        question: 'Describe CORS (Cross-Origin Resource Sharing). How does the browser enforce it and how do you resolve CORS errors correctly?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 4,
        keyPoints: ['Same-origin policy', 'Preflight `OPTIONS` requests', 'Access-Control-Allow-Origin headers', 'API Proxies during development'],
        sampleHint: 'Clarify that CORS is enforced by browser security, not server execution blocks.'
      },
      {
        question: 'Tell me about a time you encountered a severe frontend performance issue or memory leak. How did you diagnose and fix it?',
        category: 'Behavioral',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['Chrome Memory Profiler / Heap Snapshots', 'Uncleaned event listeners or intervals', 'Large un-paginated lists', 'Quantified improvement result'],
        sampleHint: 'Use the STAR method (Situation, Task, Action, Result) with metrics.'
      },
      {
        question: 'How do Web Workers work, and when should offloading tasks to a background thread be used in web apps?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Frontend Development',
        suggestedDurationMins: 4,
        keyPoints: ['Main thread blockage prevention', 'PostMessage communication API', 'Heavy computations (image processing, data parsing)'],
        sampleHint: 'Highlight keeping the UI responsive at 60 FPS while heavy work happens off the main thread.'
      }
    ],
    advanced: [
      {
        question: 'Design the frontend architecture for a real-time collaborative document editor like Google Docs or Figma.',
        category: 'System Design',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 8,
        keyPoints: ['Conflict Resolution (OT vs CRDTs like Yjs/Automerge)', 'WebSocket / WebRTC connection resilience', 'Canvas vs DOM rendering engine', 'Local offline storage (IndexedDB) & sync queues'],
        sampleHint: 'Detail operational transformation or CRDTs for multi-user editing concurrency.'
      },
      {
        question: 'How would you build a micro-frontend architecture for a large enterprise web application with multiple autonomous teams?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 7,
        keyPoints: ['Module Federation (Webpack 5)', 'Shared design tokens & design system versioning', 'Isolated routing & global state boundaries', 'CI/CD deployment pipelines per squad'],
        sampleHint: 'Compare runtime integration (Module Federation) vs build-time npm package orchestration.'
      },
      {
        question: 'Deep dive into React 19 / Server Components architecture. How do Server Actions and streaming SSR change client-server data flows?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 6,
        keyPoints: ['Zero-bundle-size server components', 'Streaming HTML with Suspense', 'Server actions security & mutation handling', 'Data fetching without API endpoints'],
        sampleHint: 'Explain how React eliminates client waterfalls while maintaining interactive boundaries.'
      },
      {
        question: 'How do you design a zero-runtime CSS-in-JS library or atomic design system capable of scaling across 100+ projects?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 6,
        keyPoints: ['Static extraction at build time (Tailwind / Vanilla Extract)', 'Design token distribution via CSS variables', 'Accessibility (ARIA) primitive wrappers', 'Bundle size impact reduction'],
        sampleHint: 'Discuss CSS variables, component primitive abstractions, and automated visual regression testing.'
      },
      {
        question: 'Describe how you handle web application security vulnerabilities including XSS, CSRF, Clickjacking, and Content Security Policies (CSP).',
        category: 'Technical',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['DOMPurify / Contextual escaping for XSS', 'SameSite cookies & anti-CSRF tokens', 'Strict Content-Security-Policy headers', 'X-Frame-Options against clickjacking'],
        sampleHint: 'Explain defense-in-depth security strategies for client applications.'
      },
      {
        question: 'As a Principal Frontend Engineer, how do you set engineering standards, enforce code quality, and lead technical debt refactoring across teams?',
        category: 'Behavioral',
        difficulty: 'Advanced',
        domain: 'Frontend Development',
        suggestedDurationMins: 5,
        keyPoints: ['RFC processes & architecture reviews', 'Automated linting/formatting & CI check gates', 'Metrics-driven tech debt reduction', 'Mentorship & culture building'],
        sampleHint: 'Focus on influence, automated enforcement, and measurable business alignment.'
      }
    ]
  },
  backend: {
    beginner: [
      {
        question: 'What are the main principles of RESTful API design? Explain HTTP methods (GET, POST, PUT, DELETE, PATCH) and status codes.',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['Statelessness', 'Resource-oriented URIs', 'Idempotency of GET/PUT vs non-idempotency of POST', 'Correct status code usage (200, 201, 400, 401, 404, 500)'],
        sampleHint: 'Discuss idempotency and why URI Nouns are preferred over verbs.'
      },
      {
        question: 'Explain the difference between SQL (Relational) and NoSQL (Document/Key-Value) databases with examples.',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['ACID compliance in SQL', 'Flexible schemas in NoSQL', 'Scaling vertically vs horizontally', 'Use cases for PostgreSQL vs MongoDB'],
        sampleHint: 'Highlight structured data joins vs unstructured/high-throughput document stores.'
      },
      {
        question: 'How does Node.js handle asynchronous non-blocking I/O using the Event Loop?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['Single-threaded event loop', 'Libuv thread pool for async I/O', 'Callback queue, Microtask queue (Promises)', 'Non-blocking I/O operations'],
        sampleHint: 'Explain how heavy CPU-bound code blocks the event loop while I/O operations delegate to libuv.'
      },
      {
        question: 'What is authentication vs authorization? How does JWT (JSON Web Token) authentication work?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['AuthN (who you are) vs AuthZ (what you can do)', 'JWT structure: Header, Payload, Signature', 'Stateless token verification via secret key'],
        sampleHint: 'Explain how JWT signature prevents client tampering without requiring database lookups on every request.'
      },
      {
        question: 'What are database Indexes and how do they speed up query execution? What are the trade-offs?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['B-Tree / Hash data structures', 'Faster SELECT lookups (O(log N))', 'Slower write operations (INSERT/UPDATE)', 'Storage overhead'],
        sampleHint: 'Mention why indexing every column indiscriminately degrades database write performance.'
      },
      {
        question: 'Describe how you debug a server crash or memory leak in a backend application.',
        category: 'Behavioral',
        difficulty: 'Beginner',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['Analyzing application logs & stack traces', 'Checking CPU & memory telemetry', 'Reproducing in staging environment', 'Adding defensive error handling'],
        sampleHint: 'Walk through structured logging, stack trace analysis, and post-mortem prevention.'
      }
    ],
    intermediate: [
      {
        question: 'Design a scalable database schema for an E-commerce platform (Users, Products, Orders, Payments, Inventory).',
        category: 'System Design',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 6,
        keyPoints: ['Relational integrity & Foreign keys', 'Transaction isolation for order processing', 'Handling race conditions in inventory count', 'Optimized indexing on query patterns'],
        sampleHint: 'Address inventory deduction concurrency (atomic updates or database locks).'
      },
      {
        question: 'Explain rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window Log). How do you implement rate limiting in a distributed system?',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 5,
        keyPoints: ['Token bucket vs sliding window algorithms', 'Distributed cache store (Redis atomic scripts)', 'HTTP 429 Too Many Requests response headers'],
        sampleHint: 'Explain how Redis with Lua scripts enables atomic counter checks across multiple server instances.'
      },
      {
        question: 'Compare message queues (RabbitMQ, Kafka, SQS). When would you choose event-driven asynchronous processing over synchronous HTTP calls?',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 5,
        keyPoints: ['Decoupling producers and consumers', 'High-throughput log stream (Kafka) vs Job queue (RabbitMQ)', 'Backpressure management', 'At-least-once delivery & idempotency'],
        sampleHint: 'Focus on decoupling slow tasks (email sending, image processing) from user-facing API request threads.'
      },
      {
        question: 'What is database sharding and partitioning? How do read replicas and connection pooling work under heavy load?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 5,
        keyPoints: ['Horizontal sharding keys', 'Read replicas for read-heavy workloads', 'Connection pooling limits', 'Replication lag trade-offs'],
        sampleHint: 'Explain how connection pools prevent database connection exhaustion during traffic spikes.'
      },
      {
        question: 'Walk me through how you handled a production outage caused by a slow database query or API dependency downstream.',
        category: 'Behavioral',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 5,
        keyPoints: ['Incident detection & alerting', 'Immediate mitigation (circuit breaking, caching, fallback responses)', 'Root cause analysis (EXPLAIN ANALYZE)', 'Long-term resolution'],
        sampleHint: 'Structure the response with Incident Response, Triage, Remediation, and Root Cause Analysis.'
      },
      {
        question: 'How do gRPC and Protocol Buffers differ from traditional REST with JSON? Where is gRPC most effective?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Backend & APIs',
        suggestedDurationMins: 4,
        keyPoints: ['HTTP/2 multiplexing & streaming', 'Binary Protobuf serialization efficiency', 'Strongly typed contract definitions (`.proto`)', 'Internal microservice communication'],
        sampleHint: 'Highlight payload size reduction and speed gains in inter-service microservice RPCs.'
      }
    ],
    advanced: [
      {
        question: 'Design a distributed rate limiter and API Gateway capable of processing 1,000,000 requests per second with sub-10ms latency.',
        category: 'System Design',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 8,
        keyPoints: ['Distributed cache clustering (Redis Sentinel/Cluster)', 'Sliding window counter algorithm with probabilistic data structures (Count-Min Sketch)', 'Edge deployment (CDN / Cloudflare Workers)', 'Graceful fallback & circuit breaking'],
        sampleHint: 'Address cache bottlenecking, horizontal scaling of gateway nodes, and dynamic config propagation.'
      },
      {
        question: 'Explain the CAP Theorem and PACELC Theorem. How do distributed databases (Cassandra, DynamoDB, Spanner) handle network partitions and eventual consistency?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 7,
        keyPoints: ['Consistency vs Availability trade-offs during Partitions', 'PACELC theorem (Else: Latency vs Consistency)', 'Quorum reads/writes (R + W > N)', 'Vector clocks / Conflict-free Replicated Data Types'],
        sampleHint: 'Detail quorum math and how tuning read/write consistency levels impacts latency and data accuracy.'
      },
      {
        question: 'How do you implement the Saga Pattern for distributed transactions across multiple microservices without centralized two-phase commit (2PC)?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 6,
        keyPoints: ['Choreography vs Orchestration Sagas', 'Compensating transactions on failure', 'Idempotent consumer handlers', 'Outbox pattern for atomic event publishing'],
        sampleHint: 'Contrast event-driven choreography with centralized orchestrator services and failure rollback strategies.'
      },
      {
        question: 'How do database isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) work, and how do databases prevent anomalies like Dirty Reads, Non-Repeatable Reads, and Phantom Reads?',
        category: 'Technical',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 6,
        keyPoints: ['Multi-Version Concurrency Control (MVCC)', 'Two-Phase Locking (2PL)', 'Database transaction anomalies', 'Performance cost of Serializable isolation'],
        sampleHint: 'Explain MVCC and how databases snapshot rows to grant consistent reads without locking readers.'
      },
      {
        question: 'How do zero-downtime database migrations work on high-traffic tables containing hundreds of millions of rows?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 6,
        keyPoints: ['Expand and Contract strategy (Blue-Green migrations)', 'Dual-writing in application layer', 'Backfilling data in background batches', 'Shadow columns & index creation without table locks (`CONCURRENTLY`)'],
        sampleHint: 'Detail the 4-stage migration pattern: Add column -> Dual Write -> Backfill -> Read from new column -> Drop old.'
      },
      {
        question: 'How do you establish engineering governance for zero-trust security, distributed tracing (OpenTelemetry), and SLA/SLO tracking across 50+ backend microservices?',
        category: 'Behavioral',
        difficulty: 'Advanced',
        domain: 'Backend & APIs',
        suggestedDurationMins: 6,
        keyPoints: ['OpenTelemetry trace propagation headers', 'mTLS service-mesh authentication (Istio/Envoy)', 'SLO error budgets & alerting thresholds', 'Platform team enablement'],
        sampleHint: 'Explain how standardized telemetry and error budgets guide development priorities.'
      }
    ]
  },
  data: {
    beginner: [
      {
        question: 'What is the difference between OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing)? Give examples of databases for each.',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['Row-oriented vs Column-oriented storage', 'High-frequency small transactions (Postgres) vs Batch analytical queries (Snowflake, BigQuery)', 'Normalization vs Denormalization'],
        sampleHint: 'Compare quick single-record row lookups against scanning billions of values in specific columns.'
      },
      {
        question: 'Explain what an ETL (Extract, Transform, Load) pipeline is versus ELT (Extract, Load, Transform). When is ELT preferred today?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['Transforming before loading vs loading raw data into cloud warehouses first', 'Scalability of modern cloud data warehouses (Snowflake/BigQuery)', 'dbt (data build tool) transformations'],
        sampleHint: 'Explain how scalable cloud storage and compute popularized loading raw data first.'
      },
      {
        question: 'How do SQL window functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`) work? Provide an example query.',
        category: 'Coding',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['`OVER (PARTITION BY ... ORDER BY ...)` clause', 'Difference between `RANK()` (skips ties) and `DENSE_RANK()` (no gap)', 'Calculating running totals or delta changes'],
        sampleHint: 'Explain how window functions calculate metrics across a set of rows without collapsing them into a single row.'
      },
      {
        question: 'What are Parquet and ORC file formats, and why are columnar file formats superior to JSON/CSV for data analytics?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['Columnar compression ratio', 'Column pruning & predicate pushdown', 'Snappy / Gzip compression', 'Schema enforcement'],
        sampleHint: 'Discuss reading only selected columns from disk instead of parsing full text rows.'
      },
      {
        question: 'What is data normalization (1NF, 2NF, 3NF) vs star schema / snowflake schema in data warehousing?',
        category: 'Technical',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['Fact tables & Dimension tables', 'Reducing redundancy in transactional DBs', 'Denormalization for fast join performance in analytics'],
        sampleHint: 'Contrast third normal form for transactional consistency with star schemas for simplified analytical queries.'
      },
      {
        question: 'Walk me through how you validate data quality and detect missing or corrupted values in incoming data feeds.',
        category: 'Behavioral',
        difficulty: 'Beginner',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['Schema validation checks', 'Great Expectations / dbt tests', 'Null & duplicate value assertions', 'Alerting on anomaly thresholds'],
        sampleHint: 'Discuss automated assertions and quarantining dirty records into dead-letter tables.'
      }
    ],
    intermediate: [
      {
        question: 'How does Apache Spark handle distributed computing? Explain RDDs, DataFrames, Transformations vs Actions, and Lazy Evaluation.',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 5,
        keyPoints: ['Driver node vs Executor nodes', 'Narrow vs Wide transformations (Shuffling)', 'Lazy evaluation optimization graph (DAG)', 'In-memory caching'],
        sampleHint: 'Highlight why wide transformations force network shuffles across executors.'
      },
      {
        question: 'Design a data pipeline to process real-time clickstream events from millions of mobile users and present live analytics dashboards.',
        category: 'System Design',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 6,
        keyPoints: ['Event Ingestion (Kafka / Kinesis)', 'Stream Processing (Spark Streaming / Flink)', 'Time-series / Columnar storage (ClickHouse / Druid)', 'Sliding time window aggregations'],
        sampleHint: 'Address out-of-order event processing using event timestamps and watermarking.'
      },
      {
        question: 'How do you optimize slow PySpark / SQL jobs suffering from data skew and excessive disk spillage?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 5,
        keyPoints: ['Identifying skewed join keys', 'Salting keys technique', 'Broadcast joins for small tables', 'Partition tuning & memory reallocation'],
        sampleHint: 'Explain salting (adding random prefixes to join keys) to distribute hot partition data evenly.'
      },
      {
        question: 'What is Data Mesh architecture vs a traditional Data Lakehouse? Explain Data as a Product, Domain Ownership, and Federated Governance.',
        category: 'Architecture',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 5,
        keyPoints: ['Decentralized domain data teams', 'Data products with strict SLAs', 'Self-serve data infrastructure platform', 'Federated computational governance'],
        sampleHint: 'Contrast centralized data engineering bottlenecks with domain-owned data products.'
      },
      {
        question: 'Tell me about a complex data bug or pipeline failure that caused incorrect analytics metrics. How did you remediate and prevent recurrence?',
        category: 'Behavioral',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 5,
        keyPoints: ['Lineage tracking & impact assessment', 'Data backfilling procedures', 'Data observability (Monte Carlo / Soda)', 'Automated schema evolution checks'],
        sampleHint: 'Detail root cause, data backfilling strategy, and automated regression tests added.'
      },
      {
        question: 'Explain Delta Lake / Iceberg ACID table formats. How do features like Time Travel, Schema Enforcement, and Compaction work?',
        category: 'Technical',
        difficulty: 'Intermediate',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 4,
        keyPoints: ['JSON/Avro transaction logs (Delta Log)', 'Optimistic concurrency control', 'Time travel snapshot queries', 'Small file problem & OPTIMIZE / Z-Ordering'],
        sampleHint: 'Explain how transaction logs over object storage grant ACID capabilities to cloud data lakes.'
      }
    ],
    advanced: [
      {
        question: 'Architect an enterprise end-to-end Data Platform handling 100TB daily ingestion with batch, real-time streaming, data governance, and fine-grained RBAC.',
        category: 'System Design',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 8,
        keyPoints: ['Lambda / Kappa architecture comparison', 'Apache Iceberg table format on S3', 'Data cataloging & lineage (OpenLineage / Atlan)', 'Row & column-level security policies', 'FinOps & cluster cost auto-scaling'],
        sampleHint: 'Address storage vs compute decoupling, data access governance, and query cost control.'
      },
      {
        question: 'How do Apache Flink state management, RocksDB state backend, and Exactly-Once processing semantics with Chandy-Lamport checkpointing operate?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 7,
        keyPoints: ['Stateful stream processing', 'Two-phase commit sink integration', 'Asynchronous barrier snapshotting', 'Watermark mechanics for late-arriving data'],
        sampleHint: 'Detail barrier snapshotting and end-to-end exactly-once guarantees from source to sink.'
      },
      {
        question: 'How do you design automated Data Observability, Data Lineage tracking, and Anomaly Detection across 1,000+ dbt models and DAGs?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 6,
        keyPoints: ['Automated statistical anomaly detection on volume & schema', 'OpenLineage integration', 'CI/CD preview schemas (`dbt clone / Slim CI`)', 'SLA breach alerting & automated fallback routing'],
        sampleHint: 'Discuss dbt Slim CI, state comparison artifacts, and lineage graph traversal.'
      },
      {
        question: 'How do you manage schema evolution without breaking downstream BI tools or machine learning feature stores when upstream source APIs mutate?',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 6,
        keyPoints: ['Schema Registry (Confluent Avro / Protobuf)', 'Backward & Forward compatibility modes', 'Schema versioning & contract testing', 'Semantic layer abstraction'],
        sampleHint: 'Explain schema compatibility checks in CI pipelines prior to merging breaking upstream changes.'
      },
      {
        question: 'Describe how you build and optimize a Feature Store (Feast / Tecton) for low-latency point-in-time machine learning model training and inference.',
        category: 'Architecture',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 6,
        keyPoints: ['Offline store (Parquet/Snowflake) vs Online store (Redis/DynamoDB)', 'Preventing data leakage with point-in-time joins (As-of joins)', 'Feature computation backfills'],
        sampleHint: 'Focus on eliminating training-serving skew and accurate point-in-time time-travel joins.'
      },
      {
        question: 'As a Lead Data Architect, how do you manage cloud data warehouse spending (Snowflake / BigQuery), balance performance vs cost, and align data strategy with business KPIs?',
        category: 'Behavioral',
        difficulty: 'Advanced',
        domain: 'Data Engineering & Analytics',
        suggestedDurationMins: 5,
        keyPoints: ['Warehouse auto-suspend & sizing tuning', 'Materialized views & query caching', 'FinOps dashboards & attribution tags', 'Stakeholder communication'],
        sampleHint: 'Provide concrete examples of cost savings achieved without degrading query SLAs.'
      }
    ]
  }
};

/**
 * Fallback questions template generator for domains or combinations outside the primary bank
 */
function generateDynamicFallback(role: string, domainName: string, level: 'Beginner' | 'Intermediate' | 'Advanced'): Omit<InterviewQuestion, 'id'>[] {
  const levelPrefix = level === 'Beginner' ? 'Fundamental' : level === 'Intermediate' ? 'Practical' : 'Architectural & Strategic';

  return [
    {
      question: `Describe your overall approach to designing and structuring code for a ${role} position. What principles do you follow?`,
      category: 'Technical',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 4,
      keyPoints: ['Clean Code & SOLID principles', 'Modularity & Testability', 'Documentation & readability'],
      sampleHint: 'Discuss trade-offs between speed of delivery and code maintainability.'
    },
    {
      question: `What are the core performance bottlenecks you routinely monitor in ${domainName}, and how do you address them?`,
      category: 'Technical',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 4,
      keyPoints: ['Profiling & Telemetry tools', 'Caching strategies', 'Resource optimization'],
      sampleHint: 'Explain how you measure baseline performance before applying optimizations.'
    },
    {
      question: `Walk me through a complex technical problem you solved while working as a ${role}. What was the impact?`,
      category: 'Behavioral',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 5,
      keyPoints: ['Problem definition', 'Systematic debugging approach', 'Measurable business outcome'],
      sampleHint: 'Use the STAR technique (Situation, Task, Action, Result) with metrics.'
    },
    {
      question: `How do you approach automated testing (Unit, Integration, End-to-End) for ${role} workflows?`,
      category: 'Technical',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 4,
      keyPoints: ['Testing pyramid strategy', 'Mocking external dependencies', 'CI pipeline integration'],
      sampleHint: 'Highlight maintaining high test coverage without writing fragile, high-maintenance tests.'
    },
    {
      question: `How do you stay updated with emerging technologies and tools in the ${domainName} domain?`,
      category: 'Behavioral',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 3,
      keyPoints: ['Continuous learning habits', 'Open source participation', 'Technical blogs & RFCs'],
      sampleHint: 'Give a concrete example of a technology you recently evaluated and adopted.'
    },
    {
      question: `In a high-pressure deadline situation, how do you prioritize technical trade-offs vs business requirements for a ${role}?`,
      category: 'Behavioral',
      difficulty: level,
      domain: domainName,
      suggestedDurationMins: 4,
      keyPoints: ['Managing technical debt explicitly', 'Cross-functional communication', 'MVP scope definition'],
      sampleHint: 'Demonstrate pragmatic judgment and clear communication with non-technical stakeholders.'
    }
  ];
}

/**
 * Primary Generator function returning 5 to 8 questions tailored to user selections
 */
export function generateInterviewQuestions(
  roleTitle: string,
  domainId: string,
  experienceLevel: 'beginner' | 'intermediate' | 'advanced'
): InterviewQuestion[] {
  const domainObj = DOMAINS.find(d => d.id === domainId) || DOMAINS[0];
  const levelObj = EXPERIENCE_LEVELS.find(l => l.id === experienceLevel) || EXPERIENCE_LEVELS[1];
  const levelCap = (experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)) as 'Beginner' | 'Intermediate' | 'Advanced';

  let rawQuestions: Omit<InterviewQuestion, 'id'>[] = [];

  if (QUESTION_BANK[domainId] && QUESTION_BANK[domainId][experienceLevel]) {
    rawQuestions = QUESTION_BANK[domainId][experienceLevel];
  } else {
    rawQuestions = generateDynamicFallback(roleTitle || domainObj.popularRoles[0], domainObj.name, levelCap);
  }

  // Map to full objects with unique IDs and custom role substitution if user typed a specific role
  const formattedQuestions: InterviewQuestion[] = rawQuestions.map((q, idx) => {
    let finalQuestionText = q.question;
    if (roleTitle && roleTitle.trim().length > 0) {
      // Personalize question if custom role specified
      finalQuestionText = finalQuestionText.replace(/Software Engineer|Frontend Engineer|Backend Engineer|Data Engineer/g, roleTitle.trim());
    }

    return {
      id: `q-${domainId}-${experienceLevel}-${Date.now()}-${idx + 1}`,
      question: finalQuestionText,
      category: q.category,
      difficulty: q.difficulty,
      domain: domainObj.name,
      suggestedDurationMins: q.suggestedDurationMins,
      keyPoints: q.keyPoints,
      sampleHint: q.sampleHint
    };
  });

  // Guarantee 5 to 8 questions
  if (formattedQuestions.length < 5) {
    const extraFallback = generateDynamicFallback(roleTitle || domainObj.popularRoles[0], domainObj.name, levelCap);
    extraFallback.forEach((eq, i) => {
      if (formattedQuestions.length < 6) {
        formattedQuestions.push({
          id: `q-extra-${i}`,
          ...eq,
          domain: domainObj.name
        });
      }
    });
  }

  return formattedQuestions.slice(0, 8);
}

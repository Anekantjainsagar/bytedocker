const projects = [
  {
    title: "ERP & CRM",
    desc: [
      "ERP Solutions: Tailored ERP systems for businesses to manage inventory, finance, and operations effectively.",
      "CRM Solutions: Advanced CRM systems, including lead management, sales tracking, and customer interaction tools.",
      "Channel Partner Portals: Secure portals for managing affiliate and partner programs.",
    ],
    frontend: [
      "Primary: React.js, Vue.js, Angular",
      "Emerging Options: Svelte, Blazor (for C# integrations)",
    ],
    backend: [
      "Primary: Node.js, Django (Python), Ruby on Rails",
      "Additional/Experimental: Rust (for high-performance tasks), Go (for concurrency), Elixir (for real-time applications)",
    ],
    databases: [
      "Primary: PostgreSQL, MySQL, MongoDB",
      "Advanced Options: CockroachDB (for distributed SQL), Neo4j (for graph databases)",
    ],
    apis: "REST, GraphQL, gRPC (for microservices)",
    authentication: "Firebase Authentication, OAuth 2.0, JWT",
    deployment: "Docker, Kubernetes, AWS, Azure",
    devops: ": Jenkins, GitLab CI/CD, Terraform (for infrastructure as code)",
    additional_tools:
      "Apache Kafka, RabbitMQ, NATS (for messaging), Redis (for caching)",
    skills: [
      "react.js",
      "angular",
      "node.js",
      "ruby",
      "python",
      "aws",
      "rust",
      "mysql",
    ],
    img: "https://res.cloudinary.com/dfk09gblw/image/upload/v1731443359/j0agz8nislvl2eu9d2ek.png",
  },
  {
    title: "Mobile and Web Application Development",
    desc: [
      "E-commerce Platforms: Customizable e-commerce websites with payment gateways, WhatsApp integration, and admin dashboards.",
      "Real Estate Platforms: Property listing websites with Google Maps integration, lead management, and email CRM for brokers .",
      "Quick Commerce Apps: Applications similar to Zomato but for a variety of retail categories, with quick delivery options .",
    ],
    frontend: [
      "Primary: React.js, Next.js, HTML5, CSS3",
      "Additional: Alpine.js, Stencil (for fast web components)",
    ],
    frontend_mobile: [
      "Primary: Flutter, React Native",
      "Alternative Options: Swift (for iOS), Kotlin (for Android)",
    ],
    backend: [
      "Primary: Node.js, Laravel (PHP), Ruby on Rails",
      "Additional: Rust (for secure backend APIs), Elixir with Phoenix (for real-time features)",
    ],
    databases: [
      "Primary: MySQL, Firebase Firestore, MongoDB",
      "Alternatives: Redis (for caching), ScyllaDB (for low-latency NoSQL), Cassandra",
    ],
    payments: "Stripe, Razorpay, PayPal, Square",
    apis: "REST, GraphQL, WebSockets (for real-time data)",
    cloud_storage: "AWS S3, Google Cloud Storage, DigitalOcean Spaces",
    devops:
      "Docker, Kubernetes, Jenkins for CI/CD, Vercel (for rapid frontend deployment)",
    skills: [
      "rust",
      "react.js",
      "html",
      "css",
      "next.js",
      "node.js",
      "firebase",
      "aws",
    ],
    img: "https://res.cloudinary.com/dfk09gblw/image/upload/v1731443497/qmyvf10znjju6eiowyur.png",
  },
  {
    title: "Marketing and Sales Enablement Tools",
    desc: [
      "Affiliate CRM: For tracking leads and commissions from sub-brokers or affiliates.",
      "Lead Generation and Pipeline Management: Customized solutions for real estate brokers and other sectors, combining video production, SMM, and email CRM.",
      "Real Estate Marketing Packages: Tiered packages including  social media marketing, websites, CRM, and SEO services.",
    ],
    frontend: [
      "Primary: Angular, Vue.js, Tailwind CSS",
      "Additional: Svelte (for lightweight apps), Ember.js",
    ],
    backend: [
      "Primary: Django (Python), Flask (Python), Ruby on Rails",
      "Additional: Rust (for optimized performance), FastAPI (Python for high-speed APIs)",
    ],
    databases: [
      "Primary: PostgreSQL, Redis (for caching), Firebase",
      "Additional: ClickHouse (for real-time analytics), Amazon Aurora (for scalability)",
    ],
    email_marketing: "SendGrid, Mailchimp API, Amazon SES",
    automation:
      "Zapier, Make (formerly Integromat), n8n (self-hosted workflow automation)",
    analytics: "Google Analytics, Mixpanel, Heap",
    cloud_services: "AWS (Lambda, EC2), Google Cloud, Azure",
    devops: "Docker, GitHub Actions, HashiCorp Vault (for secrets management)",
    skills: ["tailwind", "python", "firebase", "aws"],
    img: "https://res.cloudinary.com/dfk09gblw/image/upload/v1731444335/wjfcb3mqoicbiburl7eb.png",
  },
  {
    title: "Internally Developed SaaS Products",
    desc: [
      "Quick Commerce Support Solutions: Logistic and inventory management solutions for companies offering fast deliveries.",
      "Automated Mail System for Leads: Automated email tools for real estate and e-commerce businesses.",
      "Inventory and Order Management System: A streamlined tool to track inventory levels, process orders, and manage logistics in real time, specifically suited for e-commerce or quick commerce businesses looking for a lean inventory management solution.",
      "Customer Self-Service Portal: An online portal where customers can check order status, update information, submit support tickets, and access FAQs or help resources. This could reduce the load on customer support teams.",
    ],
    frontend: [
      "Primary: Vue.js, React.js, Tailwind CSS",
      "Alternative: Qwik (for highly interactive apps with low latency)",
    ],
    backend: [
      "Primary: Node.js, FastAPI (Python), Go",
      "Additional: Rust, Crystal (for high-performance microservices), Haskell (for complex data processing)",
    ],
    databases: [
      "Primary: MySQL, MongoDB, DynamoDB",
      "Alternative: RethinkDB (for real-time apps), TimescaleDB (for time-series data)",
    ],
    notifications: "Twilio, Firebase Cloud Messaging, OneSignal",
    email_automation: "Amazon SES, SendGrid, Postmark",
    apis: "REST API, GraphQL, gRPC",
    payment_gateway: "Stripe, Razorpay, PayU",
    cloud_services: "AWS Lambda, Google Firebase, Azure Functions",
    devops:
      "Docker, GitLab CI/CD, AWS Fargate, Ansible (for configuration management)",
    skills: [
      "react.js",
      "tailwind",
      "node.js",
      "python",
      "mysql",
      "rust",
      "mongodb",
      "aws",
    ],
    img: "https://res.cloudinary.com/dfk09gblw/image/upload/v1731444271/g61ouvbvmirtdmccvvm6.png",
  },
  {
    title: "IT Consultation and Support",
    desc: [
      "Frontend and Backend Integrations: Expert integrations and development of backends with frontends.",
      "Data Security and Compliance: Assistance with implementing authentication and other secure data management protocols.",
    ],
    frontend: [
      "Primary: React.js, Angular, Flutter (for mobile integrations)",
      "Alternative: WebAssembly (for near-native app performance)",
    ],
    backend: [
      "Primary: Node.js, Django REST Framework (Python)",
      "Additional: Rust (for safe and fast APIs), Scala (for data-heavy applications), Erlang (for highly available systems)",
    ],
    databases: [
      "Primary: Firebase Firestore, MongoDB",
      "Alternatives: CouchDB (for offline support), etcd (for configuration management)",
    ],
    authentication: "Firebase Authentication, Auth0, Okta",
    apis: "Firebase Authentication, Auth0, Okta",
    cloud_infrastructure: "AWS (EC2, S3, Lambda), Azure, Google Cloud",
    devops:
      "Docker, Kubernetes, Jenkins, Terraform, Chef (for configuration management)",
    data_security:
      "HashiCorp Vault, SSL, OAuth, JWT Tokens, Role-based access controls, encryption libraries (OpenSSL, Bcrypt)",
    skills: [
      "react.js",
      "angular",
      "node.js",
      "python",
      "firebase",
      "mongodb",
      "aws",
    ],
    img: "https://res.cloudinary.com/dfk09gblw/image/upload/v1731444394/pfijgbd1v9hwypmslr6y.jpg",
  },
];

export default projects;

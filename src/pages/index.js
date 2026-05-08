import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const toolLogos = [
  { name: 'Azure', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoftazure.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonaws.svg' },
  { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kubernetes.svg' },
  { name: 'Terraform', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/terraform.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg' },
  { name: 'GitHub Actions', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubactions.svg' },
  { name: 'GitLab CI', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gitlab.svg' },
  { name: 'Prometheus', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/prometheus.svg' },
  { name: 'Grafana', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/grafana.svg' },
  { name: 'OpenTelemetry', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/opentelemetry.svg' },
  { name: 'Argo CD', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/argo.svg' },
  { name: 'Linux', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linux.svg' },
];

const featureCards = [
  {
    title: 'Cloud Architecture',
    text: 'Design patterns for Azure, AWS, landing zones, networking, identity, governance, and secure platform foundations.',
    link: '/architecture',
  },
  {
    title: 'Kubernetes Platforms',
    text: 'AKS and EKS notes covering private clusters, ingress, autoscaling, policy, observability, and operational readiness.',
    link: '/docs/azure-aks/intro',
  },
  {
    title: 'Terraform / IaC',
    text: 'Reusable module design, live root structure, naming conventions, remote state, review workflows, and scalable delivery.',
    link: '/docs/terraform-iac/intro',
  },
  {
    title: 'DevSecOps & SRE',
    text: 'Secure pipelines, SBOMs, image signing, SLIs, SLOs, incident response, alerting, metrics, logs, and traces.',
    link: '/docs/devsecops/intro',
  },
];

const roadmap = [
  'Enterprise Integration Platform on AKS',
  'AKS Private Cluster Architecture',
  'Terraform Foundation for Multi-Environment Platforms',
  'Private DNS for Azure Platform Engineering',
  'Key Vault and Managed Identity Patterns',
  'AWS Web Platform with ALB, WAF, ACM and ECR',
];

function BrandOrbit() {
  return (
    <div className="orbitWrap" aria-hidden="true">
      <div className="orbit orbitOne" />
      <div className="orbit orbitTwo" />
      <div className="orbit orbitThree" />
      <div className="orbitCore">DB</div>
      <span className="orbitDot dotOne" />
      <span className="orbitDot dotTwo" />
      <span className="orbitDot dotThree" />
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Cloud Platform Journal"
      description="Daily Blogs is a cloud, DevOps, SRE and platform engineering knowledge base."
    >
      <main className="electronPage">
        <section className="heroShell">
          <div className="container heroGrid">
            <div className="heroMarkPanel">
              <BrandOrbit />
            </div>

            <div className="heroCopy">
              <div className="eyebrow">Cloud Architecture • Platform Engineering • DevSecOps • SRE</div>
              <h1>Build production-grade cloud platforms with practical engineering notes.</h1>
              <p className="heroLead">
                A daily knowledge base for Azure, AWS, Kubernetes, Terraform, DevSecOps, SRE, and interview-ready architecture thinking.
              </p>

              <div className="heroActions">
                <Link className="primaryCta" to="/blog">Read the Blog</Link>
                <Link className="secondaryCta" to="/docs/intro">Explore Docs</Link>
              </div>

              <div className="commandCard" role="note">
                <span className="terminalPrompt">$</span>
                <code>start --track platform-engineering --focus production-readiness</code>
              </div>
            </div>
          </div>
        </section>

        <section className="container sectionBlock">
          <div className="sectionHeader centered">
            <p className="sectionKicker">Learning paths</p>
            <h2>Structured like documentation. Written like real engineering experience.</h2>
            <p>
              The site turns cloud and platform engineering scenarios into polished, reusable notes without exposing client, employer, project, or personal details.
            </p>
          </div>

          <div className="featureGrid">
            {featureCards.map((feature) => (
              <Link className="featureCard" to={feature.link} key={feature.title}>
                <div className="featureIcon">◆</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="toolBand">
          <div className="container">
            <div className="sectionHeader centered compact">
              <p className="sectionKicker">Tooling ecosystem</p>
              <h2>Cloud-native tools and platforms covered in the journal</h2>
            </div>

            <div className="logoCloud" aria-label="Cloud and DevOps tools">
              {toolLogos.map((tool) => (
                <div className="toolLogoCard" key={tool.name}>
                  <img src={tool.src} alt={`${tool.name} logo`} loading="lazy" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="logoNote">
              Third-party product names and logos are trademarks of their respective owners and are used only for topic identification.
            </p>
          </div>
        </section>

        <section className="container splitSection">
          <div className="contentPanel darkPanel">
            <p className="sectionKicker">Start here</p>
            <h2>From architecture design to day-2 operations.</h2>
            <p>
              Articles are organized to help platform engineers reason through design trade-offs, security controls, observability, reliability, and operational ownership.
            </p>
            <div className="miniLinks">
              <Link to="/docs/azure-aks/intro">Azure / AKS</Link>
              <Link to="/docs/aws-platform/intro">AWS Platform</Link>
              <Link to="/docs/sre-observability/intro">SRE Notes</Link>
            </div>
          </div>

          <div className="contentPanel roadmapPanel">
            <p className="sectionKicker">Publishing roadmap</p>
            <h2>Upcoming daily posts</h2>
            <ol className="roadmapList">
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}

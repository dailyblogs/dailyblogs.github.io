import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const patterns = [
  'Hub-spoke networking for enterprise platforms',
  'Private AKS and EKS cluster foundations',
  'Environment separation for Dev, Test, UAT and Prod',
  'Identity-first access to cloud services',
  'Observability-first platform operations',
  'Policy-driven DevSecOps delivery',
];

export default function Architecture() {
  return (
    <Layout title="Architecture" description="Architecture patterns for cloud platforms.">
      <main className="pageShell container">
        <p className="sectionKicker">Architecture</p>
        <h1>Architecture patterns for platform engineering teams.</h1>
        <p className="pageLead">
          Reusable cloud-native design notes for secure, scalable and maintainable platforms across Azure, AWS, Kubernetes, Terraform, DevSecOps and SRE.
        </p>
        <div className="featureGrid pageGrid">
          {patterns.map((pattern) => (
            <div className="featureCard staticCard" key={pattern}>
              <div className="featureIcon">◆</div>
              <h3>{pattern}</h3>
              <p>Generic, sanitized guidance designed for public learning and interview-ready explanation.</p>
            </div>
          ))}
        </div>
        <Link className="primaryCta inlineCta" to="/blog">Read architecture posts</Link>
      </main>
    </Layout>
  );
}

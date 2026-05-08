import React from 'react';
import Layout from '@theme/Layout';

const tools = [
  ['Azure', 'Landing zones, AKS, Key Vault, Monitor, Private DNS'],
  ['AWS', 'VPC, ALB, WAF, ACM, ECR, CloudWatch, IAM'],
  ['Kubernetes', 'Ingress, autoscaling, RBAC, policies, workloads'],
  ['Terraform', 'Modules, live roots, state, providers, governance'],
  ['DevSecOps', 'Trivy, SBOMs, signing, policy-as-code, scans'],
  ['SRE', 'SLIs, SLOs, alerts, runbooks, tracing, incidents'],
];

export default function Tools() {
  return (
    <Layout title="Tools" description="Cloud and DevOps tools covered by Daily Blogs.">
      <main className="pageShell container">
        <p className="sectionKicker">Tools</p>
        <h1>Cloud and platform engineering toolkit.</h1>
        <p className="pageLead">
          A curated map of tools and platforms that appear across the Daily Blogs learning paths.
        </p>
        <div className="featureGrid pageGrid">
          {tools.map(([name, description]) => (
            <div className="featureCard staticCard" key={name}>
              <div className="featureIcon">◆</div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

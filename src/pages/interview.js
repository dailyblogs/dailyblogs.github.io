import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Interview() {
  return (
    <Layout title="Interview Prep" description="Interview-ready DevOps, SRE and architecture explanations.">
      <main className="pageShell container">
        <p className="sectionKicker">Interview preparation</p>
        <h1>Senior DevOps, SRE and Solution Architect interview preparation.</h1>
        <p className="pageLead">
          Scenario-based explanations for Kubernetes, Terraform, Azure, AWS, DevSecOps, observability, troubleshooting and architecture decision-making.
        </p>
        <div className="contentPanel roadmapPanel widePanel">
          <h2>Upcoming interview tracks</h2>
          <ol className="roadmapList">
            <li>How to explain SRE experience in a DevOps Architect interview</li>
            <li>AKS troubleshooting questions for senior DevOps engineers</li>
            <li>Terraform design questions for Platform Engineering interviews</li>
            <li>DevSecOps pipeline design with security gates</li>
            <li>Observability strategy with metrics, logs and traces</li>
          </ol>
        </div>
        <Link className="primaryCta inlineCta" to="/docs/interview-prep/intro">Open interview docs</Link>
      </main>
    </Layout>
  );
}

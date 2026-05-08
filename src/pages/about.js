import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About Daily Blogs.">
      <main className="pageShell container">
        <p className="sectionKicker">About</p>
        <h1>Daily Blogs is a public cloud engineering journal.</h1>
        <p className="pageLead">
          The goal is to publish practical, sanitized and professional notes on cloud architecture, platform engineering, DevSecOps and SRE without exposing personal, employer, client, internal project or sensitive implementation details.
        </p>
        <div className="contentPanel">
          <h2>Editorial principles</h2>
          <ul className="cleanList">
            <li>Keep content technically useful and production-oriented.</li>
            <li>Remove client names, employer names, internal URLs, IPs, tokens, account IDs and project-specific identifiers.</li>
            <li>Explain trade-offs, failure modes and operational validation.</li>
            <li>Prefer diagrams, commands, checklists and clear decision frameworks.</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

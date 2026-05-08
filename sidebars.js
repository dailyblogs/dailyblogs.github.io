const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Azure / AKS',
      items: ['azure-aks/intro'],
    },
    {
      type: 'category',
      label: 'AWS Platform',
      items: ['aws-platform/intro'],
    },
    {
      type: 'category',
      label: 'Terraform / IaC',
      items: ['terraform-iac/intro'],
    },
    {
      type: 'category',
      label: 'DevSecOps',
      items: ['devsecops/intro'],
    },
    {
      type: 'category',
      label: 'SRE / Observability',
      items: ['sre-observability/intro'],
    },
    {
      type: 'category',
      label: 'Interview Preparation',
      items: ['interview-prep/intro'],
    },
  ],
};

module.exports = sidebars;

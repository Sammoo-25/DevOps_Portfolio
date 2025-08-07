const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'DevOps.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Samvel Shegiyan',
  role: 'DevOps Engineer',
  description:
    'DevOps Engineer focused on building reliable, scalable cloud systems and improving deployment workﬂows. Experienced with AWS, Docker, and Kubernetes, and known for a proactive, collaborative approach to solving complex problems.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/samvel-shegiyan-85987b239/',
    github: 'https://github.com/Sammoo-25',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Terraform-AWS-production-infra',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Terraform', 'AWS', 'Helm'],
    sourceCode: 'https://github.com/Sammoo-25/Terraform-AWS-production-infra',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'AWS',
  'Linux, Windows',
  'Git, GitHub, GitLab',
  'Prometheus, Grafana',
  'Bash, Python, Go',
  'MySQL, PostgreSQL, MongoDB, Redis',
  'VMWare, VirtualBox, etc',
  'Teraform, AWS CDK',
  'GitLab CI, Jenkins, etc.',
  'Python, C++, GO'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shegiyansam@gmail.com',
}

export { header, about, projects, skills, contact }

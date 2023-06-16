// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function generateReadme(questionsArr, {title, description, toc, installation, usage, credits, license, tests, questions}){
  const [rmTitle, rmDesc, rmToc, rmInstall, rmUsage, rmContribute, rmLicense, rmTests, rmQuestions] = questionsArr;
  let readmeTemplate = 
    `# ${title}\n## ${rmDesc}\n ${description}\n## ${rmToc}\n ${toc}\n## ${rmInstall}\n ${installation}\n## ${rmUsage}\n ${usage}\n## ${rmContribute}\n ${credits}\n## ${rmLicense}\n ${license}\n## ${rmTests}\n${tests}\n## ${rmQuestions}\n${questions}`;
    return readmeTemplate;
}

// module.exports = generateMarkdown;
module.exports = {
  generateReadme: (questionsArr, {title, description, toc, installation, usage, credits, license, tests, questions}) => {
    const [rmTitle, rmDesc, rmToc, rmInstall, rmUsage, rmContribute, rmLicense, rmTests, rmQuestions] = questionsArr;
  let readmeTemplate = 
    `# ${title}\n## ${rmDesc}\n ${description}\n## ${rmToc}\n ${toc}\n## ${rmInstall}\n ${installation}\n## ${rmUsage}\n ${usage}\n## ${rmContribute}\n ${credits}\n## ${rmLicense}\n ${license}\n## ${rmTests}\n${tests}\n## ${rmQuestions}\n${questions}`;
    return readmeTemplate;
  }
}
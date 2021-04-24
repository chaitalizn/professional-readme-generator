// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = {
  ['The MIT']: ['yellow', 'https://opensource.org/licenses/MIT'],
  boost: ['red', 'https://opensource.org/licenses/EPL-1.0'],
  apache: [],
  gnu: ['blue', 'https://www.gnu.org/licenses/gpl-3.0'],
  creativeCommons: ['http://creativecommons.org/publicdomain/zero/1.0/'],
  eclipes: [],
  isc: [],
  mozillaPublicLicense: ['brightgreen', 'https://opensource.org/licenses/MPL-2.0'],
  unlicense: [],
}

function renderLicenseBadge(license) {
  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(renderLicenseBadge(answers.license)[0]);
  return `
  <p align="center"> # ${answers.title} </p>

  ---

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contribution] (#contribution)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  ##Installation
  ${answers.installation}

  ##Usage
  ${answers.usage}

  ##Constribution
  ${answers.contribution}

  ##Tests
  ${answers.tests}

  ##License
  ${answers.license}
  
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-${renderLicenseBadge(answers.license)[0]})](${renderLicenseBadge(answers.license)[1]})

  ##Questions
  Email me or reach out on GitHub with any questions

  GitHub Username: ${answers.githubUsername}

  Email Address: ${answers.email}

  ----

  This README was generated with ❤️ by [professional-readme-generator](add link here!)
`;
}

module.exports = generateMarkdown;

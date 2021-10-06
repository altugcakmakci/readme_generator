// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let retString = ``;
  switch (license) {
    case 'MIT':
      retString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;
    case 'APACHE 2.0':
      retString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
      break;
    case 'GPL 3.0':
      retString = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]`;
      break;
    case 'BDS 3':
      retString = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
      break;
    default:
      retString = ``;
  }
  return retString;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let retString = ``;
  switch (license) {
    case 'MIT':
      retString = `https://opensource.org/licenses/MIT)`;
      break;
    case 'APACHE 2.0':
      retString = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GPL 3.0':
      retString = `https://www.gnu.org/licenses/lgpl-3.0`;
      break;
    case 'BDS 3':
      retString = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    default:
      retString = ``;
  }
  return retString;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === null || license.length===0 || license==="None"){
    return "";
  }
  return `This project is licensed under the ${license} license.
Please refer to ${renderLicenseLink(license)} for details.`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install neessary dependencies, run the following command
${data.nmpcommand} 

## Usage
${data.repousage}

## License

${renderLicenseSection(data.license)}

## Contributing
${data.repocontribute}

## Tests

To run tests, run the following command
${data.testcommand}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at (https://github.com/${data.username})
`;
}

module.exports = {generateMarkdown};

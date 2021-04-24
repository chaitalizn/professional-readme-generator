
const generateReadme = answers => {
    return `
    
        <p align="center"> # ${awnsers.title} </p>

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

        ##Questions
        Email me or reach out on GitHub with any questions

        GitHub Username: ${answers.githubUsername}

        Email Address: ${answers.email}

        ----

        This README was generated with ❤️ by [professional-readme-generator](add link here!)
`

}

module.exports = generate
//title, project description, table of content, installtion instruction, usage information, contribution guidelines, test instruction, license, Questions with Github username and email 
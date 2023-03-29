function generateMarkdown(data) {
  return `
  ## README ##

  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents ##
  #Installation
  #Usage
  #Contributors
  #Tests
  #Questions
  #License
  ## ----------------


  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  Please direct questions to: ${data.email}
  You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
  ## License
  ${data.license}
  `;
  writeToFile(title, template);
  }
  
  module.exports = generateMarkdown

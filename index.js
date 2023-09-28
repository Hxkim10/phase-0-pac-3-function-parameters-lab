// Define the introduction function
function introduction(name) {
  // Use string interpolation to create the phrase
  return `Hi, my name is ${name}.`;
}

// Define the introductionWithLanguage function
function introductionWithLanguage(name, language) {
  // Create a phrase using the name and language arguments
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define the introductionWithLanguageOptional function
function introductionWithLanguageOptional(name, language = "JavaScript") {
  // Create a phrase using the name and language arguments (with a default value)
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

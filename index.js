const fs = require('fs');

// Read the JSON file (assuming the file is named 'applicants.json')
const data = JSON.parse(fs.readFileSync('applicant-tags.json', 'utf-8'));

// Create a new object to store the tag-to-applicant mapping
const tagMap = {};

// Loop through each entry in the JSON data
for (const applicantId in data) {
    const { newApplicantId, userTags } = data[applicantId];

    // For each tag, add the applicant to the tagMap
    userTags.forEach(tag => {
        if (!tagMap[tag]) {
            tagMap[tag] = [];
        }
        tagMap[tag].push(newApplicantId);
    });
}

// Write the result to a new JSON file (e.g., 'tag_to_applicants.json')
fs.writeFileSync('tag_to_applicants.json', JSON.stringify(tagMap, null, 2), 'utf-8');

console.log('Tag to applicant mapping has been saved to tag_to_applicants.json');

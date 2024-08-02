const dataArray = [
    { INPUT: "Harvard", OUTPUT: "https://www.harvard.edu" },
    { INPUT: "Stanford", OUTPUT: "https://www.stanford.edu" },
];

document.getElementById('collegeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    const input = document.getElementById('collegeName').value;
    const iframe = document.getElementById('collegeWebsite');
    
    // Find the college in the dataArray
    const college = dataArray.find(college => college.INPUT.toLowerCase() === input.toLowerCase());

    if (college) {
        // Update iframe source to the college URL
        iframe.src = college.OUTPUT;
    } else {
        // If college is not found, clear the iframe
        iframe.src = '';
        alert('College not found. Please try another name.');
    }
});
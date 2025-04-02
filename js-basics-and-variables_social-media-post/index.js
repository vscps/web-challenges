console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

const postTitle = "Mein Social-Media-Post";
const text = "Hier ist mein Text";
let numLikes = 123;
const createdBy = "Daniel";
const isReported = false;

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

console.log("Title: " + postTitle);
console.log("Text: " + text);
console.log("Number of likes: " + numLikes);
console.log("Created by: " + createdBy);
numLikes += 1;
console.log("New number of likes: " + numLikes);
console.log("Has this post been reported: " + isReported);
// --v-- write your code here --v--

// --^-- write your code here --^--

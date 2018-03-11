Feedreader Testing
Synopsis
The main goal of this project is to write a test script based on Jasmine http://jasmine.github.io/2.0/introduction.html for a feedreader.

Code Example
As stated the script runs on Jasmine. The following code snippet shall give you a better understanding of what to expect in my code

´´´$(function() { /* This is our first test suite - a test suite just contains

a related set of tests. This suite is all about the RSS
feeds definitions, the allFeeds variable in our application. / describe('RSS Feeds', function() { / This is our first test - it tests to make sure that the
allFeeds variable has been defined and that it is not
empty. Experiment with this before you get started on
the rest of this project. What happens when you change
allFeeds in app.js to be an empty array and refresh the
page? / it('are defined', function() { //checks if allFeeds variable has been defined expect(allFeeds).toBeDefined(); //checks if feed length is not empty expect(allFeeds.length).not.toBe(0); }); / TODO: Write a test that loops through each feed
in the allFeeds object and ensures it has a URL defined
and that the URL is not empty. */ it('has an URL defined and the URL is not empty', function() { allFeeds.forEach(function(feed) { //checks if URL is defined expect(feed.url).toBeDefined(); //checks if URL is not empty expect(feed.length).not.toBe(0); }); });´´´
Installation
To run the script please just visit this link: https://github.com/Ferperemero86/feedreader-testing-jasmin



What I did in detail for the Udacity Project
Took the JavaScript Testing course 
Downloaded the required project assets
Reviewed the functionality of the application within my browser
Explored the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
Explored the Jasmine spec file in ./jasmine/spec/feedreader.js and reviewed the relevant parts of the Jasmine documentation.

Edited the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in my application.
Returned the allFeeds variable to a passing state.

Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
Wrote a new test suite named "The menu".
Wrote a test that ensures the menu element is hidden by default. I analyzed the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
Wrote a test suite named "Initial Entries".
Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
Wrote a test suite named "New Feed Selection".
Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
All tests passed

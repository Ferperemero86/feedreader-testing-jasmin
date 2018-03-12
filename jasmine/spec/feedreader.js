/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    });


      /* Loop trough each feed to ensure allFeeds object has defined URLS
      and they are not empty */

      describe('urls test', function() {

        function testUrls(i) {
          it('Url defined in allFeeds',function() {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
          });
        }

          for( var i = 0; i < allFeeds.length; i++) {
           testUrls(i);
          }

       });


      /*Loop through each feed in the allFeeds object and ensure it has a name defined
      and  the name is not empty.*/


       describe('Names test', function() {

          function testNames(i) {
            it('names defined in allFeeds',function() {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toBe('');

            });
          }

          for( var i = 0; i < allFeeds.length; i++) {
                testNames(i);
          }

       });



    /* Write a new test suite named "The menu" */

      /* Make sure the menu changes
       * visibility when the menu icon is clicked.
      */



       describe('The Menu', function() {

          // Make sure the menu is hidden initially

          it('Menu is hidden', function() {
             expect($('body').attr('class')).toBe('menu-hidden');
          });

          it('body toggles the class menu-hidden on clicking menu icon', function() {
             $('.menu-icon-link').click();
             expect($('body').attr('class')).not.toContain('menu-hidden');

             $('.menu-icon-link').click();
             expect($('body').attr('class')).toContain('menu-hidden');
          });

       });

     /*Write a new test suite named "Initial Entries" */

     /* Make sure when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
     */


      describe('Initial Entries', function() {

        beforeEach(function(done) {
        loadFeed(0,done);
        });

        it('Check entry element in  feed container', function (done) {
           var entries = $('.feed .entry-link');
           expect(entries.length).toBeGreaterThan(0);
           done();
       });


      });


      /*Write a new test suite named "New Feed Selection" */

      /* Make sure when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */

      describe('New Feed Selection', function() {
        var firstFeedSelection = $('.feed').html();

         beforeEach(function(done) {
           loadFeed(0,function() {

             loadFeed(1,function() {
               done();
             });
         });
       });

        it('Feed content changes when loading a new feed', function (done) {
           var newFeedSelection = $('.feed').html();
           expect(firstFeedSelection).not.toBe(newFeedSelection);
           done();
        });

     });


}());

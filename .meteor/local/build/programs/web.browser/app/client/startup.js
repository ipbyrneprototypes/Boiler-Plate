(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/startup.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
	Session.set("user-search-query", '');                                 // 2
	Session.set("article-search-query", '');                              // 3
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

var config={};

config.BASE_URL='https://videoquotes.herokuapp.com';
config.OAuth={};
config.OAuth.facebook={};
config.OAuth.facebook.APP_ID='504291066443321';
config.OAuth.facebook.REDIRECT_URI=config.BASE_URL+'/OAuth/facebook/';
config.OAuth.facebook.login='https://www.facebook.com/dialog/oauth?client_id='+config.OAuth.facebook.APP_ID+'&redirect_uri='+config.OAuth.facebook.REDIRECT_URI+'&scope=email&state=/index';
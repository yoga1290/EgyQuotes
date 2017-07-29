let config = {}
config.BASE_URL = 'https://videoquotes.herokuapp.com'
config.OAuth = {}
config.OAuth.facebook = {}
config.OAuth.facebook.APP_ID ='504291066443321'
config.OAuth.facebook.REDIRECT_URI = config.BASE_URL + '/OAuth/facebook/'
config.OAuth.facebook.login = 'https://www.facebook.com/dialog/oauth?client_id='
                                + config.OAuth.facebook.APP_ID
                                + '&redirect_uri='
                                + config.OAuth.facebook.REDIRECT_URI
                                + '&scope=email&state=/index'

config.GOOGLE = {}
config.GOOGLE.YT_KEY = 'AIzaSyB4a9Vy_HoHuSFNIT8XUunQii_nla4YQvs'

config.OPEN_GRAPH = {}
config.OPEN_GRAPH.QUOTE = 'https://videoquotes.herokuapp.com/og/q/'

export default config

package videoquotes;

public class Credential
{
	public static final String
		BASE_URL="/",
                ADMIN_USER_ID="";
	public class facebook{
		public static final String
			PAGE_ID="",
			APP_ID="",
			REDIRECT_URI="/FBUser/",
			APP_SECRET="";
	}
        
        

	public class OAuth{
		public class facebook{
			public static final String
			PAGE_ID="",
			APP_ID="",
			REDIRECT_URI="/OAuth/facebook/",
			REDIRECT_URL=Credential.BASE_URL+Credential.OAuth.facebook.REDIRECT_URI,
			APP_SECRET="",
			APP_ACCESS_TOKEN="";
		}

		public class google{
			public static final String
			PAGE_ID="",
			CLIENT_ID="",
			REDIRECT_URI="/OAuth/google/",
			REDIRECT_URL=Credential.BASE_URL+Credential.OAuth.google.REDIRECT_URI,
			CLIENT_SECRET="",
                        API_KEY="";
		}
	}
}
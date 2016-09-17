package videoquotes;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("file:credentials.properties")
public class Credential
{
	@Value("${credentials.baseUrl}")
	public static String BASE_URL;

	@Value("${credentials.admin}")
  public static String ADMIN_USER_ID;

	//TODO: make use of credentials.properties?
	public class reCAPTCHA{
		public static final String
			SECRET="",
			KEY="";
	}

	public class OAuth{
		public class facebook{
			public static final String
			PAGE_ID="",
			APP_ID="",
			REDIRECT_URI="/OAuth/facebook/",
			REDIRECT_URL="https://videoquotes.herokuapp.com/OAuth/facebook/",
			APP_SECRET="",
			APP_ACCESS_TOKEN="";
		}

		public class google{
			public static final String
			PAGE_ID="",
			CLIENT_ID="",
			REDIRECT_URI="",
			REDIRECT_URL="https://videoquotes.herokuapp.com/OAuth/google/",
			CLIENT_SECRET="",
      API_KEY="";
		}
	}
}

package videoquotes.util;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author yoga1290
 */
@Service
public class GoogleUtil {

	@Value("${videoquotes.oauth.google.clientId}")
	String APP_ID;


	@Value("${videoquotes.oauth.google.redirectUri}")
	String REDIRECT_URL;

	@Value("${videoquotes.oauth.google.clientSecret}")
	String APP_SECRET;

	@Value("${videoquotes.baseUrl}")
	String BASE_URL;

	public String getAccessToken(String code) throws Exception {
		String scope = "https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.upload";
		String url = "https://www.googleapis.com/oauth2/v4/token?client_id=" + APP_ID + "&redirect_uri="+ REDIRECT_URL + "&client_secret=" + APP_SECRET + "&code="+ code +"&grant_type=authorization_code&scope=" + scope;
		String access_token = URLUtil.sendPost(url, "");
		access_token = new JSONObject(access_token).getString("access_token");
		return access_token;
	}

}

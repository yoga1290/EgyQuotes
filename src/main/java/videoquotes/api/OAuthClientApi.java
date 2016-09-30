package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import videoquotes.repository.mongo.UserRepository;
import videoquotes.util.FacebookUtil;
import videoquotes.util.URLUtil;


@Controller
@Api(value = "OAuth2 Server", description = "OAuth2 client API for 3rd party integeration", tags = "OAuth2")
@RequestMapping(produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class OAuthClientApi
{
    @Value("${videoquotes.baseUrl}")
    String BASE_URL;
    
    @Autowired
    FacebookUtil facebookUtil;
    
    @Autowired
    UserRepository userRepository;

    @Autowired
    URLUtil urlUtil;
    
    @RequestMapping("/")
    String test() {
	return "/";
    }

    @RequestMapping("/OAuth/facebook/")
    @ApiOperation(value = "Login/Sign via facebook", notes = "RO Password flow")
    public String facebook2JWT(@RequestParam String code, HttpServletResponse response) throws Exception {
	String accessToken = facebookUtil.getAccessToken(code);
	//TODO:
	String tokenResponse = URLUtil.sendPost(BASE_URL + "/oauth/token?grant_type=password&username=fb:" + accessToken + "&password=&client_id=h5&scope=openid", "");
	System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n Internal OAuth2 Server: "+tokenResponse+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	String access_token = new JSONObject(tokenResponse).getString("access_token");

	// response.setStatus(303, "");
	response.addHeader("Authorization", "Bearer " + access_token);
	response.addCookie(new Cookie("access_token", access_token));
	 return "/";
    }
    
    @RequestMapping("/google/")
    @ApiOperation(value = "Login/Sign via Google", notes = "RO Password flow")
    public String google2JWT(@RequestParam String code, HttpServletResponse response) throws Exception {
	String accessToken = facebookUtil.getAccessToken(code);
	//TODO:
	String tokenResponse = URLUtil.sendPost(BASE_URL + "/oauth/token?grant_type=password&username=fb:" + accessToken + "&password=&client_id=h5&scope=openid", "");
	System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n Internal OAuth2 Server: "+tokenResponse+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	String access_token = new JSONObject(tokenResponse).getString("access_token");

	// response.setStatus(303, "");
	response.addHeader("Authorization", "Bearer " + access_token);
	response.addCookie(new Cookie("access_token", access_token));
	 return "index.html";
    }

    /*
    @RequestMapping("/facebook/")
    public void facebook(@RequestParam String code, HttpServletResponse response) throws IOException {
	String accessToken = FacebookUtil.getAccessToken(code);
	String facebookId = FacebookUtil.getFacebookId(accessToken);
	User user = userRepository.findByFacebookId(facebookId);
	if (user == null) {
	    user = new User();
	    user.setFacebookId(facebookId);
	    user.setEnabled(true);
	    List<String> authority = new LinkedList<>();
	    authority.add("ROLE_USER");
	    if (facebookId == Credential.ADMIN_USER_ID) {
		authority.add("ROLE_ADMIN");
	    }
	    user.setGrantedAuthorities(authority);
	    userRepository.save(user);
	}


	final User fUser = user;
	SecurityContextHolder.getContext().setAuthentication(new Authentication() {

	    @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> result = new LinkedList<GrantedAuthority>();
		Iterator<String> it = fUser.getGrantedAuthorities().iterator();
		while(it.hasNext())
		    result.add(
			new GrantedAuthority() {
			    @Override
			    public String getAuthority() {
				return it.next();
			    }
			});
		return result;
	    }

	    @Override
	    public Object getCredentials() {
		return accessToken;
	    }

	    @Override
	    public Object getDetails() {
		return null;
	    }

	    @Override
	    public Object getPrincipal() {
		return fUser;
	    }

	    @Override
	    public boolean isAuthenticated() {
		return true;
	    }

	    @Override
	    public void setAuthenticated(boolean bln)  {

	    }

	    @Override
	    public String getName() {
		return fUser.getId();
	    }
	});
//	response.addCookie(new Cookie("facebookAccessToken", accessToken));
	response.addHeader("Location", Credential.BASE_URL);
	response.sendRedirect(Credential.BASE_URL);
    }
    // */


}

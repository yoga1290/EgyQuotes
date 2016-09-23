package videoquotes.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 *
 * @author yoga1290
 */
@Component
public class reCAPTCHAUtil {
    
    @Autowired
    private URLUtil url;
    
    @Value("${credentials.oauth.google.recaptcha.secret}")
    String SECRET;
    
    // https://developers.google.com/recaptcha/docs/verify
    public String verify(String captcha) throws Exception
    {
	return 
		url.sendPost("https://www.google.com/recaptcha/api/siteverify", "secret="+ SECRET +"&response="+captcha);
    }
    
}

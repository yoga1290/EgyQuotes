package videoquotes.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import videoquotes.Credential;

/**
 *
 * @author yoga1290
 */
@Component
public class reCAPTCHAUtil {
    
    @Autowired
    private URLUtil url;
    
    // https://developers.google.com/recaptcha/docs/verify
    public String verify(String captcha) throws Exception
    {
	return 
		url.sendPost("https://www.google.com/recaptcha/api/siteverify", "secret="+Credential.reCAPTCHA.SECRET+"&response="+captcha);
    }
    
}

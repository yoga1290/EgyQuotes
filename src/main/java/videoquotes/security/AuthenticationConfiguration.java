package videoquotes.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;

/**
 *
 * @author yoga1290
 */
@Configuration
public class AuthenticationConfiguration
    extends GlobalAuthenticationConfigurerAdapter
{

    @Autowired
    UserDetailsSvc userDetailsSvc;

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
	auth.userDetailsService(userDetailsSvc);
    }    
    
}

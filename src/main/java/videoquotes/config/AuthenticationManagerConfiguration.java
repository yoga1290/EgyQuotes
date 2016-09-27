package videoquotes.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;

/**
 *
 * @author yoga1290
 */
@Configuration
public class AuthenticationManagerConfiguration extends GlobalAuthenticationConfigurerAdapter {

    @Autowired
    UserDetailsSvc userDetailsSvc;
    
    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
	//TODO: auth.userDetailsService(...);
	auth.userDetailsService(userDetailsSvc);
	// auth.inMemoryAuthentication().withUser("user").password("password").roles("USER").authorities("ROLE_USER");
    }    
    
}

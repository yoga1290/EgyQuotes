package videoquotes.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 *
 * @author yoga1290
 */
@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class ResourceServer 
extends ResourceServerConfigurerAdapter
{

    @Override
    public void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        	// http.requestMatcher(new OAuthRequestedMatcher())
          //       .authorizeRequests()
          //       	.antMatchers(HttpMethod.OPTIONS).permitAll()
          //           .anyRequest().authenticated();
        // @formatter:on
        // http.httpBasic().disable();
      	http.authorizeRequests().anyRequest().permitAll();
    }    
    
}
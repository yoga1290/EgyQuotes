package videoquotes.config;

import java.io.IOException;
import java.security.KeyPair;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 *
 * @author yoga1290
 */
@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    // @Value("${resource.id:spring-boot-application}")
    // private String resourceId;
    // @Override
    // public void configure(ResourceServerSecurityConfigurer resources) {
    //     // @formatter:off
    //     resources.resourceId(resourceId);
    //     // @formatter:on
    // }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        	// http.requestMatcher(new OAuthRequestedMatcher())
          //       .authorizeRequests()
          //       	.antMatchers(HttpMethod.OPTIONS).permitAll()
          //           .anyRequest().authenticated();
        // @formatter:on
        // http.httpBasic().disable();
      	http.authorizeRequests().anyRequest().permitAll().and().csrf().disable();
    }

    // @Autowired
    // void userDetails(AuthenticationManagerBuilder auth, UserDetailsSvc userDetailsSvc) throws Exception {
    // 	//TODO: auth.userDetailsService(...);
    // 	// auth.userDetailsService(userDetailsSvc);
    // 	auth.inMemoryAuthentication().withUser("user").password("password").roles("USER").authorities("ROLE_USER");
    // }

    // private static class OAuthRequestedMatcher implements RequestMatcher {
    //     public boolean matches(HttpServletRequest request) {
    //         String auth = request.getHeader("Authorization");
    //         // Determine if the client request contained an OAuth Authorization
    //         boolean haveOauth2Token = (auth != null) && auth.startsWith("Bearer");
    //         boolean haveAccessToken = request.getParameter("access_token")!=null;
		// 	return haveOauth2Token || haveAccessToken;
    //     }
    // }

}

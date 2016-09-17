package videoquotes.config;

import java.io.IOException;
import java.io.InputStream;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.Resource;




@Configuration
@PropertySource("file:oauth2server.properties")
@EnableAuthorizationServer
class OAuth2AuthorizationConfig extends
		AuthorizationServerConfigurerAdapter {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Value("${oauth2.storepass}")
	private String STOREPASS;
	@Value("${oauth2.key}")
	private String OAUTH2ALIAS;
	@Bean
	public JwtAccessTokenConverter jwtAccessTokenConverter() {
	    // TODO: RSA
	    JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
	    KeyPair keyPair = new KeyStoreKeyFactory(
			    new ClassPathResource("keystore.jks"), STOREPASS.toCharArray())
			    .getKeyPair(OAUTH2ALIAS);
	    converter.setKeyPair(keyPair);

			// Resource Server config:

// 			 String publicKey = null;
// 			 byte buff[] = new byte[200];
// 			 int o = 0;
// 			 try {
// 			     InputStream resource = new ClassPathResource("public_key.txt").getInputStream();
// 			     while( (o = resource.read(buff, 0, buff.length)) > 0) {
// 				 publicKey += new String(buff, 0, o);
// 			     }
// //			   publicKey = IOUtils.toString(resource.getInputStream());
// 			 } catch (final IOException e) {
// 			   throw new RuntimeException(e);
// 			 }
// 			 converter.setVerifierKey(publicKey);
	    return converter;
	}

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		//TODO: clients.withClientDetails(...);
		clients.inMemory()
		    .withClient("h5")
		    .secret("")
		    .authorities("ROLE_H5")
			.autoApprove(true)
		    .accessTokenValiditySeconds(600)
		    .authorizedGrantTypes("authorization_code", "refresh_token", "password")
		    .scopes("openid")
		.and()
		    .withClient("swagger")
		    .secret("")
		    .authorities("ROLE_SWAGGER")
			.autoApprove(true)
		    .accessTokenValiditySeconds(600)
		    .authorizedGrantTypes("authorization_code", "refresh_token", "password")
		    .scopes("read")
		.and()
		    .withClient("mobile")
		    .secret("")
		    .authorities("ROLE_MOBILE")
		    .accessTokenValiditySeconds(600)
		    .authorizedGrantTypes("authorization_code", "refresh_token", "client_credentials", "password")
		    .scopes("openid");
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints)
			throws Exception {
	    endpoints
		    .authenticationManager(authenticationManager)
		    .accessTokenConverter(jwtAccessTokenConverter());
		    // .reuseRefreshTokens(false);
	}

	@Override
	public void configure(AuthorizationServerSecurityConfigurer oauthServer)
			throws Exception {
	    oauthServer.allowFormAuthenticationForClients();
			// oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
	    oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("permitAll()");
	}

}

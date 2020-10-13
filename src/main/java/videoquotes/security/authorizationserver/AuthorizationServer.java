package videoquotes.security.authorizationserver;

import java.security.KeyPair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;

// import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.core.annotation.Order;

// @Order(101)
@Configuration
@EnableAuthorizationServer
class AuthorizationServer extends
		AuthorizationServerConfigurerAdapter {

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
	    return converter;
	}
	
	/////////////////////////////////////////
	// TODO: refactor: move this to Resource server configuration?
//	@Bean
//	public TokenStore tokenStore() {
//	    return new JwtTokenStore(jwtAccessTokenConverter());
//	}
//	
//	@Bean
//	@Primary
//	public DefaultTokenServices tokenServices() {
//	    DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
//	    defaultTokenServices.setTokenStore(tokenStore());
//	    return defaultTokenServices;
//	}
	/////////////////////////////////////////

	// https://docs.spring.io/spring-security/oauth/apidocs/org/springframework/security/oauth2/config/annotation/web/configuration/AuthorizationServerConfigurerAdapter.html
	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		//TODO: clients.withClientDetails(...);
		clients.inMemory()
		    .withClient("h5")
		    .secret("")
		    .authorities("ROLE_H5")
		    .accessTokenValiditySeconds(5 * 60 * 60)
		    .authorizedGrantTypes("authorization_code", "refresh_token", "password") //, AuthorizationGrantType.PASSWORD.getValue()
			.scopes("openid")
			.autoApprove(true);
	}
	
	// see https://docs.spring.io/spring-security-oauth2-boot/docs/2.3.4.RELEASE/reference/html5/#oauth2-boot-authorization-server-password-grant-autowired-authentication-manager
	AuthenticationManager authenticationManager;
    public AuthorizationServer(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints)
			throws Exception {
	    endpoints
		    .authenticationManager(authenticationManager)
			.accessTokenConverter(jwtAccessTokenConverter())
			.allowedTokenEndpointRequestMethods(org.springframework.http.HttpMethod.GET)
		    // .addInterceptor(new AuthorizationEndpointInterceptor())
		    ;
	}

	@Override
	public void configure(AuthorizationServerSecurityConfigurer oauthServer)
			throws Exception {
	    oauthServer.allowFormAuthenticationForClients();
	    oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
	}
	
}

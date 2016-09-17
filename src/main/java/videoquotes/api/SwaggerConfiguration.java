/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.api;

import com.google.common.base.Predicate;
import static com.google.common.collect.Lists.newArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ImplicitGrantBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import static springfox.documentation.builders.PathSelectors.ant;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.GrantType;
import springfox.documentation.service.LoginEndpoint;
import springfox.documentation.service.ResourceOwnerPasswordCredentialsGrant;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;

/**
 *
 * @author yoga1290
 */
@Configuration
public class SwaggerConfiguration {
    @Bean
    public Docket VideoQuotesApi() {                
	return new Docket(DocumentationType.SWAGGER_2)          
	  .select()
	  .apis(RequestHandlerSelectors.basePackage("videoquotes.api"))
	  .paths(PathSelectors.any())
	  .build()
	  .apiInfo(apiInfo());
    }
    
    @Bean
    SecurityContext securityContext() {
        AuthorizationScope readScope = new AuthorizationScope("read", "read your pets");
        AuthorizationScope[] scopes = new AuthorizationScope[1];
        scopes[0] = readScope;
        SecurityReference securityReference = SecurityReference.builder()
                .reference("user_auth")
                .scopes(scopes)
                .build();

        return SecurityContext.builder()
                .securityReferences(newArrayList(securityReference))
                .forPaths(ant("/Quote"))//ant("/api/pet.*"))
                .build();
    }
    @Bean
    SecurityScheme user_oauth() {
        return new OAuthBuilder()
                .name("user_auth")
                .grantTypes(grantTypes())
                .scopes(scopes())
                .build();
    }
    @Bean
    public SecurityConfiguration securityInfo() {
        return new SecurityConfiguration("swagger", "", "pets", "swagger", "swagger", ApiKeyVehicle.HEADER, "access_token", ",");
    }
    
    List<GrantType> grantTypes() {
	//TODO
        GrantType grantType = new ImplicitGrantBuilder()
                .loginEndpoint(new LoginEndpoint("https://www.facebook.com/dialog/oauth?client_id=504291066443321&redirect_uri=https://videoquotes.herokuapp.com/OAuth/facebook/&scope=email&state=/index"))
                .build();
        return newArrayList(grantType);
    }
    List<AuthorizationScope> scopes() {
        return newArrayList(
                new AuthorizationScope("read", "read your pets"));
    }
 
private ApiInfo apiInfo() {
    ApiInfo apiInfo = new ApiInfo(
      "VideoQuotes API",
      "Some custom description of API.",
      "v1.0.0",
      "Terms of service",
      "yoga1290",
      "License of API",
      "/"//API license URL"
    );
    return apiInfo;
}
}

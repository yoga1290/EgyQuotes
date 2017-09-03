package videoquotes.api;

import static com.google.common.collect.Lists.newArrayList;
import io.swagger.annotations.Contact;
import io.swagger.annotations.ExternalDocs;
import io.swagger.annotations.Info;
import io.swagger.annotations.License;
import io.swagger.annotations.SwaggerDefinition;
import java.util.Arrays;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.annotations.ApiIgnore;
import springfox.documentation.builders.ImplicitGrantBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import static springfox.documentation.builders.PathSelectors.ant;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.GrantType;
import springfox.documentation.service.LoginEndpoint;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *
 * @author yoga1290
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public Docket VideoQuotesApi() {                
	return new Docket(DocumentationType.SWAGGER_2)
			.ignoredParameterTypes(ApiIgnore.class) //https://github.com/springfox/springfox/issues/1346#issuecomment-226948400
	  .select()
	  .apis(RequestHandlerSelectors.basePackage(SwaggerConfiguration.class.getPackage().getName()))
	  .paths(PathSelectors.any())
	  .build()
	  .securityContexts(Arrays.asList(securityContext()))
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
                .forPaths(ant("/**"))//ant("/api/pet.*"))
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
	return new SecurityConfiguration(null, null, null, null, null, ApiKeyVehicle.HEADER, null, null);
//        return new SecurityConfiguration("swagger", "", "pets", "swagger", "swagger", ApiKeyVehicle.HEADER, "access_token", ",");
    }
    
    List<GrantType> grantTypes() {
	//TODO: Add Authorization option to Swagger
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

//@SwaggerDefinition(
//        info = @Info(
//                description = "My API",
//                version = "V1.2.3",
//                title = "The only API you'll ever need to learn about me",
//                termsOfService = "share and care",
//                contact = @Contact(name = "Sponge-Bob", email = "sponge-bob@swagger.io", url = "http://swagger.io"),
//                license = @License(name = "Apache 2.0", url = "http://www.apache.org")

//        consumes = {"application/json" },
//        produces = {"application/json" },
//        schemes = {SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS},
//        externalDocs = @ExternalDocs(value = "About me", url = "http://about.me/me")
//)
//class MyApiDefinition implements ReaderListener {
//
//} 
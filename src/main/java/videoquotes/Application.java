package videoquotes;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
@PropertySource("videoquotes.properties")
@PropertySource("oauth2server.properties")
public class Application {
    public static void main(String[] args) {	
	
        ApplicationContext ctx = SpringApplication.run(Application.class, args);
    }

    // https://spring.io/guides/gs/rest-service-cors/
    @Value("${videoquotes.origins}")
    String ORIGINS;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins(ORIGINS.split(","));
            }
        };
    }

}

package videoquotes;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.PropertySource;


@SpringBootApplication
@PropertySource("videoquotes.properties")
@PropertySource("file:oauth2server.properties")
public class Application {
    public static void main(String[] args) {	
	
        ApplicationContext ctx = SpringApplication.run(Application.class, args);
    }

}

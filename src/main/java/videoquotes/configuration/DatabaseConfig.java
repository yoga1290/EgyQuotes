package videoquotes.configuration;

import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by yoga1290 on 1/27/18.
 */
@Configuration
//@EnableJpaRepositories(basePackages = "videoquotes.repository.jpa")
@EnableMongoRepositories(basePackages = "videoquotes.repository.mongo")
public class DatabaseConfig {
}

package videoquotes.repository;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = {"videoquotes.repositories.mongo"})
public class MongoRepoConfig {

}

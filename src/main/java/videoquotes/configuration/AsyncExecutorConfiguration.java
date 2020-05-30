package videoquotes.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import java.util.concurrent.Executor;

// https://spring.io/guides/gs/async-method
@Configuration
@EnableAsync
@EnableScheduling
public class AsyncExecutorConfiguration {
	@Bean
	public Executor asyncExecutor() {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(2);
		executor.setMaxPoolSize(2);
		executor.setQueueCapacity(500);
		executor.setThreadNamePrefix("VideoQuotes-");
		executor.initialize();
		return executor;
	}
}

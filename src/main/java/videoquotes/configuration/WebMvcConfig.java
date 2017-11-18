package videoquotes.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

/**
 * Created by yoga1290 on 11/14/17.
 */

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

//	@Autowired
//	private ResourceProperties resourceProperties = new ResourceProperties();

	@Value("${videoquotes.assets:}")
	private String assets;

	@Value("${videoquotes.cachePeriod:}")
	private Integer cachePeriod;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

//		Integer cachePeriod = resourceProperties.getCachePeriod();
//		registry.addResourceHandler(assets.split(","))
//				.addResourceLocations("/**")
//				.setCachePeriod(cachePeriod);

		registry.addResourceHandler("/q/**", "/v/**", "/query/**")
				.addResourceLocations("/index.html")
				.setCachePeriod(cachePeriod).resourceChain(true)
				.addResolver(new PathResourceResolver() {
					@Override
					protected Resource getResource(String resourcePath,
												   Resource location) throws IOException {
						return location.exists() && location.isReadable() ? location
								: null;
					}
				});
	}
}
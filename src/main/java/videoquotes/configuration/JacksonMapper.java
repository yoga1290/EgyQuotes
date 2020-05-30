package videoquotes.configuration;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * Created by yoga1290 on 10/16/17.
 */
//@Configuration
public class JacksonMapper {//extends ObjectMapper {

//	@Bean
//	public ObjectMapper objectMapper() {
//		ObjectMapper objectMapper = new ObjectMapper();
//		objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NULL_CREATOR_PROPERTIES, false);
//		objectMapper.configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES, false);
//		return objectMapper;
//	}
}

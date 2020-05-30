package videoquotes.model;

import java.util.Date;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.MappedSuperclass;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;

/**
 *
 * @author yoga1290
 */
//@MappedSuperclass
// @Entity
@Document
public class BasicRecord {

	public interface PUT {}
	public interface POST {}
	public interface DELETE {}
	// http://beanvalidation.org/latest-draft/spec/#validationapi-constraintviolation-examples
	public static void validate(BasicRecord record, Class... group) {
		Set<ConstraintViolation<BasicRecord>> errors = Validation.buildDefaultValidatorFactory().getValidator().validate(record, group);
		String message = "";
		for(ConstraintViolation<BasicRecord> error : errors) {
			message += error.getPropertyPath().toString() + " " + error.getMessage() + ", ";
		}
		if( errors.size() > 0) {
			throw new RuntimeException(message);
		}
	}
	public void validate(Class... group) {
		Set<ConstraintViolation<BasicRecord>> errors = Validation.buildDefaultValidatorFactory().getValidator().validate(this, group);
		String message = "";
		for(ConstraintViolation<BasicRecord> error : errors) {
			message += error.getPropertyPath().toString() + " " + error.getMessage() + ", ";
		}
		if( errors.size() > 0) {
			throw new RuntimeException(message);
		}
	}

	@Id
	@GeneratedValue()
    private @Getter @Setter String id;
    private @Getter @Setter Date creationTime;
    private @Getter @Setter String creatorId;
    private @Getter @Setter boolean isDeleted;
    
    public BasicRecord() {
		this.creationTime = new Date();

		try {
			if (SecurityContextHolder.getContext().getAuthentication() != null) {
				this.creatorId = SecurityContextHolder.getContext().getAuthentication().getName();
			}
		} catch(Exception e){}
    }
}

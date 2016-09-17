package videoquotes.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author yoga1290
 */
@ControllerAdvice
public class ControllerAdviceHandler {
    
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(AccessExpired.class)
    public void AccessExpired(){}
    
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public void IllegalArgumentException(){}
}

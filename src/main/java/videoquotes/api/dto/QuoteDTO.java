package videoquotes.api.dto;

import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;


/**
 *
 * @author yoga1290
 */
@Data
public class QuoteDTO {
    
    private @NotNull int start;
    private @NotNull int end;
    private @NotEmpty String quote;
    private @NotEmpty String personId;
    private @NotEmpty String videoId; 
}

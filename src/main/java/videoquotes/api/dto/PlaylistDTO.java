package videoquotes.api.dto;

import java.util.List;
import lombok.Data;
import videoquotes.model.Quote;

/**
 *
 * @author yoga1290
 */
@Data
public class PlaylistDTO {
    
    String name;
    List<Quote> quotes;
}

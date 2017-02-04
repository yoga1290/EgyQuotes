package videoquotes.api.dto;

import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import videoquotes.model.Quote;

/**
 *
 * @author yoga1290
 */
@Data
public class PlaylistDTO {

    String name;
    List<String> quotes;
}

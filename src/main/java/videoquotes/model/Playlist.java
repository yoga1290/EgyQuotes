package videoquotes.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 *
 * @author yoga1290
 */
@NoArgsConstructor
//@AllArgsConstructor
public class Playlist extends BasicRecord {

    @Getter @Setter
    private String name;

    @Getter @Setter
    private boolean isPublic;

    @Getter @Setter
    private List<String> quotes;
    
}

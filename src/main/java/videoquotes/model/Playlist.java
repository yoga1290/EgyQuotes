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
@AllArgsConstructor
public class Playlist extends BasicRecord {

    @Getter @Setter
    private String name;

    @Getter @Setter
    private boolean isPublic;
    
    @DBRef
    @Getter @Setter
    private List<Quote> quotes;

    public Playlist(String name, List<Quote> quotes) {
        this.name = name;
        this.quotes = quotes;
        this.isPublic = false;
    }
    
}

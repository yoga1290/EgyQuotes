package videoquotes.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author yoga1290
 */
@NoArgsConstructor
//@AllArgsConstructor
public class Playlist extends BasicRecord {

    @Size(min = 3, groups = {POST.class})
    @NotEmpty(groups = {POST.class})
    @NotNull(groups = {POST.class})
    @Getter @Setter
    private String name;

    @Getter @Setter
    private boolean isPublic;

    @Size(min = 1, groups = {POST.class})
    @Getter @Setter
    private List<String> quotes;
    
}

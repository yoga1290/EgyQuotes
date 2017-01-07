package videoquotes.model;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 *
 * @author yoga1290
 */
@Document
public class User extends BasicRecord {
    
    private @Getter @Setter String name;
    private @Getter @Setter String email;
    private @Getter @Setter String facebookId;
    private @Getter @Setter boolean enabled;
    private @Getter @Setter boolean accountNonExpired;
    private @Getter @Setter boolean accountNonLocked;
//    private @Getter @Setter boolean credentialsNonExpired;
    private @Getter @Setter List<String> grantedAuthorities;

}

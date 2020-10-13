package videoquotes.security.authorizationserver;

import org.springframework.security.core.GrantedAuthority;

/**
 *
 * @author yoga1290
 */
public class GrantedAuthorityImpl implements GrantedAuthority {
    private String authority;
    public GrantedAuthorityImpl(String authority) {
	this.authority = authority;
    }
    @Override
    public String getAuthority() {
	return authority;
    }
}
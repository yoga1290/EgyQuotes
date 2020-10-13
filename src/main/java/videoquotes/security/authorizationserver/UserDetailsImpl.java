package videoquotes.security.authorizationserver;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import videoquotes.model.User;

/**
 *
 * @author yoga1290
 */
public class UserDetailsImpl implements UserDetails {

	private User user;

	public UserDetailsImpl(User user) {
	    this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
	    Iterator<String> it = user.getGrantedAuthorities().iterator();
	    LinkedList<GrantedAuthority> result = new LinkedList<>();
	    while(it.hasNext()) {
		result.add(new GrantedAuthorityImpl(it.next()));
	    }
	    return result;
	}

	@Override
	public String getPassword() {
	    return "";
	}

	@Override
	public String getUsername() {
	    return user.getId()+"";
	}

	@Override
	public boolean isAccountNonExpired() {
	    return user.isAccountNonExpired();
	}

	@Override
	public boolean isAccountNonLocked() {
	    return user.isAccountNonLocked();
	}

	@Override
	public boolean isCredentialsNonExpired() {
	    return true;
	}

	@Override
	public boolean isEnabled() {
	    return user.isEnabled();
	}
    }
package videoquotes.config;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import videoquotes.model.User;
import videoquotes.model.repository.UserRepository;
import videoquotes.util.FacebookUtil;

/**
 *
 * @author yoga1290
 */
@Configuration
public class UserDetailsSvc implements UserDetailsService {

    @Value("${credentials.admin}")
    String ADMIN_USER_ID;
    
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	//TODO: findUserDetailsByUsername()
	//TODO: findUserDetailsByFacebookToken()
	//TODO: findUserDetailsByGoogleToken()
	if (username.indexOf("fb:") == 0) {
	    return findUserDetailsByFacebookAccessToken(username.substring(3));
	}
	return findUserDetailsByUsername(username);
    }

    private UserDetails findUserDetailsByFacebookAccessToken(String accessToken) {
	String facebookId = FacebookUtil.getFacebookId(accessToken);
	User user = userRepository.findByFacebookId(facebookId);
	if (user == null) {
	    user = new User();
	    user.setFacebookId(facebookId);
	    user.setEnabled(true);
      user.setAccountNonExpired(true);
      user.setAccountNonLocked(true);
	    List<String> authority = new LinkedList<>();
	    authority.add("ROLE_USER");
	    if (facebookId.equals(ADMIN_USER_ID)) {
		authority.add("ROLE_ADMIN");
	    }
	    user.setGrantedAuthorities(authority);
	    userRepository.save(user);
	}
	return new user2UserDetails(user);
    }

    private UserDetails findUserDetailsByUsername(String username) {
	User user = userRepository.findByName(username);
	if (user !=  null) {
	    return new user2UserDetails(user);
	} else {
	    throw new UsernameNotFoundException("user does not exists");
	}
    }

    class user2UserDetails implements UserDetails {

	private User user;

	public user2UserDetails(User user) {
	    this.user = user;
	}

	class GrantedAuthorityString implements GrantedAuthority {
	    private String authority;
	    public GrantedAuthorityString(String authority) {
		this.authority = authority;
	    }
	    @Override
	    public String getAuthority() {
		return authority;
	    }
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
	    Iterator<String> it = user.getGrantedAuthorities().iterator();
	    LinkedList<GrantedAuthority> result = new LinkedList<>();
	    while(it.hasNext()) {
		result.add(new GrantedAuthorityString(it.next()));
	    }
	    return result;
	}

	@Override
	public String getPassword() {
	    return "";
	}

	@Override
	public String getUsername() {
	    return user.getId();
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

}

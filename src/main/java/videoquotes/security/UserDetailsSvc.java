package videoquotes.security;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import videoquotes.model.User;
import videoquotes.repository.mongo.UserRepository;
import videoquotes.util.FacebookUtil;

/**
 *
 * @author yoga1290
 */
@Configuration
public class UserDetailsSvc implements UserDetailsService {

    @Value("${videoquotes.admin}")
    String ADMIN_USER_ID;
    
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	//TODO: findUserDetailsByUsername()
	//TODO: findUserDetailsByFacebookToken()
	//TODO: findUserDetailsByGoogleToken()
 /*
		User testUser=new User();
		testUser.setEnabled(true);
		testUser.setName(username);
		testUser.setAccountNonLocked(true);
		testUser.setAccountNonLocked(true);
		testUser.setAccountNonExpired(true);
		testUser.setGrantedAuthorities(Arrays.asList("ROLE_USER"));

		return new UserDetailsImpl(testUser); //*/
//*/
	System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n loadUserByUsername:" + username + "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	if (username.indexOf("fb:") == 0) {
	    return findUserDetailsByFacebookAccessToken(username.substring(3));
	}
	if (username.indexOf("g:") == 0) {
	    return findUserDetailsByGoogleAccessToken(username.substring(3));
	}
	return findUserDetailsByUsername(username);//*/
    }

    private UserDetails findUserDetailsByFacebookAccessToken(String accessToken) {
	System.out.println("\n\n\n\n\n\n\n\n\n\n findUserDetailsByFacebookAccessToken");
	String facebookId = FacebookUtil.getFacebookId(accessToken);
	User user = userRepository.findOneByFacebookId(facebookId);
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
	return new UserDetailsImpl(user);
    }
    
    private UserDetails findUserDetailsByGoogleAccessToken(String accessToken) {
	System.out.println("\n\n\n\n\n\n\n\n\n\n findUserDetailsByFacebookAccessToken");
	String facebookId = FacebookUtil.getFacebookId(accessToken);
	User user = userRepository.findOneByFacebookId(facebookId);
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
	return new UserDetailsImpl(user);
    }

    private UserDetails findUserDetailsByUsername(String username) {
	System.out.println("\n\n\n\n\n\n\n\n\n\n findUserDetailsByUsername");
	User user = userRepository.findOneByName(username);
	if (user !=  null) {
	    return new UserDetailsImpl(user);
	} else {
	    throw new UsernameNotFoundException("user does not exists");
	}
    }
}

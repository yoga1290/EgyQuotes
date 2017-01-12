package videoquotes.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.User;
import videoquotes.repository.mongo.UserRepository;
import videoquotes.util.FacebookUtil;

import java.security.Principal;


@Controller
@RequestMapping("/user")
public class UserApi
{

	@Autowired
	UserRepository users;

	@Autowired
	FacebookUtil facebookUtil;

	@Secured({"ROLE_USER"})
	@RequestMapping("")
	public @ResponseBody User info(Principal u) {
		return users.findOne(u.getName());
	}


	@Secured({"ROLE_USER"})
	@RequestMapping(value = "/picture", produces = MediaType.TEXT_PLAIN_VALUE)
	public @ResponseBody String picture(Principal u) {
		User user = users.findOne(u.getName());
		if (user.getFacebookId().length() > 0) {
			return facebookUtil.getProfilePicture(user.getFacebookId());
		}
		//TODO: no profile picture?
		return "/error";
	}

}
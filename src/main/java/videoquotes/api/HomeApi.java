package videoquotes.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.BasicRecord;
import videoquotes.util.YoutubeUtil;
import java.security.Principal;
import org.springframework.security.access.annotation.Secured;


@Controller
public class HomeApi
{

  // @Secured({})
  @RequestMapping("/")
  public String index() {
     return "/index.html";
  }

  // @Secured({"ROLE_ANONYMOUS"})
  // @RequestMapping("/")
  // public String index2() {
  //    return "/index.html";
  // }

  @Secured({"ROLE_USER"})
  @RequestMapping("/user")
  public @ResponseBody Principal user(Principal u) {
     return u;
  }

  @RequestMapping("/anonymous")
  public @ResponseBody Principal anonymous(Principal u) {
     return u;
  }

}

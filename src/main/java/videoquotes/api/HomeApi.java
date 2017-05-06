package videoquotes.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.BasicRecord;
import videoquotes.model.Quote;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.util.YoutubeUtil;
import java.security.Principal;
import org.springframework.security.access.annotation.Secured;

import javax.servlet.http.HttpServletResponse;


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

  @RequestMapping("/anonymous")
  public @ResponseBody Principal anonymous(Principal u) {
     return u;
  }


    @Autowired
    QuoteRepository quoteRepository;

    @Autowired
    YoutubeUtil youtubeUtil;

    @Value("${videoquotes.baseUrl}")
    String BASE_URL;

    @Value("${videoquotes.oauth.facebook.appId}")
    String APP_ID;
    @RequestMapping(value = "/#/quote/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "find Quote by id", notes = "find Quote by id")
    public @ResponseBody String findOne(
            HttpServletResponse response,
            @PathVariable String id) {
        Quote quote = quoteRepository.findOne(id);
        String logo = youtubeUtil.getVideoPreview( quote.getVideo().getId() );
        // see https://developers.facebook.com/docs/sharing/webmasters#markup
        return "<html prefix=\"og: http://ogp.me/ns#\"><head>\n"+
                "<link rel=\"opengraph\" href=\"" + BASE_URL + "/#/quote/" + id + "\"/>" +

                "<meta property=\"og:type\"               content=\"article\" />\n" +
                "<meta property=\"fb:app_id\"               content=\"" + APP_ID + "\" />\n" +
                "<meta property=\"og:image:width\"               content=\"480\" />\n" +
                "<meta property=\"og:image:height\"               content=\"360\" />\n" +
                "<meta property=\"og:title\"              content=\"" + quote.getQuote() + "\" />\n" +
                "<meta property=\"og:description\"        content=\"" + quote.getPerson().getName() + "\" />\n" +
                "<meta property=\"og:image\"              content=\"" + logo + "\" />\n" +
                "</head><body><script>window.location.href = '" + BASE_URL + "/#/quote/" + id + "'; </script></body></html>";
    }

}

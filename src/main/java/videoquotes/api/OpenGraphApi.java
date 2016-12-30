package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import videoquotes.model.Quote;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.util.YoutubeUtil;

import javax.servlet.http.HttpServletResponse;


@Controller
@Api(value = "Open Graph", description = "Open Graph", tags = "Open Graph")
@RequestMapping(value = "/og", produces=MediaType.TEXT_HTML_VALUE)
public class OpenGraphApi
{
    @Autowired
    QuoteRepository quoteRepository;

	@Autowired
	YoutubeUtil youtubeUtil;

	@Value("${videoquotes.oauth.facebook.appId}")
	String APP_ID;

    @RequestMapping(value = "/q/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "find Quote by id", notes = "find Quote by id")
    public @ResponseBody String findOne(
    		HttpServletResponse response,
	    @PathVariable String id) {
		Quote quote = quoteRepository.findOne(id);
		String logo = youtubeUtil.getVideoPreview( quote.getVideo().getId() );
		// see https://developers.facebook.com/docs/sharing/webmasters#markup
		return "<html prefix=\"og: http://ogp.me/ns#\"><head>\n"+
				"<link rel=\"opengraph\" href=\"https://videoquotes.herokuapp.com/#/quote/" + id + "\"/>" +

				"<meta property=\"og:type\"               content=\"article\" />\n" +
				"<meta property=\"fb:app_id\"               content=\"" + APP_ID + "\" />\n" +
				"<meta property=\"og:image:width\"               content=\"480\" />\n" +
				"<meta property=\"og:image:height\"               content=\"360\" />\n" +
				"<meta property=\"og:title\"              content=\"" + quote.getQuote() + "\" />\n" +
				"<meta property=\"og:description\"        content=\"" + quote.getPerson().getName() + "\" />\n" +
				"<meta property=\"og:image\"              content=\"" + logo + "\" />\n" +
				"</head><body><script>window.location.href = 'https://videoquotes.herokuapp.com/#/quote/" + id + "'; </script></body></html>";
    }

}

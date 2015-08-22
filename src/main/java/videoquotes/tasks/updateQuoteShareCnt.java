/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.tasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.util.*;

/**
 *
 * @author yoga1290
 */
@Controller
public class updateQuoteShareCnt {
    @Autowired
    private FacebookUtil facebook;
    
    @Autowired
    private YoutubeUtil youtube;
    
    @RequestMapping(value = "/yttest",method = RequestMethod.GET)
    public @ResponseBody String updateQuoteShareCnt(@RequestParam String id)
    {
        return youtube.getChannelId(id);
    }
}

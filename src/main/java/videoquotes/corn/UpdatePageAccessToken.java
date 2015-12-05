/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.corn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import videoquotes.util.FacebookUtil;

/**
 *
 * @author yoga1290
 */
@Controller
public class UpdatePageAccessToken {

    @Autowired
    private FacebookUtil facebook;

    @RequestMapping(value = "/cron/updatePageAccessToken")
    private void updatePageAccessToken(){
	facebook.refreshPageToken();
    }
}

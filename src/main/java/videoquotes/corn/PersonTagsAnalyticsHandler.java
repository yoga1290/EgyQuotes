/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.corn;

import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import videoquotes.repository.FacebookPost;
import videoquotes.repository.FacebookPostRepository;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.PersonTagsAnalytics;
import videoquotes.repository.PersonTagsAnalyticsRepository;
import videoquotes.repository.Quote;
import videoquotes.repository.QuoteRepository;
import videoquotes.repository.Tag;
import videoquotes.repository.TagRepository;
import videoquotes.util.FacebookUtil;

/**
 *
 * @author yoga1290
 */
@Controller
public class PersonTagsAnalyticsHandler {

    @Autowired
    private PersonTagsAnalyticsRepository analytics;
    @Autowired
    private TagRepository tags;
    @Autowired
    private QuoteRepository quotes;
    @Autowired
    private PersonRepository people;
 
    @RequestMapping(value = "/cron/updatePersonTagAnalytics")
    private void updatePersonTag(){
	Collection<PersonTagsAnalytics> anlyt= analytics.findByNeedSync(0, 1);
	Iterator<PersonTagsAnalytics> personTagsAnalytics= anlyt.iterator();
	while(personTagsAnalytics.hasNext())
	{
	    
	    PersonTagsAnalytics data=personTagsAnalytics.next();
	    
	    String personId = people.findByName(data.getPerson()).iterator().next().getKey();
	    Iterator<Quote> iQuotes= quotes.findByPersonId(personId).iterator();
	    
	    int v =0;
	    while(iQuotes.hasNext()) {
		Quote quote= iQuotes.next();
		v += tags.findByTagAndQuoteId(data.getTag(),quote.getKey()).size();
	    }
	    data.setValue(v);
	    data.setLastSync(new Date().getTime());
	    
	    if(data.getValue()<=0) //no analytics for removed tags
		analytics.delete(data);
	    else
		analytics.update(data);
	}
    }
    
    //TODO:
    @RequestMapping(value = "/cron/updatePersonTags")
    private void updatePersonTags(){
	Collection<PersonTagsAnalytics> anlyt= analytics.findByNeedSync(0, 1);
	Iterator<PersonTagsAnalytics> personTagsAnalytics= anlyt.iterator();
	while(personTagsAnalytics.hasNext())
	{
	    
	    PersonTagsAnalytics data=personTagsAnalytics.next();
	    
	    String personId = people.findByName(data.getPerson()).iterator().next().getKey();
	    Iterator<Quote> iQuotes= quotes.findByPersonId(personId).iterator();
	    
	    int v =0;
	    while(iQuotes.hasNext()) {
		Quote quote= iQuotes.next();
		v += tags.findByTagAndQuoteId(data.getTag(),quote.getKey()).size();
	    }
	    data.setValue(v);
	    data.setLastSync(new Date().getTime());
	    
	    if(data.getValue()<=0) //no analytics for removed tags
		analytics.delete(data);
	    else
		analytics.update(data);
	}
    }
    
}

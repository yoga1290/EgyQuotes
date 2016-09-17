package videoquotes.model.repository;

import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.api.dto.SearchDTO;
import videoquotes.model.Quote;
import videoquotes.model.Video;

/**
 *
 * @author yoga1290
 */
@Service
public class QuoteRepository extends BasicRecordRepository<Quote> {
    
    @Autowired
    VideoRepository videoRepository;
    @Autowired
    TagRepository tagRepository;
    @Autowired
    QuoteOwnerRepository quoteOwnerRepository;
    
    public QuoteRepository() {
	super(Quote.class);
    }
    
    public void insert(Quote quote) {
	//TODO:
//	quote.setPersonId(null);
	
	save(quote);
	quoteOwnerRepository.insertOwner(quote, null); //TODO:
	videoRepository.updateOrInsertVideoRecord(quote);
    }
    
    public long countByChannelId(String channelId) {
	return count(new Query(Criteria.where("channelId").is(channelId)));
    }
    
    public List<Quote> findByTagsAndPersonId(List<String> tags, List<String> personIds, int offset, int limit) {
	Query query = new Query();
	
	if(tags.size()>0 || tags.size()>0) {
	    List<String> quoteIds = tagRepository.findQuoteIdByTag(tags, offset, limit);
	    query.addCriteria(new Criteria().orOperator(		Criteria.where("id").in(quoteIds),
		Criteria.where("personId").in(personIds)));
	}
	List<Quote> result = find(query, offset, limit);
	System.out.println(Arrays.toString(result.toArray()));
	return result;
    }
    
    
    public List<Quote> search(SearchDTO q) {
	// a < b < c < d
	
	// Tag: tag,quoteId, ChannelId, @personId, airTime
	Query query = new Query();
	int offsets[] = q.getOffsets();
	List<String> quoteIds = new LinkedList<String>();
	List<String> videoIds = new LinkedList<String>();
	
	if (q.getChannelIds().size() > 0) {
	    // VideoIds based on given Channel & Time:
	    // +personId
	    Iterator<Video> itVideo = videoRepository.findByChannelIdsWithinTime(
							    q.getChannelIds(),
							    q.getStart(), 
							    q.getEnd(), 
							    offsets[1], 
							    q.getLimit())
							.iterator();
	    
	    while(itVideo.hasNext()) {
		Video video = itVideo.next();
		// + channelId
		quoteIds.addAll(
			tagRepository.findQuoteIdByQuoteIdAndTag(video.getQuotes(), q.getTags(), q.getOffsets()[0], q.getLimit())
		);
		// might not be from the selected channels
		videoIds.add(video.getVideoId());
	    }
	} else {
		if (offsets[1] == 0)
		quoteIds.addAll(
		    tagRepository
			.findQuoteIdByTag(
			    q.getTags(),
			    offsets[0],
			    q.getLimit())
		);
	}
	
	
	if (quoteIds.size()>0)
	    query.addCriteria(Criteria.where("id").in(quoteIds));
	if (videoIds.size()>0)
	    query.addCriteria(Criteria.where("videoId").in(videoIds));
	
	
	
	
	// if no results & offsets[0] has reached the end (since offset[i>0] >0 ); return empty set:
	if (quoteIds.size()==0 && (offsets[1]>0 || offsets[2]>0)) {
	    return new LinkedList<Quote>();
	}
	// if no result; use the 1st offset only:
	else if (quoteIds.size()==0) {
	    offsets[2] = offsets[0];
	}

	
	
	
	if (q.getPersonIds().size()>0)
	    query.addCriteria(Criteria.where("personId").in(q.getPersonIds()));
	return find(query, offsets[2], q.getLimit());
    }
    
    public long countByTagsAndPersonId(List<String> tags, List<String> personIds, int offset, int limit) {
	List<String> quoteIds = tagRepository.findQuoteIdByTag(tags, offset, limit);
	Query query = new Query();
	query.addCriteria(Criteria.where("personId").in(personIds));
	query.addCriteria(Criteria.where("id").in(quoteIds));
	return count(query);
    }
}

package videoquotes.model;

import java.util.LinkedList;
import java.util.List;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
public class Video extends BasicRecord {

	@Id
	private @Getter @Setter String videoId;
	
	private @Getter @Setter List<Integer> start;
	
	private @Getter @Setter List<Integer> end;
	
	private @Getter @Setter List<String> quotes;
	
	private @Getter @Setter String channelId;
	
	private @Getter @Setter long time;

	public Video(){
	    start = new LinkedList<Integer>();
	    end = new LinkedList<Integer>();
	    quotes = new LinkedList<String>();
	}
	
	public Video(String videoId,String channelId,List<String> quotes,List<Integer> start,List<Integer> end){
	    this.setId(videoId);
	    this.videoId = videoId;
	    this.channelId = channelId;
	    this.quotes=quotes;
	    this.start=start;
	    this.end=end;
//		this.segments = segments;//Arrays.asList(segments);
	}
	public Video(String videoId,long time,String channelId,List<String> quotes,List<Integer> start,List<Integer> end){
	    this.setId(videoId);
	    this.videoId = videoId;
	    this.channelId = channelId;
	    this.quotes=quotes;
	    this.start=start;
	    this.end=end;
	    this.time = time;
//		this.segments = segments;//Arrays.asList(segments);
	}
}
		
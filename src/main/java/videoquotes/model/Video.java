package videoquotes.model;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


//@Entity
@Document
public class Video extends BasicRecord {

//	@Id
    //TODO: useless field now?
	@NotEmpty(groups = {POST.class, PUT.class})
	@NotNull(groups = {POST.class, PUT.class})
	@Size(min = 3, groups = {POST.class, PUT.class})
	@Override
	public String getId() {
		return super.getId();
	}

	private @Getter @Setter List<Integer> start;

	private @Getter @Setter List<Integer> end;

	private @Getter @Setter List<String> quotes;

	private @Getter @Setter String channelId;

	private @Getter @Setter Date time;

	private @Getter @Setter String previewImage;

	public Video() {
	    start = new LinkedList<Integer>();
	    end = new LinkedList<Integer>();
	    quotes = new LinkedList<String>();
	}
	
	public Video(String videoId,String channelId,List<String> quotes,List<Integer> start,List<Integer> end){
	    this.setId(videoId);
//	    this.videoId = videoId;
	    this.channelId = channelId;
	    this.quotes=quotes;
	    this.start=start;
	    this.end=end;
//		this.segments = segments;//Arrays.asList(segments);
	}
	public Video(String videoId,Date time,String channelId,List<String> quotes,List<Integer> start,List<Integer> end){
	    this.setId(videoId);
//	    this.videoId = videoId;
	    this.channelId = channelId;
	    this.quotes=quotes;
	    this.start=start;
	    this.end=end;
	    this.time = time;
//		this.segments = segments;//Arrays.asList(segments);
	}
}
		
package videoquotes.api.dto;

import java.util.List;
import lombok.Data;
/**
 *
 * @author yoga1290
 */
@Data
public class SearchDTO {
    
    public List<String> tags;
    public List<String> personIds;
    public List<String> channelIds;
    public long start;
    public long end;
    public int size;
    public int page;
    
}

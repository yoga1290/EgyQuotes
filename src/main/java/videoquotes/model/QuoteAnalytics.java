package videoquotes.model;
import java.util.Objects;


import org.springframework.data.mongodb.core.mapping.Document;


public class QuoteAnalytics extends BasicRecord {

    private Long likes;
    private Long shares;
    private Long lastSync;

}

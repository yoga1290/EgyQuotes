package videoquotes.repository.jpa;

import org.springframework.context.annotation.Profile;
import videoquotes.model.BasicRecord;

@Profile("jpa")
public interface BasicRecordRepository<T extends BasicRecord> {//extends PagingAndSortingRepository<T, String> {

}

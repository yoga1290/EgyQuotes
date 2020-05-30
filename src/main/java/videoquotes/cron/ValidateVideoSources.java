package videoquotes.cron;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import videoquotes.model.Quote;
import videoquotes.model.Video;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.repository.mongo.VideoRepository;
import videoquotes.util.YoutubeUtil;

import java.util.Date;
import java.util.Iterator;

/**
 * Created by yoga1290 on 3/17/18.
 */
@Component
public class ValidateVideoSources {

	@Autowired
	QuoteRepository quoteRepository;

	@Autowired
	VideoRepository videoRepository;

	@Autowired
	YoutubeUtil youtubeUtil;

	public static int lastCnt = 7; //0;

	@Scheduled(fixedDelay =  60 * 60 * 1000)
	public void validate() {

		final int page = lastCnt++;
		System.out.println("ValidateVideoSources:" + page);
		Iterator<Video> videoIt = videoRepository.findAll(new Pageable() {
			@Override
			public int getPageNumber() {
				return page;
			}

			@Override
			public int getPageSize() {
				return 1;
			}

			@Override
			public long getOffset() {
				return page;
			}

			@Override
			public Sort getSort() {
				return null;
			}

			@Override
			public Pageable next() {
				return null;
			}

			@Override
			public Pageable previousOrFirst() {
				return null;
			}

			@Override
			public Pageable first() {
				return null;
			}

			@Override
			public boolean hasPrevious() {
				return false;
			}
		}).iterator();


		while (videoIt.hasNext()) {
			Video video = videoIt.next();
			System.out.println("ValidateVideoSources checking video#" + video.getId());
			try {
				youtubeUtil.getVideoPreview(video.getId());

				markQuoteDeletedByVideoId(video.getId(), false);
				video.setDeleted(false);
			} catch(Exception e) {
				System.err.println("Video#" + video.getId() + " not found " + e.getLocalizedMessage());
				markQuoteDeletedByVideoId(video.getId(), true);
				video.setDeleted(true);
				videoRepository.save(video);

			}
		}
	}

	public void markQuoteDeletedByVideoId(String videoId, boolean delete) {
		Iterator<Quote> quoteIt = quoteRepository.findAllByVideoId(videoId).iterator();
		System.out.println("has quotes: "+ quoteIt.hasNext());
		while (quoteIt.hasNext()) {
			Quote quote = quoteIt.next();
			System.out.println("ValidateVideoSources marking quote#" + quote.getId() + " deleted="+ delete);
			quote.setDeleted(delete);
			quoteRepository.save(quote);
		}
	}
}

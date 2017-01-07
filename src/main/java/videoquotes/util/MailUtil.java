package videoquotes.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * Created by yoga1290 on 1/7/17.
 */
@Service
public class MailUtil {

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${videoquotes.baseUrl}")
	String BASE_URL;

	@Value("${spring.mail.username}")
	String SENDER;

	@Async
	public void send(String email, String accessToken) {
		MimeMessage mail = javaMailSender.createMimeMessage();
		try {
			Resource resource = new ClassPathResource("email_login.html");
			BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream()),1024);
			StringBuilder stringBuilder = new StringBuilder();
			String line;
			while ((line = br.readLine()) != null) {
				stringBuilder.append(line).append('\n');
			}
			br.close();
			String txt = stringBuilder.toString().replace("{{LOGIN_LINK}}", BASE_URL + "/?access_token=" + accessToken);

			MimeMessageHelper helper = new MimeMessageHelper(mail, true);
			helper.setTo(email);
			helper.setFrom(SENDER);
			helper.setSubject("VideoQuotes Login");
			helper.setText(txt, true);
			javaMailSender.send(mail);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

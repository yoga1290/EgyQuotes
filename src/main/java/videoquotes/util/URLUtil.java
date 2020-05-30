package videoquotes.util;

import okhttp3.*;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Component;

/**
 *
 * @author yoga1290
 */
@Component
public class URLUtil {
    
    public static String readText(String url)
    {
	try {
	    Request request = new Request.Builder()
		    .url(url)
		    .get()
		    .build();
	    
	    return new OkHttpClient().newCall(request).execute().body().string();
	} catch (IOException ex) {
	    Logger.getLogger(URLUtil.class.getName()).log(Level.SEVERE, null, ex);
	    return ex.getLocalizedMessage();
	}
    }
    
    
    public static String sendPost(String url,String data) throws Exception {
		 
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
 
		//add reuqest header
		con.setRequestMethod("POST");
 
 
		// Send post request
		con.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
		wr.writeBytes(data);
		wr.flush();
		wr.close();
 
		int responseCode = con.getResponseCode();
 
		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();
 
		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		return response.toString();
	}
}

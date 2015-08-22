/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import java.io.InputStream;
import java.net.HttpURLConnection;
import org.springframework.stereotype.Component;

/**
 *
 * @author yoga1290
 */
@Component
public class URLUtil {
    
    public static String readText(String uri)
	{
		String res="";
		try{
			java.net.URL url = new java.net.URL(uri);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			InputStream in=connection.getInputStream();
			byte buff[]=new byte[200];
			int ch;
			while((ch=in.read(buff))!=-1)
					res+=new String(buff,0,ch);
			in.close();
			
			return res;
		}catch(Exception e){return  e.getLocalizedMessage();}
	}
    
}

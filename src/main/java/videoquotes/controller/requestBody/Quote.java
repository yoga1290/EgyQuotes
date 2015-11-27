/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.controller.requestBody;

import java.util.List;
import java.util.Map;

/**
 *
 * @author yoga1290
 */
public class Quote {
    
    private double start;
    private double end;
    private String quote;
    private String personId;
    private String videoId;
    private String access_token;

    public double getStart() {
	return start;
    }

    public double getEnd() {
	return end;
    }

    public String getQuote() {
	return quote;
    }

    public String getPersonId() {
	return personId;
    }

    public String getAccess_token() {
	return access_token;
    }

    public void setStart(double start) {
	this.start = start;
    }

    public void setEnd(double end) {
	this.end = end;
    }

    public void setQuote(String quote) {
	this.quote = quote;
    }

    public void setPersonId(String personId) {
	this.personId = personId;
    }

    public void setAccess_token(String access_token) {
	this.access_token = access_token;
    }

    public String getVideoId() {
	return videoId;
    }

    public void setVideoId(String videoId) {
	this.videoId = videoId;
    }
    
    
}

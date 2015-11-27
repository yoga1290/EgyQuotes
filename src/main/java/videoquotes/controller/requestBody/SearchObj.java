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
public class SearchObj {
    
    public int offset;
    public int limit;
    public List<String> tags;
    public List<String> personIds;

    public int getOffset() {
	return offset;
    }

    public int getLimit() {
	return limit;
    }

    public List<String> getTags() {
	return tags;
    }

    public List<String> getPersonIds() {
	return personIds;
    }

    public void setOffset(int offset) {
	this.offset = offset;
    }

    public void setLimit(int limit) {
	this.limit = limit;
    }

    public void setTags(List<String> tags) {
	this.tags = tags;
    }

    public void setPersonIds(List<String> personIds) {
	this.personIds = personIds;
    }
    
    
    
}

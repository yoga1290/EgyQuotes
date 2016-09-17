/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model;

import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author yoga1290
 */
@Document
public class Person extends BasicRecord {
    
    private String name;

    public Person(String name) {
	this.name = name;
	while(name.indexOf(" ")>-1)
	    name=name.replace(" ","_");
	while(name.indexOf("أ")>-1)
	    name=name.replace("أ","ا");
	while(name.indexOf("إ")>-1)
	    name=name.replace("إ","ا");
	super.setId(name);
    }
    
    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }
}

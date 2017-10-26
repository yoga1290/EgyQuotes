/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author yoga1290
 */
@Document
public class Person extends BasicRecord {

	@Getter @Setter
	@NotEmpty(groups = {POST.class}, message = "invalid Person")
	@NotNull(groups = {POST.class}, message = "invalid Person")
	@Size(min = 3, groups = {POST.class, PUT.class})
    private String name;

	public Person() {}

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

}

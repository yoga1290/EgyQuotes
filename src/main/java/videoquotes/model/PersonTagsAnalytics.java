/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model;

/**
 *
 * @author yoga1290
 */

import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class PersonTagsAnalytics extends BasicRecord {
    private String person;
    private int value;
    private String tag;
}

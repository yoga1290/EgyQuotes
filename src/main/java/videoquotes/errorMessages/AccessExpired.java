/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.errorMessages;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author yoga1290
 */
@ResponseStatus(value=HttpStatus.FAILED_DEPENDENCY,reason ="Access Expired")
public class AccessExpired extends RuntimeException {
}

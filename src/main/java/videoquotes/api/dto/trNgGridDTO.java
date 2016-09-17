package videoquotes.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.Map;
import lombok.Data;

@Data
public class trNgGridDTO {
        private Map<String, String> filterByFields;
        private Map<String, String> mandatoryFilters;
          @JsonInclude
        private String orderBy;
          @JsonInclude
        private String orderByType;
        @JsonInclude
        private int currentPage;
        @JsonInclude
        private int pageItems;
        public trNgGridDTO() {
        }
        public trNgGridDTO(Map<String, String> filterByFields, String orderBy, String orderByType, int currentPage, int pageItems) {
            this.filterByFields = filterByFields;
            this.orderBy = orderBy;
            this.orderByType = orderByType;
            this.currentPage = currentPage;
            this.pageItems = pageItems;
        }
    }

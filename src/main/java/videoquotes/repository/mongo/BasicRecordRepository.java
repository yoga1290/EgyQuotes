package videoquotes.repository.mongo;

import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import videoquotes.model.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.api.dto.trNgGridDTO;

/**
 *
 * @author yoga1290
 */
public interface BasicRecordRepository<T extends BasicRecord> extends MongoRepository<T, String> {
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    T findById(String id);
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    @Override
    T findOne(String id);
}
//
//public class BasicRecordRepository<T extends BasicRecord> {
//    
//    @Autowired
//    private MongoTemplate mongoTemplate;
//    private Class<T> _type;
//    
//    public BasicRecordRepository(Class<T> _type) {
//	this._type = _type;
//    }
//    
//    public T findById(String id) {
//	return mongoTemplate.findOne(new Query().addCriteria(Criteria.where("id").is(id)), _type, _type.getSimpleName());
//    }
//    public T findOne(Query query) {
//	return mongoTemplate.findOne(query, _type, _type.getSimpleName());
//    }
//    
//    public List<T> find(Query query, int offset, int limit) {
//	return mongoTemplate.find(
//		query
//		.addCriteria(Criteria.where("isDeleted").is(false))
//		.skip(offset).limit(limit)
//		,_type, _type.getSimpleName());
//    }
//    
//    public long count(Query query) {
//	return mongoTemplate.count(query.addCriteria(Criteria.where("isDeleted").is(false)), _type, _type.getSimpleName());
//    }
//    
//    public T save(T record) {
//	
//	mongoTemplate.save(record, _type.getSimpleName());
//	return record;
//    }
//    
//    public JSONObject trNgGrid(trNgGridDTO q, Criteria mandatoryFields, boolean isASC, boolean isGlobal) {
//        Query query = new Query();
//
//        LinkedList<Criteria>  criterias=new LinkedList<Criteria>();
//        for (Map.Entry entry : q.getFilterByFields().entrySet()) {
//	    String values[] = ((String)entry.getValue()).split(",");
//		for (String value:values)
//		    criterias.add(Criteria.where((String)entry.getKey()).regex("^(" + value + ")"));
//	}
//        
//        //mandatoryCriterias send as part of the query:
//        LinkedList<Criteria>  mandatoryCriteriasList=new LinkedList<Criteria>();
//        for (Map.Entry entry : q.getMandatoryFilters().entrySet())
//                mandatoryCriteriasList.add(Criteria.where((String)entry.getKey()).regex("^("+entry.getValue()+")"));
//        Criteria mandatoryCriterias[]=new Criteria[mandatoryCriteriasList.size()];
//        mandatoryCriteriasList.toArray(mandatoryCriterias);
//        if(mandatoryCriterias.length>0)
//            query.addCriteria(new Criteria().andOperator(mandatoryCriterias));
//        
//        Criteria allCriterias[] = new Criteria[criterias.size()];
//        criterias.toArray(allCriterias);
//        
//        if(allCriterias.length>0)
//            if(isGlobal)
//                query.addCriteria(new Criteria().orOperator(allCriterias));
//            else
//                query.addCriteria(allCriterias[0].andOperator(allCriterias));
//        
//        // Server-side filters:
//        if(mandatoryFields!=null)
//            query.addCriteria(mandatoryFields);
//        
//        if(q.getOrderBy()!=null)
//            query.with(new Sort(isASC ? Sort.Direction.ASC:Sort.Direction.DESC, q.getOrderBy()));
//        long total = mongoTemplate.count(query, _type, _type.getSimpleName());
//        if(q.getCurrentPage()*q.getPageItems()<total)
//            query.skip(q.getCurrentPage()*q.getPageItems());
//        query.limit(q.getPageItems());
//        
//        List<T> data = (List<T>) mongoTemplate.find(query, _type, _type.getSimpleName());
//        
//        return new JSONObject()
//                    .put("total", total)
//                    .put("data", data );
//    }
//}

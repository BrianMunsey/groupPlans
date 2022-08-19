package personal.groupPlans.Repos;

import org.springframework.data.repository.CrudRepository;
import personal.groupPlans.Entities.Plans;

public interface PlanRepo extends CrudRepository <Plans, Long> {
    //honestly not entirely sure what the <Plans, Long> does
}

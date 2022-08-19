package personal.groupPlans.Controllers;

import org.springframework.web.bind.annotation.RestController;
import personal.groupPlans.Repos.PlanRepo;

@RestController
public class PlanController {

    private PlanRepo planRepo;
//    private UserRepository userRepo; will have running in future!

    public PlanController(PlanRepo planRepo) {
        this.planRepo = planRepo;
    }

    
}

package personal.groupPlans.Controllers;

import org.springframework.web.bind.annotation.*;
import personal.groupPlans.Entities.Plans;
import personal.groupPlans.Repos.PlanRepo;

@RestController
public class PlanController {

    private PlanRepo planRepo;
//    private UserRepository userRepo; will have running in future!

    public PlanController(PlanRepo planRepo) {
        this.planRepo = planRepo;
    }

    //Gets all the plans for the users
    @GetMapping("plans")
    public Iterable<Plans> getPlans() {
        return planRepo.findAll();
    }

    //Adding plans to the repo
    @PostMapping("addPlans")
    public Iterable<Plans> addPlans(@RequestBody Plans plans) {
        planRepo.save(plans);
        return planRepo.findAll();
    }

    //Deleting a specific plan that you don't want/need
    @DeleteMapping("removePlans/{id}")
    public Iterable<Plans> deletePlans(@PathVariable long id) {
        Plans plans = planRepo.findById(id).get();
        planRepo.delete(planRepo.findById(id).get());
        return planRepo.findAll();
    }
}

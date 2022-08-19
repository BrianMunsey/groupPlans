package personal.groupPlans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import personal.groupPlans.Entities.Plans;
import personal.groupPlans.Repos.PlanRepo;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    private PlanRepo planRepo;

    public Populator (PlanRepo planRepo) {
        this.planRepo = planRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Plans somethingNew = new Plans("some details", "some random date", "Some random name");

        planRepo.save(somethingNew);
    }
}

package personal.groupPlans.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Plans {

    @Id
    @GeneratedValue
    private long id;

    private String details;
    private String date;

    //WIP Just trying to get ideas going


    public Plans(String details, String date) {
        this.details = details;
        this.date = date;
    }
    //Don't include id because it is a generated value!


    public long getId() {
        return id;
    }

    public String getDetails() {
        return details;
    }

    public String getDate() {
        return date;
    }

    public void updateDetails(String newDetails) {
        this.details = newDetails;
    }

    public void updateDate(String newDate) {
        this.date = newDate;
    }
}

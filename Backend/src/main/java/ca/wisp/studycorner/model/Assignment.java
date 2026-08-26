package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;
import java.time.LocalDateTime;

@Entity
public class Assignment {
  private Integer _assignmentId;
  private String _assignmentName;
  private Float _assignmentWeight;
  private LocalDateTime _dueDate;

  public Assignment(String assignmentName, float assignmentWeight, LocalDateTime dueDate) {
    this._assignmentName = assignmentName;
    this._dueDate = dueDate;
  }

  public Assignment() {}

  public Integer getAssignmentId() {
    return _assignmentId;
  }

  public String getAssignmentName() {
    return _assignmentName;
  }

  public void setAssignmentName(String assignmentName) {
    this._assignmentName = assignmentName;
  }

  public Float getAssignmentWeight() {
    return _assignmentWeight;
  }

  public void setAssignmentWeight(Float assignmentWeight) {
    this._assignmentWeight = assignmentWeight;
  }

  public LocalDateTime getDueDate() {
    return _dueDate;
  }

  public void setDueDate(LocalDateTime dueDate) {
    this._dueDate = dueDate;
  }
}

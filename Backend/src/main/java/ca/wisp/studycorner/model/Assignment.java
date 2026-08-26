package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Assignment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer _assignmentId;

  private String _assignmentName;
  private Float _assignmentWeight;
  private Boolean _isCompleted;
  private LocalDateTime _dueDate;

  public Assignment(String assignmentName, float assignmentWeight, LocalDateTime dueDate) {
    this._assignmentName = assignmentName;
    // Set the completion status to false by default
    this._isCompleted = false;
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

  public Boolean getIsCompleted() {
    return _isCompleted;
  }

  public void setIsCompleted(Boolean isCompleted) {
    this._isCompleted = isCompleted;
  }

  public LocalDateTime getDueDate() {
    return _dueDate;
  }

  public void setDueDate(LocalDateTime dueDate) {
    this._dueDate = dueDate;
  }
}

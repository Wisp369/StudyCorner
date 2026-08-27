package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Assignment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer _assignmentId;

  private String _assignmentName;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "_course_id", nullable = false)
  private Course _course;

  private double _assignmentWeight;
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

  public Course getCourse() {
    return _course;
  }

  public void setCourse(Course course) {
    this._course = course;
  }

  public Double getAssignmentWeight() {
    return _assignmentWeight;
  }

  public void setAssignmentWeight(Double assignmentWeight) {
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

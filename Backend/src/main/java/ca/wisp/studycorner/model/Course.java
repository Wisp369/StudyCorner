package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer _courseId;

  private String _courseName;
  private String _courseCode;
  private String _professorName;

  public Course(String courseName) {
    this._courseName = courseName;
  }

  public Course() {}

  public Integer getCourseId() {
    return _courseId;
  }

  public void setCourseId(Integer courseId) {
    this._courseId = courseId;
  }

  public String getCourseName() {
    return _courseName;
  }

  public void setCourseName(String courseName) {
    this._courseName = courseName;
  }

  public String getCourseCode() {
    return _courseCode;
  }

  public void setCourseCode(String courseCode) {
    this._courseCode = courseCode;
  }

  public String getProfessorName() {
    return _professorName;
  }

  public void setProfessorName(String professorName) {
    this._professorName = professorName;
  }
}

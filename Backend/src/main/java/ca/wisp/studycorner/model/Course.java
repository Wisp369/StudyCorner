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

  public Integer get_courseId() {
    return _courseId;
  }

  public void set_courseId(Integer courseId) {
    this._courseId = courseId;
  }

  public String get_courseName() {
    return _courseName;
  }

  public void set_courseName(String courseName) {
    this._courseName = courseName;
  }

  public String get_courseCode() {
    return _courseCode;
  }

  public void set_courseCode(String courseCode) {
    this._courseCode = courseCode;
  }

  public String get_professorName() {
    return _professorName;
  }

  public void set_professorName(String professorName) {
    this._professorName = professorName;
  }
}

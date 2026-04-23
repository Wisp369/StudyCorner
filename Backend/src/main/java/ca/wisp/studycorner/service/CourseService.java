package ca.wisp.studycorner.service;

import ca.wisp.studycorner.model.Course;
import java.util.ArrayList;
import java.util.List;

public class CourseService {
  List<Course> _courses;

  public CourseService() {
    _courses = new ArrayList<Course>();
    // Temporary courses for testing
    _courses.add(new Course("Data Structures and Algorithms"));
    _courses.add(new Course("Web app Design and Implementation"));
    _courses.add(new Course("Mobile web app Development"));
  }

  public List<Course> getCourses() {
    return _courses;
  }

  public void setCourses(List<Course> _courses) {
    this._courses = _courses;
  }

  public void addCourse(Course course) {
    _courses.add(course);
  }
}

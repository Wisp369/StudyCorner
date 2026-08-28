package ca.wisp.studycorner.service;

import ca.wisp.studycorner.data.CourseRepository;
import ca.wisp.studycorner.model.Course;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
  private CourseRepository _courseRepo;

  public CourseService(CourseRepository courseRepo) {
    _courseRepo = courseRepo;
  }

  public List<Course> getCourses() {
    return _courseRepo.findAll();
  }

  public Optional<Course> getCourseById(Integer id) {
    return _courseRepo.findById(id);
  }

  public Course addCourse(Course course) {
    _courseRepo.save(course);
    return course;
  }

  public void deleteCourse(Integer id) {
    Optional<Course> course = getCourseById(id);
    if (course == null) {
      throw new IllegalArgumentException("The course with the id: " + id + " could not be found");
    } else {
      _courseRepo.delete(course.get());
    }
  }
}

package ca.wisp.studycorner.service;

import ca.wisp.studycorner.data.CourseRepository;
import ca.wisp.studycorner.data.UserRepository;
import ca.wisp.studycorner.model.Course;
import ca.wisp.studycorner.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
  private UserRepository _userRepo;
  private CourseRepository _courseRepo;

  public CourseService(UserRepository userRepo, CourseRepository courseRepo) {
    _userRepo = userRepo;
    _courseRepo = courseRepo;
  }

  public List<Course> getCourses() {
    return _courseRepo.findAll();
  }

  public void addCourse(Course course) {
    _courseRepo.save(course);
  }

  // TODO: Create a new exception class and throw it when the user is not found
  public Optional<User> getUserByEmail(String email) {
    return _userRepo.findById(email);
  }
}

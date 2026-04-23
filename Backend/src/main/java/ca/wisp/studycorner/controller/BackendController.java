package ca.wisp.studycorner.controller;

import ca.wisp.studycorner.model.Course;
import ca.wisp.studycorner.service.CourseService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
@CrossOrigin("http://localhost:5173")
class BackendController {
  private CourseService _courseService;

  public BackendController() {
    _courseService = new CourseService();
  }

  @GetMapping("/courses")
  public List<Course> getCourses() {
    return _courseService.getCourses();
  }
}

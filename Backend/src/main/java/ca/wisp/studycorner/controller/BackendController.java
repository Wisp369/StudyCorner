package ca.wisp.studycorner.controller;

import ca.wisp.studycorner.model.Course;
import ca.wisp.studycorner.service.CourseService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/data")
@CrossOrigin("http://localhost:5173")
class BackendController {
  private CourseService _courseService;

  public BackendController(CourseService courseService) {
    _courseService = courseService;
  }

  @GetMapping("/courses")
  public List<Course> getCourses() {
    return _courseService.getCourses();
  }

  @GetMapping("/courses/{id}")
  public ResponseEntity<?> getCourseById(@PathVariable Integer id) throws ResponseStatusException {

    try {
      var course = _courseService.getCourseById(id);
      if (course == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body("The item with the id: " + id + " was not found");
      } else {
        return new ResponseEntity<>(course.get(), HttpStatus.OK);
      }
    } catch (ResponseStatusException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }
  }

  @PostMapping("/courses")
  public ResponseEntity<?> addCourse(@RequestBody Course course) {
    Course newCourse = _courseService.addCourse(course);
    return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
  }

  @DeleteMapping("/deleteCourse/{id}")
  public ResponseEntity<?> deleteCourse(@PathVariable Integer id) throws ResponseStatusException {
    try {
      _courseService.deleteCourse(id);
      return ResponseEntity.status(HttpStatus.OK)
          .body("Course with id: " + id + " was deleted successfully");
    } catch (ResponseStatusException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }
  }
}

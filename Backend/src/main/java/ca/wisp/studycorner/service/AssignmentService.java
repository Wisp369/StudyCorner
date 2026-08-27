package ca.wisp.studycorner.service;

import ca.wisp.studycorner.data.AssignmentRepository;
import ca.wisp.studycorner.model.Assignment;
import ca.wisp.studycorner.model.Course;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AssignmentService {
  private AssignmentRepository _assignmentRepo;
  private CourseService _courseService;

  public AssignmentService(AssignmentRepository assignmentRepo, CourseService courseService) {
    _assignmentRepo = assignmentRepo;
    _courseService = courseService;
  }

  public List<Assignment> getAssignments() {
    return _assignmentRepo.findAll();
  }

  public Optional<Assignment> getAssignmentById(Integer id) {
    return _assignmentRepo.findById(id);
  }

  public Assignment addAssignment(Assignment assignment, Integer courseId) {
    Optional<Course> course = _courseService.getCourseById(courseId);
    if (course == null) {
      throw new ResponseStatusException(
          HttpStatus.NOT_FOUND, "The course with the id: " + courseId + " was not found");
    } else {
      assignment.setCourse(course.get());
    }
    _assignmentRepo.save(assignment);
    return assignment;
  }
}

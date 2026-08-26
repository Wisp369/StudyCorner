package ca.wisp.studycorner.service;

import ca.wisp.studycorner.data.AssignmentRepository;
import ca.wisp.studycorner.model.Assignment;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {
  private AssignmentRepository _assignmentRepo;

  public AssignmentService(AssignmentRepository assignmentRepo) {
    _assignmentRepo = assignmentRepo;
  }

  public List<Assignment> getAssignments() {
    return _assignmentRepo.findAll();
  }

  public Optional<Assignment> getAssignmentById(Integer id) {
    return _assignmentRepo.findById(id);
  }

  public Assignment addAssignment(Assignment assignment) {
    _assignmentRepo.save(assignment);
    return assignment;
  }
}

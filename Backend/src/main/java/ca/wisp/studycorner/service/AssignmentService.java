package ca.wisp.studycorner.service;

import ca.wisp.studycorner.data.AssignmentRepository;
import ca.wisp.studycorner.model.Assignment;
import java.util.List;
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
}

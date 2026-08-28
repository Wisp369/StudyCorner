import { AddAssignmentPageHeader } from "../components/AddAssignmentPageHeader";
import { TextInput } from "../components/TextInput";
import { AddAssignmentViewModel } from "../viewModels/AddAssignmentViewModel";
import "../css/AddAssignmentPage.css";
import { useParams } from "react-router";

export function AddAssignmentPage() {
  const { courseId } = useParams()
  const viewModel = AddAssignmentViewModel(courseId ? Number(courseId) : -1)

  return (
    <div className="flex flex-col items-center min-h-screen">
      <AddAssignmentPageHeader />
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 m-10">
        <TextInput label="Assignment Name" value={viewModel.assignmentName} type="text" onChange={(e) => viewModel.setAssignmentName(e.target.value)} />
        <div className="flex flex-col items-center w-full m-5">
          <label htmlFor="assignmentWeight">Assignment weight</label>
          <TextInput
            label="Assignment Weight"
            value={viewModel.assignmentWeight}
            type="number"
            onChange={(e) => viewModel.setAssignmentWeight(e.target.value)}
          />
        </div>
        <TextInput
          label="Due date"
          type="date"
          value={viewModel.dueDate}
          onChange={(e) => viewModel.setDueDate(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 py-2 px-4 rounded submit-button"
          onClick={viewModel.addAssignment}
        >
          Add Assignment
        </button>
      </div>
    </div>
  )
}

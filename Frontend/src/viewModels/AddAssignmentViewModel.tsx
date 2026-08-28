import { useState } from "react"
import type { Assignment } from "../types/Assignment"
import { useNavigate } from "react-router"

export const AddAssignmentViewModel = (courseId: number) => {
  const navigate = useNavigate()
  const [assignmentName, setAssignmentName] = useState("")
  const [assignmentWeight, setAssignmentWeight] = useState(0)
  const [dueDate, setDueDate] = useState<HTMLInputElement["value"]>("")

  function addAssignment() {
    const newAssignment: Assignment = {
      assignmentName: assignmentName,
      assignmentWeight: assignmentWeight,
      isCompleted: false,
      dueDate: new Date(dueDate),
    }
    fetch("http://localhost:8080/data/courses/" + courseId + "/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAssignment)
    })
    navigate("/courses/" + courseId)
  }

  return {
    assignmentName,
    setAssignmentName,
    assignmentWeight,
    setAssignmentWeight,
    dueDate,
    setDueDate,
    addAssignment
  }
}

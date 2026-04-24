import type { Course } from "../types/Course";

export function CoursePageHeader({ course }: { course: Course }) {
  if (course.professorName === null) {
    return (
      <div>
        <h1>{course.courseName}</h1>
        <h2>{course.courseCode}</h2>
      </div>
    )
  } else if (course.courseCode === null) {
    return (
      <div>
        <h1>{course.courseName}</h1>
        <h2>{course.professorName}</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h1>{course.courseName}</h1>
        <h2>{course.courseCode} - {course.professorName}</h2>
      </div>
    )
  }
}

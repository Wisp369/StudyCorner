import type { Assignment } from "./Assignment"

export type Course = {
  courseId?: number,
  courseName: string,
  courseCode: string,
  assignments?: Assignment[],
  professorName: string
}

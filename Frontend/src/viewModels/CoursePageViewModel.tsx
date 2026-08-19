export const CoursePageViewModel = () => {

  const deleteCourse = (courseId: number) => {
    fetch("http://localhost:8080/data/deleteCourse/" + courseId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(courseId)
    })
  }

  return {
    deleteCourse
  }
}

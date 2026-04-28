import { AppHeader } from "../components/AppHeader"
import { CourseButton } from "../components/CourseButton"
import "../css/HomePage.css"

export function HomePage({ courses }: { courses: any[] }) {

  return (
    <div className="home-page">
      <AppHeader headerText="My Courses" isCoursePage={false} />

      {courses.length === 0 ? (
        <h3>No courses added! Add a course to get started</h3>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {courses.map(course => (
            <div key={course.courseId}>
              <CourseButton course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

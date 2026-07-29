import { HomePageHeader } from "../components/HomePageHeader"
import { CourseButton } from "../components/CourseButton"
import "../css/HomePage.css"
import { HomeViewModel } from "../viewModels/HomeViewModel"

export function HomePage() {
  const viewModel = HomeViewModel()
  var courses = viewModel.courses

  return (
    <div className="home-page">
      <HomePageHeader />

      {courses.length === 0 ? (
        <h3>No courses added! Add a course to get started</h3>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {viewModel.courses.map(course => (
            <div key={course.courseId}>
              <CourseButton course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

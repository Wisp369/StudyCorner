import { HomePageHeader } from "../components/HomePageHeader"
import { CourseButton } from "../components/CourseButton"
import "../css/HomePage.css"
import { HomeViewModel } from "../viewModels/HomeViewModel"

export function HomePage() {
  const viewModel = HomeViewModel()
  var courses = viewModel.courses

  return (
    <div className="home-page grid grid-rows-2 justify-center">
      <div className="row-start-1 home-header">
        <HomePageHeader />
      </div>

      {/* Main content */}
      <div className="row-start-2 grid grid-cols-3 gap-2 justify-center">

        <div className="justify-center flex-1 col-start-1 row-start-2">
          {courses.length === 0 ? (
            <h3>No courses added! Add a course to get started</h3>
          ) : (
            <div className="grid grid-cols-3 gap-x-50 gap-y-10" id="Courses">
              {viewModel.courses.map(course => (
                <div key={course.courseId}>
                  <CourseButton course={course} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="col-start-2 row-start-2 vertical-divider">
        </div>
        <div className="col-start-3 row-start-2">
          <div className="grid grid-cols-1 grid-rows-2 gap-4 col-span-1 justify-end">
            <p>TEst</p>
          </div>
        </div>
      </div>
    </div>
  )

}

import { HomePageHeader } from "../components/HomePageHeader"
import { CourseButton } from "../components/CourseButton"
import "../css/HomePage.css"
import { HomeViewModel } from "../viewModels/HomeViewModel"

export function HomePage() {
  const viewModel = HomeViewModel()

  return (
    <div className="home-page grid grid-rows-2 justify-center">
      <div className="row-start-1 home-header">
        <HomePageHeader />
      </div>

      {/* Main content */}
      <div className="row-start-2 grid grid-cols-3 gap-2 justify-center">

        <div className="justify-center flex-1 col-start-1 row-start-2">
          {viewModel.courses.length === 0 ? (
            <h3 className="justify-center col-span-3 col-start-2">No courses added! Add a course to get started</h3>
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
          <div className="flex flex-col justify-end">
            {viewModel.assignments.map(assignment => (
              <div key={assignment.assignmentId}>
                <p>
                  {assignment.assignmentName} - {assignment.assignmentWeight}% - Due {new Date(assignment.dueDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}

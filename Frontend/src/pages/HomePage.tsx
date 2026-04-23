import "../css/HomePage.css"

export function HomePage({ courses }: { courses: any[] }) {

  return (
    <div>
      <h1>Home Page</h1>

      {courses.length === 0 ? (
        <h3>No courses added! Add a course to get started</h3>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {courses.map(course => (
            <div key={course.courseId}>
              <p>{course.courseName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

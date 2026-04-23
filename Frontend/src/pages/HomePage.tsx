export function HomePage({ courses }: { courses: any[] }) {

  return (
    <div>
      <h1>Home Page</h1>

      {courses.length === 0 ? (
        <h3>No courses added! Add a course to get started</h3>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.courseId}>{course.courseName}</li>
          ))}
        </ul>
      )}
    </div>
  )

}

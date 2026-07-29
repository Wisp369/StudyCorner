import "../css/CourseHeader.css"

export function HeaderTitle({ headerText }: { headerText: string }) {
  return (
    <div id="header-title">
      <h2 className="app-header-text">{headerText}</h2>
    </div>
  )
}

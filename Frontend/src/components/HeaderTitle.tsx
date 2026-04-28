import "../css/AppHeader.css"

export function HeaderTitle({ headerText }: { headerText: string }) {
  return (
    <div id="header-title">
      <p className="app-header-text">{headerText}</p>
    </div>
  )
}

import "../css/AppHeader.css";

export function AppHeader({ headerText }: { headerText?: string }) {

  return (
    <div className="app-header flex">
      <div id="app-center-content">
        <p className="app-header-text">{headerText}</p>
      </div>
      <nav>
        <a href="/" className="hover:text-slate-700">Home</a>
      </nav>
    </div >
  )
}

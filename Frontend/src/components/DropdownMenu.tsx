import { useState } from "react";
import type { DropdownMenuItem } from "../types/DropdownMenuItem";
import "../css/DropdownMenu.css";
import "../css/DropdownMenuItem.css";

export function DropdownMenu({ options }: { options: DropdownMenuItem[] }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="dropdown-menu relative m-1">
      <button
        type="button"
        className="dropdown-menu-button"
        onClick={() => setVisible(!isVisible)}
      > Edit </button>
      <div className="dropdown-menu-options">
        {
          options.map(option => (
            <div key={option.title}>
              <button onClick={option.onClick}>
                {option.title}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

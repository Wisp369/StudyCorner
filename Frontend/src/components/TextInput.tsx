import "../css/TextInput.css"

export function TextInput({ label, value, onChange }: { label: string, value: string, onChange: (e: any) => void }) {

  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder={label}
        id="textInput"
        value={value}
        className="text-input 300 px-2 py-1 rounded-lg border border-gray-3c3a3a focus:outline-none focus:ring-2 focus:ring-7d45a8 focus:border-7d45a8"
        onChange={onChange}
      />
    </div >
  )

}

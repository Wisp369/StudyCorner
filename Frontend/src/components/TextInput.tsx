export function TextInput({ label, value, onChange }: { label: string, value: string, onChange: (value: string) => void }) {

  return (
    <div className="flex flex-col">
      <label htmlFor="textInput" className="mb-1">{label}</label>
      <input
        type="text"
        id="textInput"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      />
    </div >
  )

}

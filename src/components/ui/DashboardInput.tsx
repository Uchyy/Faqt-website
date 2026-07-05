type DashboardInputProps = {
  label: string;
  value: string;
  onChanged: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
};

function DashboardInput({
  label,
  value,
  onChanged,
  type = "text",
  placeholder = "",
}: Readonly<DashboardInputProps>) {
  return (
    <div>
      <label className="block text-sm font-medium text-muted-foreground mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChanged(e.target.value)}
        className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default DashboardInput;
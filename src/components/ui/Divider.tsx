type DividerProps = {
  color?: string;
  className?: string;
};

export default function Divider({ 
  color = "bg-border",
  className = ""
}: Readonly<DividerProps>) {
  return <div className={`w-full h-1 ${color} ${className}`} />;
}
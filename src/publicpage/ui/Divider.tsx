type DividerProps = {
  w?: string;
  h?: string;
  center?: boolean;
  bgColor: string;
};

export default function Divider({ w = "w-full", h = "h-1", center = true, bgColor,}: Readonly<DividerProps>) {
  return (
    <div className={` ${w} ${h} shrink-0 rounded-full ${center ? "mx-auto" : ""} `}
      style={{ backgroundColor: bgColor, }}
    />
  );
}
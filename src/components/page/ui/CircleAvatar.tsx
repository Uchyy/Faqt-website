import { isLightColor } from "../utils/isLightColour";

type CircleAvatarProps = {
  color: string;
  initials: string;
};

export default function CircleAvatar({ color, initials,}: Readonly<CircleAvatarProps>) {
  const light = isLightColor(color);

  return (
    <div className="rounded-4xl p-2"
      style={{   backgroundColor: `color-mix(in srgb, ${color} 20%, white)`, }}>
      <div className=" flex h-12 w-12 items-center justify-center rounded-4xl font-unica text-md font-bold shadow-sm"
        style={{ backgroundColor: light ? "#111827" : color, color: light ? "#111827" : "#ffffff",}}>
        {initials}
      </div>
    </div>
  );
}
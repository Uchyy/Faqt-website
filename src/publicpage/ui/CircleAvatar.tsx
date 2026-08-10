import { useBrandTheme } from "../context/BrandThemeContext";

export type CircleAvatarProps = {
  initials: string;
  isRounded?: boolean;
};

export default function CircleAvatar({ initials, isRounded = true}: Readonly<CircleAvatarProps>) {
  const theme = useBrandTheme();

  return (
    
      <div className={`flex h-10 w-10 items-center p-3 justify-center ${isRounded ? "rounded-2xl" : ""} font-unica text-xs font-bold shadow-sm`}
        style={{ backgroundColor: theme.accent, color: theme.background, }}>
        {initials}
      </div>
  );
}
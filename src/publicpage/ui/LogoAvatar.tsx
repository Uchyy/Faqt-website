type LogoProps = {
    src: string;
    name: string
}

export default function LogoAvatar ( {src, name}: Readonly<LogoProps>) {
    return (
        <img
        src={src}
        alt={name}
        className="h-10 w-10 rounded-xl object-cover"
        />

    );
}   
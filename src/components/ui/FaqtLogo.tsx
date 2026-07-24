import logo from "../../assets/faqt.png";

type Props = {  size?: "sm" | "md" | "lg";};

export default function FaqtLogo({ size = "md" }: Readonly<Props>) {

    const sizes = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
    };

    return (
        <div className={`${sizes[size]} flex items-center justify-center rounded-3xl bg-accent p-2 transition hover:opacity-90`}>
            <img src={logo} alt="FAQT" className="h-full w-full object-contain" />
        </div>
    );
}
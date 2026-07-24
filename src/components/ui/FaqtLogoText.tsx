type Props = {
    size?: "sm" | "md" | "lg";
};

export default function FaqtLogoText({ size = "md" }: Readonly<Props>) {

    const sizes = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-4xl",
    };

    return (
        <span
            className={`  ${sizes[size]} font-unica font-bold tracking-tight bg-gradient-to-r from-accent to-accent/60 bg-clip-text
                text-transparent `} >
            Faqt
        </span>
    );
}
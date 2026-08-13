import { useEffect, useState } from "react";
import AlertDialog from "../../../ui/AlertDialog";
import { useNotification } from "../../../../context/NotificationContext";
import { socialPlatforms, SocialPlatform } from "../../../../model/SoicalPlatform";
import { SocialIcon } from "react-social-icons";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    platform: [name: string, value: string];
    onSave: (name: string, value: string) => void;
};

type Errors = {
    username?: string;
};

export default function SocialMediaEditDialog({
    open,
    onOpenChange,
    platform: initialPlatform,
    onSave,
}: Readonly<Props>) {
    const [platform, setPlatform] =
        useState<SocialPlatform | null>(null);

    const [username, setUsername] = useState("");

    const [errors, setErrors] = useState<Errors>({});

    const { showNotification } = useNotification();

    /**
     * Populate the form whenever a platform is selected.
     */
    useEffect(() => {
        if (!initialPlatform) {
            setPlatform(null);
            setUsername("");
            return;
        }

        const [platformKey, platformUsername] = initialPlatform;

        const selectedPlatform =
            socialPlatforms.find(
                (item) => item.key === platformKey
            ) ?? null;

        setPlatform(selectedPlatform);
        setUsername(platformUsername);
    }, [initialPlatform]);

    /**
     * Reset the form when the dialog closes.
     */
    const handleOpenChange = (nextOpen: boolean) => {
        if (!nextOpen) {
            setPlatform(null);
            setUsername("");
            setErrors({});
        }

        onOpenChange(nextOpen);
    };

    /**
     * Validate form.
     */
    const validate = () => {
        const newErrors: Errors = {};

        if (!username.trim()) {
            newErrors.username =
                "Username or handle is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /**
     * Save changes.
     */
    function handleSave() {
        const valid = validate();

        if (!valid) {
            showNotification({
                message: "Please enter a username or handle",
                type: "error",
            });

            return false;
        }

        if (!platform) {
            return false;
        }

        const cleanUsername = username
            .trim()
            .replace(/^@/, "");

        onSave(platform.key, cleanUsername);

        onOpenChange(false);

        showNotification({
            message: "Social link updated successfully",
            type: "success",
        });

        return true;
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={handleOpenChange}
            title="Edit Social Link"
            actionText="Save changes"
            description="Update your social media profile"
            onAction={handleSave}
        >
            <div className="space-y-4">

                {/* PLATFORM */}
                {platform && (
                    <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3">
                        <SocialIcon
                            network={platform.network}
                            style={{
                                width: 32,
                                height: 32,
                            }}
                        />

                        <div>
                            <p className="font-heading text-sm font-bold">
                                {platform.label}
                            </p>

                            <p className="font-grizzy text-xs text-muted-foreground">
                                {platform.category}
                            </p>
                        </div>
                    </div>
                )}

                {/* USERNAME / HANDLE */}
                <div className="space-y-1">

                    <label
                        htmlFor="social-username"
                        className="font-unica text-xs font-bold uppercase tracking-[0.15rem] text-muted-foreground"
                    >
                        {platform?.label
                            ? `${platform.label} Username`
                            : "USERNAME / HANDLE"}
                    </label>

                    <div className="flex items-center rounded-xl border border-border bg-white px-3 py-2 transition focus-within:border-accent">

                        <span className="mr-1 text-muted-foreground">
                            @
                        </span>

                        <input
                            id="social-username"
                            type="text"
                            value={username}
                            onChange={(event) => {
                                setUsername(
                                    event.target.value
                                );

                                setErrors((prev) => ({
                                    ...prev,
                                    username: undefined,
                                }));
                            }}
                            placeholder={
                                platform?.label
                                    ? `Enter your ${platform.label} username`
                                    : "Enter username or handle"
                            }
                            className="w-full bg-transparent font-grizzy text-sm outline-none placeholder:text-muted-foreground/60"
                        />

                    </div>

                    {errors.username && (
                        <p className="font-grizzy text-xs text-red-500">
                            {errors.username}
                        </p>
                    )}

                    {platform && (
                        <p className="pt-1 font-grizzy text-xs font-bold italic text-muted-foreground">
                            Your profile will link to{" "}
                            {platform.baseUrl}
                            {username || "your-username"}
                        </p>
                    )}

                </div>

            </div>
        </AlertDialog>
    );
}
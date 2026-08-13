import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import { useNotification } from "../../../../context/NotificationContext";
import SelectPopover, { SelectOption } from "../../../ui/SelectPopOver";
import { SocialPlatform, socialPlatforms, } from "../../../../model/SoicalPlatform";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    social: Page["social"];
    onSave: (social: Page["social"]) => void;
};

type Errors = {
    category?: string;
    platform?: string;
    username?: string;
};

export default function SocialMediaAddDialog({ open, onOpenChange, social: initialSocial, onSave,}: Readonly<Props>) {
    const [social, setSocial] = useState(initialSocial);
    const [category, setCategory] = useState("");
    const [platform, setPlatform] = useState<SocialPlatform | null>(null);
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState<Errors>({});

    const { showNotification } = useNotification();

    useEffect(() => {
        setSocial(initialSocial);
    }, [initialSocial]);

    /**
     * Categories available in the platform list.
     */
    const categories = Array.from(  new Set(socialPlatforms.map((platform) => platform.category)));

    const categoryOptions: SelectOption[] = categories.map((category) => ({  value: category,  label: category,}));

    /**
     * Only show platforms belonging to the selected category.
     *
     * Also exclude platforms that have already been added.
     */
    const availablePlatforms = socialPlatforms.filter( (item) => item.category === category && !social[item.key]);

    const platformOptions: SelectOption[] = availablePlatforms.map(
        (platform) => ({
            value: platform.key,
            label: platform.label,
        })
    );

    /**
     * Reset the dialog when it closes.
     */
    const handleOpenChange = (nextOpen: boolean) => {
        if (!nextOpen) {
            setSocial(initialSocial);
            setCategory("");
            setPlatform(null);
            setUsername("");
            setErrors({});
        }

        onOpenChange(nextOpen);
    };

    /**
     * Category changed.
     */
    const handleCategoryChange = (value: string) => {
        setCategory(value);

        // Reset platform and username because
        // the available platforms have changed.
        setPlatform(null);
        setUsername("");

        setErrors((prev) => ({
            ...prev,
            category: undefined,
            platform: undefined,
            username: undefined,
        }));
    };

    /**
     * Platform changed.
     */
    const handlePlatformChange = (value: string) => {
        const selectedPlatform =
            socialPlatforms.find(
                (platform) => platform.key === value
            ) ?? null;

        setPlatform(selectedPlatform);

        setUsername("");

        setErrors((prev) => ({
            ...prev,
            platform: undefined,
            username: undefined,
        }));
    };

    /**
     * Validate form.
     */
    const validate = () => {
        const newErrors: Errors = {};

        if (!category) {
            newErrors.category = "Category is required";
        }

        if (!platform) {
            newErrors.platform = "Platform is required";
        }

        if (!username.trim()) {
            newErrors.username = "Username or handle is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /**
     * Save social media link.
     */
    function handleSave() {
        const valid = validate();

        if (!valid) {
            showNotification({
                message: "Please complete all fields",
                type: "error",
            });

            return false;
        }

        if (!platform) {
            return false;
        }

        const updatedSocial = {
            ...social,
            [platform.key]: username.trim().replace(/^@/, ""),
            updatedAt: new Date(),
        };

        onSave(updatedSocial);

        onOpenChange(false);

        showNotification({
            message: "Social link added successfully",
            type: "success",
        });

        return true;
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={handleOpenChange}
            title="Add Social Link"
            actionText="Save"
            description="Add a social media profile to your public page"
            onAction={handleSave}>
                
            <div className="space-y-4">

                {/* CATEGORY */}
                <SelectPopover
                    label="CATEGORY"
                    value={category}
                    placeholder="Select category"
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    error={errors.category}
                />

                {/* PLATFORM */}
                <SelectPopover
                    label="PLATFORM"
                    value={platform?.key ?? ""}
                    placeholder={ category  ? "Select platform" : "Select category first"}
                    options={platformOptions}
                    disabled={!category}
                    onChange={handlePlatformChange}
                    error={errors.platform}
                    searchPlaceholder="Search platforms..."
                />

                {/* USERNAME / HANDLE */}
                <div className="space-y-1">
                    <label
                        htmlFor="social-username"
                        className="font-unica text-xs font-bold uppercase tracking-[0.15rem] text-muted-foreground">
                        {platform?.label ? `${platform.label} Username` : "USERNAME / HANDLE"}
                    </label>

                    <div className="flex items-center rounded-xl border border-border bg-white px-3 py-2 transition focus-within:border-accent">
                        <span className="mr-1 text-muted-foreground"> @ </span>

                        <input
                            id="social-username"
                            type="text"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                                setErrors((prev) => ({
                                    ...prev,
                                    username: undefined,
                                }));
                            }}
                            placeholder={ platform?.label ? `Enter your ${platform.label} username` : "Enter username or handle"}
                            className="w-full bg-transparent font-grizzy text-sm outline-none placeholder:text-muted-foreground/60"
                        />
                    </div>

                    {errors.username && (
                        <p className="font-grizzy text-xs text-red-500">
                            {errors.username}
                        </p>
                    )}

                    {platform && (
                        <p className="pt-1 font-grizzy  italics font-bold text-xs text-muted-foreground">
                            Your profile will link to{" "}
                            {platform.baseUrl}
                            {username || ""}
                        </p>
                    )}
                </div>

            </div>
        </AlertDialog>
    );
}
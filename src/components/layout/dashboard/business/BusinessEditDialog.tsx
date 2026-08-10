import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import Input from "../../../ui/Input";
import { FileText, FolderPen, Tag } from "lucide-react";
import { useNotification } from "../../../../context/NotificationContext";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    business: Page["business"];
    onSave: (business: Page["business"]) => void;
};


export default function BusinessEditDialog({ open, onOpenChange, business: initialBusiness, onSave,}: Readonly<Props>) {
    const [business, setBusiness] = useState(initialBusiness);
    useEffect(() => { setBusiness(initialBusiness);}, [initialBusiness]);
    const [errors, setErrors] = useState<{ businessName?: string; shortDescription?: string,  address?: string, tagline?: string }>({});
    const {showNotification}=useNotification();

    const validate = () => {
        const newErrors: { businessName?: string; shortDescription?: string,  address?: string, tagline?: string  } = {};

        if (!business.name) {
        newErrors.businessName = "Business name is required";
        }
        
        if (!business.shortDescription) {
        newErrors.shortDescription = "A short description is required";
        }

        if (!business.address) {
        newErrors.address = "Business address is required";
        }

        if (!business.tagline) {
        newErrors.tagline = "Tagline is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    function handleSave() {
        const valid = validate();
        if (!valid) {
            showNotification({
                message:"Please complete all fields",
                type:"error"
            });
            return false;
        }

        onSave({
            ...business,
            updatedAt: new Date(),
        });
        onOpenChange(false);

        showNotification({
            message:"Updated successfully",
            type:"success"
        });

        return true;
    }


    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Edit Business Information"
            actionText="Save changes"
            description="This information will appear on your public page"
            onAction={handleSave} >

            <div className="space-y-4">
                <Input
                    label="BUSINESS NAME"
                    placeholder="Bean & Brew Coffee"
                    value={business.name}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            name: value,
                        })
                    }
                    icon= {<FolderPen size={18} />}
                    iconPosition="right"
                    error={errors.businessName}
                    onClearError={() =>
                        setErrors((prev) => ({ ...prev, businessName: undefined }))
                    }
                />

                <Input
                    label="SHORT DESCRIPTION"
                    placeholder="Specialty coffee, homemade pastries, and a cosy space to work or catch up with friends."
                    value={business.shortDescription}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            shortDescription: value,
                        })
                    }
                    icon= {<FileText size={18} />}
                    iconPosition="right"
                    maxLength={120}
                    error={errors.shortDescription}
                    onClearError={() =>
                        setErrors((prev) => ({ ...prev, shortDescription: undefined }))
                    }
                />

                <Input
                    label="TAGLINE"
                    placeholder="Where every cup feels like home."
                    maxLength={60}
                    value={business.tagline}
                    icon= {<Tag size={18} />}
                    iconPosition="right"
                    error={errors.tagline}
                    onClearError={() =>
                        setErrors((prev) => ({ ...prev, tagline: undefined }))
                    }
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            tagline: value,
                        })
                    }
                />

                <Input
                    label="LONG DESCRIPTION"
                    placeholder="Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes, breakfast, and light lunches. Whether you're grabbing a quick takeaway or relaxing with friends, we're here to make every visit memorable."
                    value={business.longDescription}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            longDescription: value,
                        })
                    }
                    icon= {<FileText size={18} />}
                    iconPosition="right"
                    rows={3}
                    maxLength={300}
                />

            </div>

        </AlertDialog>
    );
}
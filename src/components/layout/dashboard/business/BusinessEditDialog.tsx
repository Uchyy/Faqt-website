import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import Input from "../../../ui/Input";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    business: Page["business"];
    onSave: (business: Page["business"]) => void;
};


export default function BusinessEditDialog({ open, onOpenChange, business: initialBusiness, onSave,}: Readonly<Props>) {
    const [business, setBusiness] = useState(initialBusiness);
    useEffect(() => { setBusiness(initialBusiness);}, [initialBusiness]);
    function handleSave() {
        onSave({ ...business, updatedAt: new Date(),});
        onOpenChange(false);
    }


    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Edit Business Information"
            actionText="Save"
            onAction={handleSave} >

            <div className="space-y-4">
                <Input
                    label="BUSINESS NAME"
                    value={business.name}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            name: value,
                        })
                    }
                />

                <Input
                    label="TAGLINE"
                    value={business.tagline}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            tagline: value,
                        })
                    }
                />

                <Input
                    label="SHORT DESCRIPTION"
                    value={business.shortDescription}
                    rows={2}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            shortDescription: value,
                        })
                    }
                />

                <Input
                    label="LONG DESCRIPTION"
                    value={business.longDescription}
                    rows={4}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            longDescription: value,
                        })
                    }
                />

                <Input
                    label="ADDRESS"
                    value={business.address}
                    onChange={(value) =>
                        setBusiness({
                            ...business,
                            address: value,
                        })
                    }
                />
            </div>

        </AlertDialog>
    );
}
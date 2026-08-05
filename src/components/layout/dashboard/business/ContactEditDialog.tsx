import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import Input from "../../../ui/Input";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    contact: Page["contact"];
    business: Page["business"];
    onSave: (data: {
        contact: Page["contact"];
        business: Page["business"];
    }) => void;
};


export default function ContactEditDialog({ open, onOpenChange, contact: initialContact, onSave, business: initialBusiness,}: Readonly<Props>) {

    const [contact, setContact] = useState(initialContact);
    const [business, setBusiness] = useState(initialBusiness);
    useEffect(() => {
        setContact(initialContact);
        setBusiness(initialBusiness);
    }, [initialContact, initialBusiness]);

    function handleSave() {

        onSave({
            contact: {
                ...contact,
                updatedAt: new Date(),
            },

            business: {
                ...business,
                updatedAt: new Date(),
            },
        });

        onOpenChange(false);
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Edit Contact Information"
            actionText="Save"
            onAction={handleSave}>

            <div className="space-y-4">
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

                <Input
                    label="EMAIL"
                    value={contact.email}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            email: value,
                        })
                    }
                />

                <Input
                    label="WEBSITE"
                    value={contact.website}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            website: value,
                        })
                    }
                />

                <Input
                    label="PHONE"
                    value={contact.phone}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            phone: value,
                        })
                    }
                />
            </div>

        </AlertDialog>
    );
}
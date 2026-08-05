import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import Input from "../../../ui/Input";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    contact: Page["contact"];
    onSave: (contact: Page["contact"]) => void;
};


export default function ContactEditDialog({ open, onOpenChange, contact: initialContact, onSave,}: Readonly<Props>) {
    const [contact, setContact] = useState(initialContact);
    useEffect(() => { setContact(initialContact);}, [initialContact]);
    function handleSave() {
        onSave({ ...contact, updatedAt: new Date(),});
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
                    label="PHONE"
                    value={contact.phone}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            phone: value,
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
                    label="WHATSAPP"
                    value={contact.whatsapp}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            whatsapp: value,
                        })
                    }
                />
            </div>

        </AlertDialog>
    );
}
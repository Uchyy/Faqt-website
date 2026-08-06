import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import Input from "../../../ui/Input";
import { isValidPhoneNumber } from "libphonenumber-js";
import validator from "validator";
import { useNotification } from "../../../../context/NotificationContext";
import FaqtPhoneInput from "../../../ui/PhoneInput";
import { Globe, Mail } from "lucide-react";
import AddressSelector from "../../../ui/AddressSelector";

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

    const [errors, setErrors] = useState<{ phone?: string; email?: string, region?: string, country?: string }>({});
    const {showNotification} = useNotification();

    const validate = () => {
        const newErrors: { phone?: string; email?: string,  region?: string, country?: string  } = {};
    
        if (!contact.phone) {
          newErrors.phone = "Phone number is required";
        }
    
        if (!contact.phone || !isValidPhoneNumber(contact.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        
        if (!contact.email) {
          newErrors.email = "Email is required";
        } else if (!validator.isEmail(contact.email)) {
          newErrors.email = "Please enter a valid email address";
        }

        if (!business.address.region) {
          newErrors.region = "Region is required";
        }

        if (!business.address.country) {
          newErrors.country = "Country is required";
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
            title="Edit Contact Information"
            actionText="Save"
            onAction={handleSave}>

            <div className="space-y-3">

                <span  className="block text-sm mb-1 text-muted-foreground font-heading font-semibold"> ADDRESS</span>
                <div className="mb-7 pl-5">
                    <label className="mb-2 block font-unica text-xs font-bold uppercase tracking-[0.12rem] text-text">
                        LINE 1
                    </label>
                    <Input
                        label=""
                        placeholder="25 High Street (optional)"
                        value={business.address.line1 ?? ""}
                        onChange={(value) =>
                            setBusiness({
                                ...business,
                                address: {
                                    ...business.address,
                                    line1: value,
                                },
                            })
                        }
                    />

                    <label className="mb-2 block font-unica text-xs font-bold uppercase tracking-[0.12rem] text-text">
                        LINE 2
                    </label>
                    <Input
                        label=""
                        placeholder="Suite, building, unit (optional)"
                        value={business.address.line2 ?? ""}
                        onChange={(value) =>
                            setBusiness({
                                ...business,
                                address: {
                                    ...business.address,
                                    line2: value,
                                },
                            })
                        }
                    />

                    <AddressSelector
                        country={business.address.country}
                        region={business.address.region}
                        countryError={errors.country}
                        regionError={errors.region}
                        onCountryChange={(value) =>
                            setBusiness({
                                ...business,
                                address: {
                                    ...business.address,
                                    country: value,
                                    region: "",
                                },
                            })
                        }

                        onRegionChange={(value) =>
                            setBusiness({
                                ...business,
                                address: {
                                    ...business.address,
                                    region: value,
                                },
                            })
                        }

                        onClearError={(field) =>
                            setErrors((prev) => ({
                                ...prev,
                                [field]: undefined,
                            }))
                        }
                    />
                </div>
                

                <Input
                    label="WEBSITE"
                    placeholder="https://www.myfaqtpage.com"
                    value={contact.website ?? "-"}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            website: value,
                        })
                    }
                    icon= {<Globe size={18} />}
                    iconPosition="right"
                />

                <Input
                    label="EMAIL"
                    placeholder="myfaqt@example.com"
                    value={contact.email ?? "-"}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            email: value,
                        })
                    }
                    icon= {<Mail size={18} />}
                    iconPosition="right"
                    error={errors.email}
                    onClearError={() =>
                        setErrors((prev) => ({ ...prev, email: undefined }))
                    }
                />

                <FaqtPhoneInput
                    label="PHONE"
                    value={contact.phone ?? "-"}
                    onChange={(value) =>
                        setContact({
                            ...contact,
                            phone: value,
                        })
                    }
                    error={errors.phone}
                    onClearError={() =>
                        setErrors((prev) => ({ ...prev, phone: undefined }))
                    }
                />

                <FaqtPhoneInput
                    label="WHATSAPP"
                    value={contact.whatsapp ?? "-"}
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
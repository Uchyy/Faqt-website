import { useEffect, useState } from "react";
import { Page } from "../../../../model/Page";
import AlertDialog from "../../../ui/AlertDialog";
import { useNotification } from "../../../../context/NotificationContext";
import { INDUSTRIES, IndustryId } from "../../../../model/Industry";
import { BUSINESS_TYPES } from "../../../../model/businessTypes";
import SelectPopover, { SelectOption } from "../../../ui/SelectPopOver";


type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    business: Page["business"];
    onSave: (business: Page["business"]) => void;
};

type Errors = {
    established?: string;
    industry?: string;
    businessType?: string;
};

export default function BusinessDetailsEditDialog({ open, onOpenChange, business: initialBusiness, onSave,}: Readonly<Props>) {

    const [businessDetails, setBusinessDetails] = useState(initialBusiness);
    const [errors, setErrors] = useState<Errors>({});
    const { showNotification } = useNotification();

    useEffect(() => {
        setBusinessDetails(initialBusiness);
    }, [initialBusiness]);

    const availableBusinessTypes = BUSINESS_TYPES.filter(
        (type) => type.industry === businessDetails.industry
    );

    const industryOptions: SelectOption[] = INDUSTRIES.map((industry) => ({
        value: industry.value,
        label: industry.label,
    }));

    const businessTypeOptions: SelectOption[] = availableBusinessTypes.map(
        (type) => ({
            value: type.value,
            label: type.label,
        })
    );

    const currentYear = new Date().getFullYear();
    const handleOpenChange = (nextOpen: boolean) => {
        if (!nextOpen) {
            // Discard any unsaved changes
            setBusinessDetails(initialBusiness);
            setErrors({});
        }

        onOpenChange(nextOpen);
    };

    const establishedYearOptions: SelectOption[] = Array.from(
        { length: currentYear - 1899 },
        (_, index) => {
            const year = currentYear - index;

            return {
                value: year.toString(),
                label: year.toString(),
            };
        }
    );

    const validate = () => {
        const newErrors: Errors = {};

        if (!businessDetails.established) {
            newErrors.established = "Year established is required";
        }

        if (!businessDetails.industry) {
            newErrors.industry = "Business industry is required";
        }

        if (!businessDetails.businessType) {
            newErrors.businessType = "Business type is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    function handleSave() {
        const valid = validate();

        if (!valid) {
            showNotification({
                message: "Please complete all fields",
                type: "error",
            });
            return false;
        }

        onSave({
            ...businessDetails,
            updatedAt: new Date(),
        });

        onOpenChange(false);

        showNotification({
            message: "Updated successfully",
            type: "success",
        });

        return true;
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={handleOpenChange}
            title="Edit Business Information"
            actionText="Save changes"
            description="This information will appear on your public page"
            onAction={handleSave}>

            <div className="space-y-4">

                <SelectPopover
                    label="ESTABLISHED"
                    value={businessDetails.established}
                    placeholder="Select year"
                    options={establishedYearOptions} 
                    onChange={(value) => {
                        setBusinessDetails({
                            ...businessDetails,
                            established: value,
                        });

                        setErrors((prev) => ({
                            ...prev,
                            established: undefined,
                        }));
                    }}
                    error={errors.established}
                />
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <SelectPopover
                        label="INDUSTRY"
                        value={businessDetails.industry}
                        placeholder="Select industry"
                        options={industryOptions}
                        onChange={(value) => {
                            const industry = value as IndustryId;

                            setBusinessDetails({
                                ...businessDetails,
                                industry,
                                businessType: "",
                            });

                            setErrors((prev) => ({
                                ...prev,
                                industry: undefined,
                                businessType: undefined,
                            }));
                        }}
                        error={errors.industry}
                    />

                    <SelectPopover
                        label="BUSINESS TYPE"
                        value={businessDetails.businessType}
                        placeholder={
                            businessDetails.industry
                                ? "Select business type"
                                : "Select industry first"
                        }
                        options={businessTypeOptions}
                        disabled={!businessDetails.industry}
                        onChange={(value) => {
                            setBusinessDetails({
                                ...businessDetails,
                                businessType: value,
                            });

                            setErrors((prev) => ({
                                ...prev,
                                businessType: undefined,
                            }));
                        }}
                        error={errors.businessType}
                        searchPlaceholder="Search business types..."
                    />
        
                </div>
            </div>
        </AlertDialog>
    );
}

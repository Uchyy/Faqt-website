import { BUSINESS_TYPES } from "../model/businessTypes";

export const getBusinessTypeLabel = (value: string): string => {
    return (
        BUSINESS_TYPES.find((businessType) => businessType.value === value)  ?.label ?? value
    );
};
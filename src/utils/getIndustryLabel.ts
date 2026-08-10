import { INDUSTRIES, IndustryId } from "../model/Industry";

export const getIndustryLabel = (value: IndustryId): string => {
    return (
        INDUSTRIES.find((industry) => industry.value === value)?.label ?? value
    );
};
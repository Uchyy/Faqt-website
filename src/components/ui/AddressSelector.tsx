import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

type Props = {
    country: string;
    region: string;

    countryError?: string;
    regionError?: string;

    onCountryChange: (value: string) => void;
    onRegionChange: (value: string) => void;

    onClearError?: (field: "country" | "region") => void;
};


export default function AddressSelector({
    country,
    region,
    countryError,
    regionError,
    onCountryChange,
    onRegionChange,
    onClearError,
}: Readonly<Props>) {

    return (
        <div className="space-y-4">

            <div>
                <label className="mb-2 block font-unica text-xs font-bold uppercase tracking-[0.12rem] text-text">
                    Country
                </label>

                <CountryDropdown
                    value={country}
                    onChange={(value) => {
                        onCountryChange(value);
                        onClearError?.("country");
                    }}
                    className={`
                        w-full rounded-xl
                        border
                        ${countryError ? "border-red-500" : "border-border"}
                        bg-white
                        px-4 py-3
                        font-germania
                        text-sm
                        outline-none
                        focus:border-accent
                    `}
                />

                {countryError && (
                    <p className="mt-1 text-xs font-semibold text-red-500">
                        {countryError}
                    </p>
                )}

            </div>


            <div>

                <label className="mb-2 block font-unica text-xs font-bold uppercase tracking-[0.12rem] text-text">
                    Location / Region
                </label>


                <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(value) => {
                        onRegionChange(value);
                        onClearError?.("region");
                    }}
                    className={`
                        w-full rounded-xl
                        border
                        ${regionError ? "border-red-500" : "border-border"}
                        bg-white
                        px-4 py-3
                        font-germania
                        text-sm
                        outline-none
                        focus:border-accent
                    `}
                />


                {regionError && (
                    <p className="mt-1 text-xs font-semibold text-red-500">
                        {regionError}
                    </p>
                )}

            </div>

        </div>
    );
}
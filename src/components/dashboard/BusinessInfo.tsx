import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Button from "../ui/Button";

export default function BusinessInfo() {
  const [color, setColor] = useState("#00C389");
  const [open, setOpen] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <CollapsibleSection
      title="Business Info"
      label="Name, contact and social — shown on your public page."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <Input
          label="BUSINESS NAME"
          placeholder="Your business name"
          value={businessName}
          onChange={setBusinessName}
        />

        <Input
          label="DESCRIPTION"
          placeholder="A short description of your business..."
          value={description}
          onChange={setDescription}
        />

        <Input
          label="ADDRESS"
          placeholder="Your business address"
          value={address}
          onChange={setAddress}
        />


        {/* BRAND COLOUR */}
        <div className="md:col-span-2">

        <label className="block font-semibold text-muted-foreground font-heading mt-2">
            BRAND COLOUR
        </label>

        <div className="relative mt-3 inline-flex items-center gap-3 border border-border rounded-2xl p-4 mb-4">

            {/* color button */}
            <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full border border-border"
            style={{ backgroundColor: color }}
            />

            <span className="text-sm font-unica text-text mt-4">
                <Input
                    value={color}
                    onChange={setColor}
                />
            </span>

            

            {/* POPUP */}
            {open && (
            <div className="absolute left-0 bottom-full mt-3 z-50 bg-white p-3 rounded-xl shadow-xl border border-border">

                <HexColorPicker color={color} onChange={setColor} />

                <Button
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
                >
                Done
                </Button>

            </div>
            )}

        </div>
        </div>

        <Button className="">
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}
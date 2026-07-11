import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import { PageContext } from "../../context/PageContext";

export default function BannerSection() {

  const context = useContext(PageContext);
  const banner = context?.page.banner;
  const [showUntil, setShowUntil] = useState(
    banner?.showUntil
      ? banner.showUntil.toISOString().split("T")[0]
      : ""
    );
  const [message, setMessage] = useState( banner?.message ?? "");
  const [enabled, setEnabled] = useState( banner?.enabled ?? false );
  const [errors, setErrors] = useState<{ message?: string; showUntil?: string }>({});

  const validate = () => {
    const newErrors: { message?: string; showUntil?: string } = {};

    if (!message.trim()) {
        newErrors.message = "Banner message is required";
    }

    if (!showUntil) {
        newErrors.showUntil = "Please select when the banner should end";
    } else {
        const selectedDate = new Date(showUntil);
        const today = new Date();

        // Remove time part so comparison is only by date
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
        newErrors.showUntil = "Show until date cannot be in the past";
        }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
    };

  const saveBanner = () => {
    if(!validate()) return;
    context?.updatePage({
        banner: {
        enabled,
        message,
        type: "info",
        showUntil: showUntil
            ? new Date(showUntil)
            : null,
        }
    });

    };


  return (
    <CollapsibleSection
      title="Announcement Banner"
      label="SHOW IMPORTANT UPDATES TO CUSTOMERS"
    >

      <div className="space-y-4">

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e)=>
              setEnabled(e.target.checked)
            }
          />

          <span>
            Show banner
          </span>
        </label>

        <Input
          label="MESSAGE"
          placeholder="We are closed for renovations until Monday"
          value={message}
          error = {errors.message}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, message }))
          }
          maxLength={120}
          onChange={setMessage}
        />

        <Input
          label="SHOW UNTIL"
          value={showUntil}
          type="date"
          error = {errors.showUntil}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, showUntil }))
          }
          maxLength={120}
          onChange={setShowUntil}
        />

        <div className="flex justify-end">
          <Button
            className="w-1/2"
            onClick={saveBanner}
          >
            Save changes
          </Button>
        </div>

      </div>

    </CollapsibleSection>
  );
}



/**
 * 
 * {page.banner?.enabled &&
 (!page.banner.showUntil ||
  new Date() <= page.banner.showUntil) && (

  <div className="rounded-xl bg-accent/10 p-4 text-center">
    {page.banner.message}
  </div>

)}
 */
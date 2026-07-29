import { useContext, useState } from "react";
import { PageContext } from "../../../../context/PageContext";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Button from "../../../ui/Button";
import BannerDialog from "../../../ui/BannerDialog";
import type { Banner } from "../../../../model/Banner";

type BannerErrors = {
  message?: string;
  showUntil?: string;
};

export default function BannerSection() {
  const context = useContext(PageContext);
  const banner = context?.page.banner;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [draft, setDraft] = useState<Banner>({
    enabled: true,
    message: "",
    type: "info",
    showUntil: null,
  });

  const [errors, setErrors] = useState<BannerErrors>({});

  const openAdd = () => {
    setDraft({
      enabled: true,
      message: "",
      type: "info",
      showUntil: null,
    });

    setErrors({});
    setDialogOpen(true);
  };

  const openEdit = () => {
    if (!banner) return;

    setDraft({ ...banner });
    setErrors({});
    setDialogOpen(true);
  };

  const validate = () => {
    const newErrors: BannerErrors = {};

    if (!draft.message.trim()) {
      newErrors.message = "Banner message is required";
    }

    if (!draft.showUntil) {
      newErrors.showUntil = "Please select when the banner should end";
    } else {
      const selectedDate = new Date(draft.showUntil);
      const today = new Date();

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
    if (!validate()) return false;

    context?.updatePage({
      banner: draft,
    });

    setDialogOpen(false);
    return true;
  };

  const toggleBanner = () => {
    if (!banner) return;

    context?.updatePage({
      banner: {
        ...banner,
        enabled: !banner.enabled,
      },
    });
  };

  const deleteBanner = () => {
    context?.updatePage({
      banner: null,
    });
  };

  const clearError = (field: keyof BannerErrors) => {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  return (
    <CollapsibleSection
      title="Announcement"
      label="SHOW IMPORTANT UPDATES TO CUSTOMERS">
      {!banner?.message.trim() ? (
        <div className="rounded-2xl border p-6 text-center">
          <p className="font-medium">
            No announcement yet
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Add a short message to highlight important information for visitors.
          </p>

          <Button className="mt-5" onClick={openAdd}>
            + Add announcement
          </Button>

          <BannerDialog
            mode="add"
            banner={draft}
            setBanner={setDraft}
            errors={errors}
            onClearError={clearError}
            onSave={saveBanner}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-2xl border p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    banner.enabled ? "bg-green-500" : "bg-gray-400"
                  }`}
                />

                <span className="text-xs font-semibold uppercase tracking-widest">
                  {banner.enabled ? "Live" : "Hidden"}
                </span>
              </div>

              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Announcement
              </span>
            </div>

            <p className="text-sm leading-6">
              {banner.message}
            </p>

            {banner.showUntil && (
              <p className="mt-3 text-xs text-muted-foreground">
                Ends {new Date(banner.showUntil).toLocaleDateString()}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={openEdit}>
              Edit
            </Button>

            <BannerDialog
              mode="edit"
              banner={draft}
              setBanner={setDraft}
              errors={errors}
              onClearError={clearError}
              onSave={saveBanner}
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            />

            <Button
              variant="outline"
              onClick={toggleBanner}
            >
              {banner.enabled ? "Hide" : "Show"}
            </Button>

            <Button
              variant="outline"
              onClick={deleteBanner}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </CollapsibleSection>
  );
}
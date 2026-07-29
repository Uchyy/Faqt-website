import { Banner } from "../../model/Banner";
import AlertDialog from "./AlertDialog";
import Input from "./Input";


type BannerErrors = { message?: string; showUntil?: string;};
type BannerDialogProps = {
  mode: "add" | "edit";
  banner: Banner;
  setBanner: (banner: Banner) => void;
  errors?: BannerErrors;
  onClearError?: (field: keyof BannerErrors) => void;
  onSave: () => boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
};


export default function BannerDialog({
  mode,
  banner,
  setBanner,
  errors,
  onClearError,
  onSave,
  open,
  onOpenChange,
  trigger,
}: Readonly<BannerDialogProps>) {
  return (
    <AlertDialog
      trigger={trigger}
      open={open}
      onOpenChange={onOpenChange}
      title={mode === "add" ? "Add Announcement" : "Edit Announcement"}
      actionText="Save"
      onAction={onSave}
    >
      <div className="space-y-4">
        <Input
          label="MESSAGE"
          placeholder="We are closed for renovations until Monday"
          value={banner.message}
          maxLength={120}
          onChange={(value) =>
            setBanner({
              ...banner,
              message: value,
            })
          }
          error={errors?.message}
          onClearError={() => onClearError?.("message")}
        />

        <Input
          label="SHOW UNTIL"
          type="date"
          value={
            banner.showUntil
              ? new Date(banner.showUntil).toISOString().split("T")[0]
              : ""
          }
          onChange={(value) =>
            setBanner({
              ...banner,
              showUntil: value
                ? new Date(`${value}T00:00:00`)
                : null,
            })
          }
          error={errors?.showUntil}
          onClearError={() => onClearError?.("showUntil")}
        />
      </div>
    </AlertDialog>
  );
}
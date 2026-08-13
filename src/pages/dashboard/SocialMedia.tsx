import DashboardContentBase from "../../components/ui/DashboardContentBase";
import { useDashboardData } from "../../context/DashBoardDataContext";
import { SocialIcon } from "react-social-icons";
import {
    EllipsisVertical,
    Pencil,
    Trash2,
    CirclePlus,
} from "lucide-react";
import { useState } from "react";
import {
    SocialPlatform,
    socialPlatforms,
} from "../../model/SoicalPlatform";
import { useMediaQuery } from "../../utils/useScreenSize";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import SocialMediaAddDialog from "../../components/layout/dashboard/business/SocialMediaAddDialog";
import SocialMediaEditDialog from "../../components/layout/dashboard/business/SocialMediaEditDialog";
import AlertDialog from "../../components/ui/AlertDialog";

export default function HomePage() {
    const { page, updatePage } = useDashboardData();

    const activeSocials = socialPlatforms.filter( (platform) => Boolean(page.social[platform.key]));

    const isDesktop = useMediaQuery("(min-width:1024px)");
    const isTablet = useMediaQuery("(min-width:768px)");

    const [socialMediaAddOpen, setSocialMediaAddOpen] = useState(false);

    const [socialMediaEditOpen, setSocialMediaEditOpen] = useState(false);

    const [deleteSocialOpen, setDeleteSocialOpen] = useState(false);

    const [selectedSocial, setSelectedSocial] = useState<SocialPlatform | null>(null);
    const handleEditSocial = (platform: SocialPlatform) => { setSelectedSocial(platform); setSocialMediaEditOpen(true);};
    const handleDeleteSocial = (platform: SocialPlatform) => { setSelectedSocial(platform); setDeleteSocialOpen(true);};

    /**
     * Confirm social media deletion.
     */
    const confirmDeleteSocial = () => {
        if (!selectedSocial) {
            return;
        }

        updatePage({
            social: {
                ...page.social,
                [selectedSocial.key]: "",
                updatedAt: new Date(),
            },
            updatedAt: new Date(),
        });

        setDeleteSocialOpen(false);
        setSelectedSocial(null);
    };

    /**
     * Close edit dialog and clear selection.
     */
    const handleEditOpenChange = (open: boolean) => {
        setSocialMediaEditOpen(open);

        if (!open) {
            setSelectedSocial(null);
        }
    };

    /**
     * Close delete dialog and clear selection.
     */
    const handleDeleteOpenChange = (open: boolean) => {
        setDeleteSocialOpen(open);

        if (!open) {
            setSelectedSocial(null);
        }
    };

    return (
        <DashboardContentBase
            title="Socials"
            isEmptyText="No social media"
            label="Add your social media links and handles"
        >
            {/* SOCIAL LIST */}
            <div className="relative mb-5 min-h-[calc(99vh-250px)] overflow-y-auto rounded-3xl border border-white p-4 shadow-lg lg:min-h-[calc(90vh-250px)]">

                {activeSocials.map((platform) => (
                    <div
                        key={platform.key}
                        className="mb-3 flex flex-1 items-center gap-4 overflow-y-auto rounded-3xl border border-accent bg-white px-4 py-4 shadow-lg">
                        <SocialIcon
                            network={platform.network}
                            url={`${platform.baseUrl}${page.social[platform.key]}`}
                            style={{
                                width: isDesktop ? 32 : 28,
                                height: isDesktop ? 42 : 48,
                        }}/>

                        <span className="w-17 font-heading text-sm font-bold tracking-[0.04rem] md:w-40 md:text-lg lg:w-sm lg:tracking-[0.095rem]">
                            {platform.label}
                        </span>

                        <span className="line-clamp-2 flex-1 break-words font-blackOps text-xs lg:text-sm">
                            @{page.social[platform.key]}
                        </span>

                        <SocialActions
                            platform={platform}
                            isDesktop={isDesktop}
                            isTablet={isTablet}
                            onEdit={() => handleEditSocial(platform)}
                            onDelete={() => handleDeleteSocial(platform)}
                        />
                    </div>
                ))}
            </div>

            {/* ADD BUTTON */}
            <div className="sticky bottom-0 w-full rounded-3xl border border-white bg-white p-4 shadow-lg">
                <Button
                    type="button"
                    onClick={() => setSocialMediaAddOpen(true)}
                    icon={<CirclePlus />}
                    iconPosition="left"
                    variant="outline"
                    className="w-full"
                    rounded >
                    <span>Add New Link</span>
                </Button>
            </div>

            {/* ADD SOCIAL */}
            <SocialMediaAddDialog
                open={socialMediaAddOpen}
                onOpenChange={setSocialMediaAddOpen}
                social={page.social}
                onSave={(socials) =>
                    updatePage({
                        social: socials,
                        updatedAt: new Date(),
                    })
                }
            />

            {/* EDIT SOCIAL */}
            <SocialMediaEditDialog
                open={socialMediaEditOpen}
                onOpenChange={handleEditOpenChange}
                platform={
                    selectedSocial
                        ? [
                              selectedSocial.key,
                              page.social[
                                  selectedSocial.key
                              ] ?? "",
                          ]
                        : ["", ""]
                }
                onSave={(name: string, value: string) => {
                    updatePage({
                        social: {
                            ...page.social,
                            [name]: value,
                            updatedAt: new Date(),
                        },
                        updatedAt: new Date(),
                    });

                    setSocialMediaEditOpen(false);
                    setSelectedSocial(null);
                }}
            />

            {/* DELETE CONFIRMATION */}
            <AlertDialog
                open={deleteSocialOpen}
                onOpenChange={handleDeleteOpenChange}
                title={`Delete ${ selectedSocial?.label ?? "social" } link?`}
                actionText="Delete"
                onAction={confirmDeleteSocial}
                type="delete">

                    <span className="text-center font-red/500"> This action will remove your { selectedSocial?.label ?? "social media"} link from your public page.</span>

            </AlertDialog>
            
        </DashboardContentBase>
    );
}


/**
 * Social action buttons.
 */
function SocialActions({ platform, isDesktop, isTablet,onEdit, onDelete,}: Readonly<{ platform: SocialPlatform; isDesktop: boolean; isTablet: boolean; onEdit: () => void; onDelete: () => void; }>) {
    const [open, setOpen] = useState(false);

    /**
     * DESKTOP
     */
    if (isDesktop) {
        return (
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    onClick={onEdit}
                    iconPosition="left">
                    <Pencil size={16} />
                    <span className="font-bold">
                        Edit
                    </span>
                </Button>

                <Button
                    variant="outline"
                    onClick={onDelete}
                    iconPosition="left"
                    className="border border-red-500">
                    <Trash2
                        size={16}
                        color="red"
                    />

                    <span className="font-bold text-red-500">
                        Delete
                    </span>
                </Button>
            </div>
        );
    }

    /**
     * TABLET
     */
    if (isTablet) {
        return (
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    onClick={onEdit}>
                    <Pencil size={17} />
                </Button>

                <Button
                    variant="outline"
                    onClick={onDelete}
                    className="border border-red-500">
                    <Trash2
                        size={17}
                        color="red"
                    />
                </Button>
            </div>
        );
    }

    /**
     * MOBILE
     */
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() =>
                    setOpen((prev) => !prev)
                }
                className="rounded-lg p-2 text-muted-foreground hover:bg-accent/10 hover:text-text">
                <EllipsisVertical size={20} />
            </button>

            {open && (
                <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-xl border border-border bg-white p-1 shadow-lg">

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onEdit();
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50">
                        <Pencil size={15} />
                        Edit
                    </button>

                    <Divider />

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onDelete();
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                        <Trash2 size={15} />
                        Delete
                    </button>

                </div>
            )}
        </div>
    );
}
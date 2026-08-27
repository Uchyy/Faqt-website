import DashboardContentBase from "../../components/ui/DashboardContentBase";
import { createPortal } from "react-dom";
import { useDashboardData } from "../../context/DashBoardDataContext";
import { SocialIcon } from "react-social-icons";
import { EllipsisVertical, Pencil, Trash2, CirclePlus,} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SocialPlatform, socialPlatforms,} from "../../model/SoicalPlatform";
import { useMediaQuery } from "../../utils/useScreenSize";
import Button from "../../components/ui/Button";
import SocialMediaAddDialog from "../../components/layout/dashboard/business/SocialMediaAddDialog";
import SocialMediaEditDialog from "../../components/layout/dashboard/business/SocialMediaEditDialog";
import AlertDialog from "../../components/ui/AlertDialog";
import { useDashboardUI } from "../../context/DashboardUIContext";

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


    const handleEditOpenChange = (open: boolean) => {
        setSocialMediaEditOpen(open);

        if (!open) {
            setSelectedSocial(null);
        }
    };


    const handleDeleteOpenChange = (open: boolean) => {
        setDeleteSocialOpen(open);

        if (!open) {
            setSelectedSocial(null);
        }
    };

    const { sidebarMode, setSidebarMode } = useDashboardUI();
    useEffect(()=>{
        if(isDesktop) setSidebarMode("expanded");
        else if(isTablet) setSidebarMode("collapsed");
        else setSidebarMode("mobile");
    },[isDesktop,isTablet,setSidebarMode]);

    return (
        <DashboardContentBase
            title="Socials"
            label="Add your social media links and handles">

            <div className={`relative ${activeSocials.length > 0  ? "h-[calc(90vh-10rem)] lg:h-[calc(100vh-10rem)]" : "h-auto"}  w-full `}>


                {/* SOCIAL LIST */}
                <div className="no-scrollbar overscroll-contain h-fit md:h-[70%] w-full overflow-y-auto rounded-3xl bg-white p-4  shadow-lg">
                    {activeSocials.length > 0 ? (
                        activeSocials.map((platform, index) => (
                            <div
                                key={platform.key}
                                className={`mb-3 flex items-center gap-4 px-2 py-4 ${
                                    index !== activeSocials.length - 1
                                        ? "border-b border-accent/10"
                                        : ""
                                }`}>
                                <div className="flex flex-1 items-center gap-3">
                                    <SocialIcon network={platform.network} />

                                    <div className="min-w-0 flex-1">
                                        <span className="font-heading text-sm font-bold">
                                            {platform.label}
                                        </span>

                                        <span className="block truncate font-blackOps text-xs lg:text-sm">
                                            @{page.social[platform.key]}
                                        </span>
                                    </div>
                                </div>

                                <SocialActions
                                    platform={platform}
                                    isDesktop={isDesktop}
                                    isTablet={isTablet}
                                    onEdit={() => handleEditSocial(platform)}
                                    onDelete={() => handleDeleteSocial(platform)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <span className="font-heading font-bold ">
                                No Social media
                            </span>
                        </div>
                    )}
                </div>


                {/* ADD BUTTON */}
                <div className={`fixed bottom-4 z-10 ${ sidebarMode === "expanded" ? "left-80" : sidebarMode === "collapsed" ? "left-30" : "left-0" } right-0 px-6`}>
                    <div className="mx-auto w-full rounded-3xl border border-white bg-white p-2 shadow-lg">
                        <Button
                            type="button"
                            onClick={() => setSocialMediaAddOpen(true)}
                            icon={<CirclePlus />}
                            iconPosition="left"
                            variant="outline"
                            className="w-full"
                            rounded>
                            <span>Add New Link</span>
                        </Button>
                    </div>
                </div>

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

                    <span className="text-center font-red/500"> This action will remove your <strong>{ selectedSocial?.label ?? "social media"}</strong> link from your public page.</span>

            </AlertDialog>
            
        </DashboardContentBase>
    );
}


/**
 * Social action buttons.
 */
function SocialActions({ platform, isDesktop, isTablet,onEdit, onDelete,}: Readonly<{ platform: SocialPlatform; isDesktop: boolean; isTablet: boolean; onEdit: () => void; onDelete: () => void; }>) {
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                !buttonRef.current?.contains(target) &&
                !menuRef.current?.contains(target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

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
        <div>
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-accent/10 hover:text-text">
                <EllipsisVertical size={20} />
            </button>

            {open &&
                createPortal(
                    <div ref={menuRef}
                        className="fixed z-50 w-32 rounded-xl border border-border bg-white p-1 shadow-lg"
                        style={{
                            top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + 8 : 0,
                            left: buttonRef.current ? buttonRef.current.getBoundingClientRect().right - 128 : 0,
                        }} >

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onEdit();
                            }}
                            className="flex w-full items-center gap-2 border-b border-accent/20 px-3 py-2 text-sm hover:bg-slate-50">
                            <Pencil size={15} />
                            Edit
                        </button>

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

                    </div>,
                    document.body
                )}
        </div>
    );
}
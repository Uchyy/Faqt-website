import DashboardContentBase from "../../components/ui/DashboardContentBase";
import { useDashboardData } from "../../context/DashBoardDataContext";
import { SocialIcon } from 'react-social-icons';
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { socialPlatforms } from "../../model/SoicalPlatform";
import { useMediaQuery } from "../../utils/useScreenSize";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";



export default function HomePage() {
    const { page } = useDashboardData();
    const activeSocials = socialPlatforms.filter( (platform) => Boolean(page.social[platform.key]));
    const isDesktop = useMediaQuery("(min-width:1024px)");
    const isTablet = useMediaQuery("(min-width:768px)");

    return (
        <DashboardContentBase
            title="Socials"
            isEmptyText="No social media"
            label="Add your social media links and handles">

            {activeSocials.map((platform) => (
                <div key={platform.key} className="mb-3 flex items-center gap-4 rounded-2xl border border-border bg-white px-4 py-4 shadow-sm">
                    <SocialIcon
                        network={platform.network}
                        url={`${platform.baseUrl}${page.social[platform.key]}`}
                    />

                    <span className="font-heading text-lg font-bold tracking-[0.04rem] lg:tracking-[0.095rem]">
                        {platform.label}
                    </span>

                    <span className="flex-1 truncate font-blackOps text-xs lg:text-sm">
                        @{page.social[platform.key]}
                    </span>

                    <SocialActions
                        isDesktop={isDesktop}
                        isTablet={isTablet}
                    />
                </div>
            ))}  

        </DashboardContentBase>
    );
}

function SocialActions({ isDesktop, isTablet }: Readonly<{isDesktop: boolean; isTablet: boolean }>) {
    const [open, setOpen] = useState(false);

    if (isDesktop) {
        return (
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => {}} iconPosition="left" >
                    <Pencil size={16} />
                    <span className="font-bold">Edit</span>
                </Button>

                <Button variant="outline" onClick={() => {}} iconPosition="left" className="border border-red-500">
                    <Trash2 size={16} color="red" />
                    <span className="text-red-500 font-bold">Delete</span>
                </Button>
            </div>
        );
    }

    if (isTablet) {
        return (
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => {}} >
                    <Pencil size={17} />
                </Button>

                <Button variant="outline" onClick={() => {}} className="border border-red-500">
                    <Trash2 size={17} color="red" />
                </Button>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-accent/10 hover:text-text" >
                <EllipsisVertical size={20} />
            </button>

            {open && (
                <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-xl border border-border bg-white p-1 shadow-lg">
                    <button type="button" onClick={() => setOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50">
                        <Pencil size={15} />
                        Edit
                    </button>

                    <Divider/>

                    <button type="button" onClick={() => setOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                        <Trash2 size={15} />
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}




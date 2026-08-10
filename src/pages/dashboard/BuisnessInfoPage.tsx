import DashboardContentBase from "../../components/ui/DashboardContentBase.tsx";
import { useDashboardData } from "../../context/DashBoardDataContext.tsx";
import Button from "../../components/ui/Button.tsx";
import { useState } from "react";
import ContactEditDialog from "../../components/layout/dashboard/business/ContactEditDialog.tsx";
import BusinessEditDialog from "../../components/layout/dashboard/business/BusinessEditDialog.tsx";
import { timeAgo } from "../../utils/timeAgo.ts";
import { CalendarDays, Building2, BriefcaseBusiness, } from "lucide-react";
import { getIndustryLabel } from "../../utils/getIndustryLabel.ts";
import { getBusinessTypeLabel } from "../../utils/getBusinessTypeLable.ts";
import BusinessDetailsEditDialog from "../../components/layout/dashboard/business/BusinessDetailsEditDialog.tsx";

type InfoProps = {
    title: string,
    value: string
}

export default function BusinessInfoPage() {
    const { page, updatePage } = useDashboardData();
    const [businessEditOpen, setBusinessEditOpen] = useState(false);
    const [contactEditOpen, setContactEditOpen] = useState(false);
    const [businessDetailEditOpen, setBusinessDetailEditOpen] = useState(false);

    return (
        <DashboardContentBase
            title={"Business Information"}
            label="Manage your business information and how customers can contact you">  

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <BusinessCard 
                    title={"Business Information"} 
                    label={timeAgo(page.business.updatedAt)}
                    info={[
                        {
                            title: "Business name",
                            value: page.business.name ?? "-"
                        },

                        {
                            title: "Tagline",
                            value: page.business.tagline ?? "-"
                        },

                        {
                            title: "Short description",
                            value: page.business.shortDescription ?? "-"
                        },

                        {
                            title: "Long description",
                            value: page.business.longDescription.length > 0 ? page.business.longDescription : "-"
                        }
                    ]} 
                    editOnClick={() => setBusinessEditOpen(true)}/>

                    <BusinessCard 
                    title={"Contact Information"} 
                    label={timeAgo(page.contact.updatedAt)}
                    info={[
                        {
                            title: "Address",
                            value: page.business.address
                                ? [
                                    page.business.address.line1?.length ? page.business.address.line1 : "",
                                    page.business.address.line2?.length ? page.business.address.line2 : "",
                                    page.business.address.region?.length > 0 ? page.business.address.region : "-",
                                    page.business.address.postcode?.length > 0 ? page.business.address.postcode : "-",
                                  ]
                                  .filter(Boolean)
                                  .join(", ")
                                : "-"
                        },

                        {
                            title: "Phone",
                            value: page.contact.phone
                        },

                        {
                            title: "Email",
                            value: page.contact.email
                        },

                        {
                            title: "Website",
                            value: page.contact.website.length > 0 ? page.contact.website : "-"
                        },

                        {
                            title: "WhatsApp",
                            value: page.contact.whatsapp.length > 0 ? page.contact.whatsapp : "-"
                        }
                    ]} 
                   editOnClick={() => setContactEditOpen(true)}/>

            </div>

            <div className="mt-6 bg-white/100 px-6 py-4 shadow-lg rounded-2xl">

                <div className="flex flex-row justify-between mb-3">
                    <div className="flex flex-col gap-0">
                        <h2 className="font-heading tracking-[0.15rem] text-base md:text-xl font-bold uppercase"> Business Details</h2>
                        <h5 className="font-unica text-sm uppercase">Last updated at {timeAgo(page.updatedAt)} </h5>
                    </div>
                    <Button
                        variant="outline"
                        color="black"
                        rounded = {false}
                        onClick={() => setBusinessDetailEditOpen(true)}>
                        Edit
                    </Button>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

                    <BusinessDetailsCard 
                        title={"Established"}
                        value={page.business.established ?? "-"} 
                        icon={<CalendarDays size={25}/>}
                    />

                    <BusinessDetailsCard 
                        title={"Industry"}
                        value={getIndustryLabel(page.business.industry) ?? "-"}
                        icon={<Building2 size={25}/>}
                    />

                    <BusinessDetailsCard 
                        title={"Business Type"}
                        value={getBusinessTypeLabel(page.business.businessType) ?? "-"} 
                        icon={<BriefcaseBusiness size={25}/>}
                    />

                </div>

            </div> 

            <BusinessEditDialog
                open={businessEditOpen}
                onOpenChange={setBusinessEditOpen}
                business={page.business}
                onSave={(business) =>
                    updatePage({
                        business,
                        updatedAt: new Date()
                    })
                }
                
            />

            <ContactEditDialog
                open={contactEditOpen}
                onOpenChange={setContactEditOpen}
                contact={page.contact}
                business={page.business}
                onSave={({ contact, business }) =>
                    updatePage({
                        contact,
                        business,
                    })
                }
            />

           <BusinessDetailsEditDialog
                open={businessDetailEditOpen}
                onOpenChange={setBusinessDetailEditOpen}
                business={page.business}
                onSave={(business) =>
                    updatePage({
                        business,
                    })
                }
            />
        </DashboardContentBase>

        
    );
}

type BusinessCardProps = {
    title: string
    label: string
    info: InfoProps[]
    editOnClick: () => void;
}

function BusinessCard ({ title, info, label, editOnClick }: Readonly<BusinessCardProps>) {
    return (

        <div className="flex flex-col gap-4 bg-white border border-black/10 shadow-lg rounded-2xl px-5 py-4">

            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-0">
                    <h2 className="font-heading text-base md:text-xl tracking-[0.15rem] font-bold uppercase"> {title}</h2>
                    <h5 className="font-unica text-sm uppercase">Last updated {label}</h5>
                </div>
                <Button
                    variant="outline"
                    color="black"
                    rounded = {false}
                    onClick={editOnClick}>
                    Edit
                </Button>
            </div>

            {info.map ((item, index) => (
                <div key={index}>
                    
                    <h3 className="font-semibold font-heading"> {item.title}</h3>
                    <p className="font-germania"> {item.value}</p>
                </div>
            )) }

        </div>

    );
}


type BusinessDetailsCardProps = {
    title: string
    value: string
    icon: React.ReactNode
}

function BusinessDetailsCard ({title, value, icon} : Readonly<BusinessDetailsCardProps>) {

    return (

        <div className="flex flex-row py-2 gap-4"> 

            <div className="flex-start bg-black/10 p-4"> 

                {icon}
            </div>

            <div className="flex flex-col gap-0">
                <h2 className=" font-semibold font-heading"> {title}</h2>
                <h5 className="font-unica text-sm uppercase">{value}</h5>
            </div>

        </div>

    );

}






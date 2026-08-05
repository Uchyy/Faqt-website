import DashboardContentBase from "../../components/ui/DashboardContentBase.tsx";
import { useDashboardData } from "../../context/DashBoardDataContext.tsx";
import Button from "../../components/ui/Button.tsx";
import { useState } from "react";
import ContactEditDialog from "../../components/layout/dashboard/business/ContactEditDialog.tsx";
import BusinessEditDialog from "../../components/layout/dashboard/business/BusinessEditDialog.tsx";
import { BusinessSection } from "../../model/Page.ts";
import { timeAgo } from "../../utils/timeAgo.ts";
import PageCompletion from "../../components/ui/PageCompletion.tsx";

type InfoProps = {
    title: string,
    value: string
}

export default function BusinessInfoPage() {
    const { page, updatePage } = useDashboardData();
    const [businessEditOpen, setBusinessEditOpen] = useState(false);
    const [contactEditOpen, setContactEditOpen] = useState(false);

    return (
        <DashboardContentBase
            title={"Business Information"}
            label="Manage your business information and how customers can contact you">

            <PageCompletion page={page}/>    

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <BusinessCard 
                    title={"Business Information"} 
                    label={timeAgo(page.business.updatedAt)}
                    info={[
                        {
                            title: "Business name",
                            value: page.business.name
                        },

                        {
                            title: "Tagline",
                            value: page.business.tagline
                        },

                        {
                            title: "Short description",
                            value: page.business.shortDescription
                        },

                        {
                            title: "Long description",
                            value: page.business.longDescription.length > 0 ? page.business.longDescription : "Not added yet"
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
                            value: page.contact.website.length > 0 ? page.contact.website : " Not added yet"
                        }
                    ]} 
                   editOnClick={() => setContactEditOpen(true)}/>

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
                onSave={(contact) =>
                    updatePage({
                        contact,
                        updatedAt: new Date()
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
                    <h2 className="font-heading text-base md:text-xl font-bold uppercase"> {title}</h2>
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






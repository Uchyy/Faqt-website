import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../../../context/PageContext";
import { stringifyPage } from "../../../../model/Page";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { HexColorPicker } from "react-colorful";

const styles = [
    {
        id: "minimal",
        title: "Minimal",
        description: "Clean and simple with focus on your message.",
    },
    {
        id: "bold",
        title: "Bold",
        description: "Large heading and strong brand presence.",
    },
    {
        id: "card",
        title: "Card",
        description: "Modern layout with a clean card design.",
    },
];


export default function PageStyle(){

    const context = useContext(PageContext);

    const [selectedStyle,setSelectedStyle] = useState("minimal");
    const [color,setColor] = useState("#3EC7C4");
    const [open,setOpen] = useState(false);


    useEffect(()=>{
        if(!context?.page) return;

        setSelectedStyle(context.page.branding.selectedStyle);
        setColor(context.page.branding.brandColor);

    },[context?.page]);


    const handleSave = ()=>{

        if(!context){
            console.log("No PageContext");
            return;
        }

        const updatedPage = context.updatePage({ branding: {...context.page.branding, selectedStyle, brandColor:color}});

        console.log("UPDATED PAGE:", updatedPage);

        if(updatedPage){
            console.log(stringifyPage(updatedPage));
        }
    };


    return(
        <CollapsibleSection
            title="PAGE STYLE"
            label="CUSTOMIZE HOW YOUR PAGE LOOKS">


            <div className="space-y-6 mt-5">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {styles.map((style)=>(
                        <button
                            key={style.id}
                            onClick={()=>setSelectedStyle(style.id)}
                            className={`
                                text-left rounded-2xl border p-5 transition
                                ${
                                selectedStyle === style.id
                                ? "border-accent ring-2 ring-accent/30"
                                : "border-border hover:border-accent"
                                }
                            `}
                        >

                            <h3 className="font-semibold font-heading">
                                {style.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mt-2">
                                {style.description}
                            </p>

                        </button>
                    ))}

                </div>



                <div>

                    <label className="block mb-3 font-semibold text-muted-foreground font-heading">
                        BRAND COLOUR
                    </label>


                    <div className="relative flex items-center gap-4 rounded-2xl border border-border p-4">

                        <button
                            onClick={()=>setOpen(!open)}
                            className="h-10 w-10 rounded-full border border-border"
                            style={{backgroundColor:color}}
                        />


                        <Input
                            value={color}
                            onChange={setColor}
                        />


                        {open && (
                            <div className="
                                absolute top-16 left-0 z-50
                                rounded-2xl border border-border
                                bg-white shadow-xl p-4
                            ">

                                <HexColorPicker
                                    color={color}
                                    onChange={setColor}
                                />


                                <Button
                                    className="mt-3 w-full"
                                    onClick={()=>setOpen(false)}
                                >
                                    Done
                                </Button>

                            </div>
                        )}

                    </div>

                </div>



                <div className="flex justify-end">
                    <Button onClick={handleSave}>
                        Save changes
                    </Button>
                </div>


            </div>


        </CollapsibleSection>
    );
}
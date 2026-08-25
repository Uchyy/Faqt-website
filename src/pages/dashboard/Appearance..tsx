import DashboardContentBase from "../../components/ui/DashboardContentBase";
import { useDashboardData } from "../../context/DashBoardDataContext";
import { pageStyles } from "../../model/PageStyle.ts";
import HorizontalCarousel from "../../components/ui/HorizontalCarousel.tsx";
import hexToRgba from "../../utils/hexToRgba.tsx"
// react-color does not ship TypeScript declarations.
// @ts-expect-error Missing declaration file for the JavaScript package.
import { SketchPicker } from "react-color";

type ColorResult = {
    hex: string;
    rgb: { a?: number };
};

export default function AppearancePage() {
    const { page, updatePage } = useDashboardData();

    return (
        <DashboardContentBase
            title="Appearance"
            label="Customize how your page looks">

            <div className="space-y-4 py-3 ">
                <span className="font-bold leading-wide font-unica">
                    CHOOSE A THEME
                </span>

                <HorizontalCarousel
                    className=" overflow-hidden mb-3">
                    
                    {pageStyles.map((style) => {

                        return (
                            <div key={style.id} className=" ">
                                <button
                                    type="button"
                                    onClick={() => updatePage({ branding: { ...page.branding, selectedStyle: style.id,  }, }) }
                                    className={` w-full h-full rounded-2xl border text-left transition ${  page.branding.selectedStyle === style.id ? "border-accent ring-2 ring-accent/30 shadow-lg" : "border-border hover:border-accent shadow-sm hover:shadow-lg" } bg-white my-2`}>
                                        
                                    <div className="h-[25vh] overflow-hidden m-3 bg-accent/10">
                                        {style.skeleton}
                                    </div>

                                    <div className="py-4 px-5 h-[10vh]">
                                        <h3 className="font-semibold font-heading">
                                            {style.title}
                                        </h3>

                                        <p className=" text-sm text-muted-foreground center">
                                            {style.description}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </HorizontalCarousel> 

                <div className="flex flex-col justify-between mt-3 bg-white/10 p-5">
                    <span className="font-bold leading-wide font-unica mb-2">
                        CHOOSE A BRAND COLOUR
                    </span>

                    <div className="bg-black/10 w-fit">
                        <SketchPicker
                            color={hexToRgba(
                                page.branding.brandColor.hex,
                                page.branding.brandColor.alpha ?? 1
                            )}
                            onChangeComplete={(color: ColorResult) => {
                                updatePage({
                                    branding: {
                                        ...page.branding,
                                        brandColor: {
                                            hex: color.hex,
                                            alpha: color.rgb.a ?? 1,
                                        },
                                    },
                                });
                            }}
                            styles={{
                                default: {
                                    picker: {
                                        width: "fit-content",
                                        boxShadow: "none",
                                    },      
                                
                                },
                            }}
                        />  
                    </div>                     
                </div> 

            </div>

               

                     
        </DashboardContentBase>
    );
}


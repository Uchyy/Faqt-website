import { useParams } from "@tanstack/react-router";
import { demoPageBold } from "../../demo/demoPage";
import Bold from "./Bold";

export default function PublicPage() {
    const { slug } = useParams({ from: "/$slug" });
    console.log("Slug is ", slug);
    const page = demoPageBold;

    // GET /api/page/slug
    // slug = "portsmouth-dental"

    switch (page.branding.selectedStyle) {
        case "card":
                return (
                    <></>
                );
            break;
        
        case "minimal":
                return (
                        <></>
                );
            break;

        default :
                return <Bold/>
            break;    

    }
}
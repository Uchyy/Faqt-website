import CollapsibleSection from "../../../ui/CollapsibleSection";
import Button from "../../../ui/Button";
import { useContext, useState } from "react";
import { PageContext } from "../../../../context/PageContext";
import { generatePageDetails } from "../../../../utils/generatePageDetails";
import QRCode from "react-qr-code";
import { Copy, Download, ExternalLink } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { demoPageBold } from "../../../../demo/demoPage";

export default function SharePageSection() {

  const context = useContext(PageContext);
  //const page = context?.page;
  const page = demoPageBold;
  const [copied, setCopied] = useState(false);


  const publishPage = () => {

    if (!page) return;
    const { slug, publicUrl } = generatePageDetails(page.business.name);
    context?.updatePage({
      publishing: {
        ...context.page.publishing,
        slug,
        publicUrl,
        isPublished: true,
      },
    });
    
  };


  if (!page.publishing?.isPublished) {

    return (
      <CollapsibleSection
        title="Share your Page"
        bgColor="#3EC7E2"
      >

        <div className="flex flex-col items-center gap-6 py-8">

          <p className="max-w-md text-center text-muted-foreground">
            Publish your page to receive a public link,
            QR code and downloadable promotional materials.
          </p>


          <Button
            onClick={publishPage}
          >
            Publish Page
          </Button>

        </div>

      </CollapsibleSection>
    );
  }


  return (
    <CollapsibleSection
      title="Share your Page"
      label={page.business.name}
      bgColor="#3EC7E2"
    >

      <div className="flex flex-col items-center gap-6 py-6">


        {/* QR CODE CARD */}
        <div className="
          bg-white 
          rounded-2xl 
          p-6 
          shadow-sm
          border
          border-border
        ">

          <QRCode
            value={page.publishing.publicUrl}
            size={220}
          />

        </div>



        {/* URL */}

        <div className="  flex   items-center   gap-3  rounded-xl  bg-white  border  border-border  px-4  py-3">

          <p className=" text-sm  text-muted-foreground break-all">
            {page.publishing.publicUrl}
          </p>


          <CopyToClipboard
            text={page.publishing.publicUrl}
            onCopy={() => {
              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}>

            <button
              className="text-accenthover:scale-110transition">
              <Copy size={18}/>
            </button>
          </CopyToClipboard>

        </div>


        {
          copied && (
            <p className="text-sm text-muted bg-white p-4 rounded-2xl">
              Link copied!
            </p>
          )
        }

        {/* ACTIONS */}

        <div className="flex flex-col gap-3 w-full">
          <Button icon={<Download size={18}/>}>
            Download QR Code
          </Button>

          <Button
            icon={<Download size={18}/>}>
            Download Flyer
          </Button>

          <Button icon={<ExternalLink size={18}/>} >
            View Page
          </Button>

        </div>
      </div>

    </CollapsibleSection>
  );
}
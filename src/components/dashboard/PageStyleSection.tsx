import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext";
import { stringifyPage } from "../../model/Page";
import CollapsibleSection from "../ui/CollapsibleSection";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { HexColorPicker } from "react-colorful";
import FileInput from "../ui/FileInput";

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

export default function PageStyle() {
  const [selectedStyle, setSelectedStyle] = useState("minimal");
  const [color, setColor] = useState("#3EC7C4");
  const [open, setOpen] = useState(false);

  const [logo, setLogo] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [gallery, setGallery] = useState<File[]>([]);
  
    const context = useContext(PageContext);
  
    useEffect(() => {
      if (!context?.page) return;
  
      setSelectedStyle(context.page.selectedStyle);
      setColor(context.page.brandColor);
      setLogo(context.page.logo);
      setGallery(context.page.gallery);
      setCoverImage(context.page.coverImage);
  
    }, [context?.page]);
  
  
    const handleSave = () => {
      const updatedPage = context?.updatePage({ selectedStyle, coverImage, brandColor: color, gallery, logo });
  
      if (!context) {
        console.log("No PageContext available");
        return;
      }
  
      console.log("UPDATED PAGE:", updatedPage);
      if(updatedPage){
        console.log( "Page updated:", stringifyPage(updatedPage) );
      } 
    };
  
  return (
    <CollapsibleSection
      title="PAGE STYLE"
      label="Customize how customers see your public page">

      {/* Hero styles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">

        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`
              text-left rounded-2xl border p-5 transition mb-4
              ${
                selectedStyle === style.id
                  ? "border-accent ring-2 ring-accent/30"
                  : "border-border hover:border-accent"
              }
            `}
          >
            <h3 className="font-semibold text-text font-heading">
              {style.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {style.description}
            </p>

          </button>
        ))}

        <div></div>

        {/* BRAND COLOUR */}
        <div className="w-full">

          <label className="block font-semibold text-muted-foreground font-heading mt-2">
              BRAND COLOUR
          </label>

          <div className="relative mt-3 w-full inline-flex items-center gap-3 border rounded-2xl p-4 mb-4">

              {/* color button */}
              <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full border border-border"
              style={{ backgroundColor: color }}
              />

              <span className="text-sm font-unica text-text mt-4">
                  <Input  value={color} onChange={setColor}  />
              </span>

              

              {/* POPUP */}
              {open && (
              <div className="absolute top-20 right-0 bottom-full mt-3 z-50 bg-white p-3 rounded-xl shadow-xl border border-border ">

                  <HexColorPicker color={color} onChange={setColor} />

                  <Button
                  className="mt-3 w-full"
                  onClick={() => setOpen(false)}
                  >
                  Done
                  </Button>

              </div>
              )}

          </div>
        </div>


        {/* Logo */}
        <FileInput 
          label="LOGO"
          value={logo}
          onChange={setLogo}
          accept="image/png,image/jpeg,image/webp"
          maxFiles={1}
          multiple={false}
        />

        {/* Cover Image */}
        <FileInput
          label="Cover Image"
          value={coverImage}
          onChange={setCoverImage}
          accept="image/png,image/jpeg,image/webp"
          maxFiles={1}
          multiple={false}
        />

        <FileInput
          label="GALLERY"
          description="Add up to 5 images shown on your public page."
          value={gallery}
          onChange={setGallery}
          accept="image/png,image/jpeg,image/webp"
          multiple
          maxFiles={5}
        />

        <div></div>


        <Button onClick={handleSave} className="mt-4">
          Save changes
        </Button>

      </div>  

    </CollapsibleSection>
  );
}
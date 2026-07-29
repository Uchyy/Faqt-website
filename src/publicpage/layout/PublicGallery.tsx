import { Styles } from "../../model/Styles";
import { useBrandTheme } from "../context/BrandThemeContext";

type GalleryProps = {
  gallery: string[];
  style: Styles;
};


export default function PublicGallery({gallery,style, }: Readonly<GalleryProps>) {
  const theme = useBrandTheme();

  if (!gallery.length) return null;


  const getGalleryLayout = () => {
    switch (style) {
      case "minimal":
        return "grid-cols-2 md:grid-cols-3 gap-2";

      case "bold":
        return "grid-cols-2 md:grid-cols-4 gap-5";

      case "card":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4";

      default:
        return "grid-cols-2 gap-4";
    }
  };


  const getImageStyle = () => {
    switch (style) {
      case "minimal":
        return "rounded-lg";

      case "bold":
        return "rounded-[2.5rem] shadow-xl";

      case "card":
        return "rounded-3xl shadow-md p-2";

      default:
        return "rounded-2xl";
    }
  };


  const getGridClass = (index: number) => {
    switch (style) {

      case "minimal":
        // editorial style
        return index === 0
          ? "md:col-span-2 md:row-span-2"
          : "";

      case "bold":
        // asymmetric collage
        if (index % 5 === 0) {
          return "col-span-2 row-span-2";
        }

        if (index % 3 === 0) {
          return "md:translate-y-8";
        }

        return "";


      case "card":
        // featured cards
        return index % 3 === 0 ? "md:col-span-2" : "md:translate-y-8";


      default:
        return "";
    }
  };


  const getSectionStyle = () => {
    switch (style) {

      case "minimal":
        return "max-w-7xl mx-auto";

      case "bold":
        return "px-4";

      case "card":
        return "px-6";

      default:
        return "";
    }
  };


  return (
    <section className={`py-16 ${getSectionStyle()}`}>

      <h2 className="mb-8 text-center font-unica text-2xl tracking-[0.25em]" style={{ color: theme.accent, }}>
        GALLERY
      </h2>

      <div className={` grid ${getGalleryLayout()}`}>
        {gallery.map((image, index) => (

          <div key={index} className={` overflow-hidden border transition duration-300 hover:-translate-y-2 hover:shadow-xl
            ${getImageStyle()} ${getGridClass(index)}`} style={{ borderColor: theme.muted, background: theme.gradient.card,}}>

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />

          </div>

        ))}

      </div>

    </section>
  );
}
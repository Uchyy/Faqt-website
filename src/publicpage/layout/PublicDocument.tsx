import { BusinessDocument } from "../../model/BusinessDocument";
import { FileText, Eye, Download } from "lucide-react";
import { useBrandTheme } from "../context/BrandThemeContext";
import { Styles } from "../../model/Styles";


type PublicDocumentsProps = {
  docs: BusinessDocument[];
  style: Styles;
};


export default function PublicDocument({docs,style, }: Readonly<PublicDocumentsProps>) {

  const theme = useBrandTheme();

  if (!docs.length) return null;

  const getDocumentCardStyle = () => {
    switch (style) {

      case "minimal":
        return {
          card: "rounded-none",
          icon: "rounded-lg",
          button: "rounded-lg",
          section: "px-6",
        };


      case "bold":
        return {
          card: "rounded-full",
          icon: "rounded-full",
          button: "rounded-full",
          section: "px-10",
        };


      case "card":
        return {
          card: "rounded-2xl shadow-lg",
          icon: "rounded-xl",
          button: "rounded-xl",
          section: "px-8",
        };


      default:
        return {
          card: "",
          icon: "",
          button: "",
          section: "px-6",
        };
    }
  };


  const current = getDocumentCardStyle();



  return (
    <section className={`py-12 ${current.section}`}>


      <h2 className="mb-8 text-center font-unica text-2xl tracking-[0.25em]"
        style={{  color: theme.accent,}}>
        DOCUMENTS
      </h2>

      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto">
        {docs.map((doc) => (

          <div
            key={doc.id}
            className={` flex items-center justify-between gap-5 border p-3 md:p-4 transition hover:-translate-y-1 ${current.card}`}
            style={{ background: theme.background, borderColor: theme.muted,}}>

            {/* Document info */}
            <div className="flex min-w-0 items-center gap-4">
              <div className={` flex h-10 w-10 shrink-0 items-center justify-center ${current.icon}`}
                style={{ background: theme.accent, color: theme.background, }}>
                <FileText size={20}/>
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium" style={{ color: theme.foreground, }}>
                  {doc.title}
                </p>

                <p className="text-xs uppercase tracking-widest" style={{ color: theme.accent, }}>
                  Document
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={` border p-2 transition hover:scale-110 ${current.button}`}
                style={{ borderColor: theme.muted, color: theme.accent, }}
                aria-label="View document">
                <Eye size={18}/>
              </a>

              <a
                href={doc.url}
                download
                className={` p-2 transition hover:scale-110 ${current.button}`}
                style={{ background: theme.accent, color: theme.background,}}
                aria-label="Download document">
                <Download size={18}/>
              </a>
            </div>
          </div>

        ))}


      </div>


    </section>
  );
}
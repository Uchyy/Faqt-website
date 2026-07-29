import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FaqtItem } from "../../model/FaqtItem";
import { Styles } from "../../model/Styles";
import { useBrandTheme } from "../context/BrandThemeContext";
import { ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";

type PublicBodyProps = {
  address: string;
  faqts: FaqtItem[];
  style: Styles;
};

export default function FaqtBlock({ faqts, style }: Readonly<PublicBodyProps>) {
  const theme = useBrandTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const getFaqStyle = () => {
    switch (style) {
      case "minimal":
        return "border-b";

      case "bold":
        return "border-b-2";

      case "card":
        return "border-b rounded-none";

      default:
        return "";
    }
  };

  const filteredFaqts = faqts.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);


  return (
    <div className={`md:col-span-6 ${style === "card" ? "border p-6 shadow-lg" : ""}`}
      style={{ borderColor: theme.muted}}>
      <div className="mb-3 flex items-center justify-between"  style={{ borderColor: theme.accent }}>

        <h2 className={`font-unica text-2xl md:tracking-[0.25em] md:text-lg ${ style === "card" ? "" : "w-fit border-y sm:border-y lg:border-0"}`} style={{color: theme.accent, borderColor: theme.accent}}>
          FAQTS
        </h2>


        {faqts.length > 5 && (
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setQuery("");
            }}
            className="transition hover:scale-110"
            style={{ color: theme.accent }}
            aria-label="Search FAQTS" >
            {searchOpen ? <X size={20}/> : <Search size={20}/>}
          </button>
        )}

      </div>


      {searchOpen && (
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQTS..."
          className="mb-4 w-full rounded-xl border p-3 outline-none"
          style={{
            background: theme.background,
            borderColor: theme.muted,
            color: theme.foreground,
          }}
        />
      )}


      <Accordion transition transitionTimeout={200}>

        {filteredFaqts.map((item, idx) => (
          <AccordionItem
            key={`${item.question}-${idx}`}
            className={`mb-3 py-4 ${getFaqStyle()}`}
            style={{ borderColor: theme.muted }}

            header={({ state: { isEnter } }) => (
              <div className="flex items-center justify-between">

                <span className="font-blackOps font-bold uppercase text-left"
                  style={{ color: theme.foreground }}>
                  {item.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${isEnter ? "rotate-180" : ""}`}
                  style={{ color: theme.accent }}
                />

              </div>
            )}>

            <p className="pt-3 leading-7" style={{ color: theme.foreground }}>
              {item.answer}
            </p>

          </AccordionItem>
        ))}

      </Accordion>

    </div>
  );
}
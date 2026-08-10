import React from "react";
import PublicPageNavbar from "./layout/PublicPageNavbar";
import { useBrandTheme } from "./context/BrandThemeContext";
import CircleAvatar from "./ui/CircleAvatar";
import { getBusinessInitials } from "./utils/generateInitals";
import PublicBanner from "./layout/PublicBanner"
import PublicBody from "./layout/PublicBody";
import BoldGallery from "./layout/PublicGallery";
import BoldDocuments from "./layout/PublicDocument";
import PublicFooter from "./layout/PublicFooter";
import CardHero from "./hero/CardHero";
import { PublicStyleProps } from "./model/HeroProps";
import LogoAvatar from "./ui/LogoAvatar";
import getFullAddress from "../utils/getFullAddress";

export default function Card( {page}: Readonly<PublicStyleProps>) {
  const theme = useBrandTheme();
  const logo = page.branding.logo ? (<LogoAvatar src={page.branding.logo} name={page.business.name} />) : (
      <CircleAvatar initials={getBusinessInitials(page.business.name)} />
    );


  return (
    <div className="relative min-h-screen w-full">

      {/* HERO BACKGROUND */}
      <div className=" absolute inset-x-0 top-0 h-[850px] overflow-hidden shadow-[0_8px_6px_-4px_rgba(0,0,0,0.25)] -z-10 mx-5 lg:mx-10 mt-4 "
        style={{ background: page.branding.coverImage
            ? `linear-gradient(to bottom, rgba(255,255,255,0.15), ${theme.background}), url(${page.branding.coverImage}) center/cover` : theme.gradient.hero, }} />

      {/* BANNER */}
      {page.banner && <PublicBanner banner={page.banner} />}

      {/* STICKY NAVBAR */}
      <PublicPageNavbar
        logo={logo}
        style={page.branding.selectedStyle}
        name={page.business.name}
        desc={page.business.shortDescription}
        phone={page.contact.phone}
        address={getFullAddress(page.business.address.region, page.business.address.country, page.business.address.line2,  page.business.address.line2)}
      />

      {/* HERO CONTENT */}
       <div className="absolute inset-x-0 top-0 -z-20 h-[850px] bg-white" />
      <CardHero
        name={page.business.name}
        logo={logo}
        shortDesc={page.business.shortDescription}
        longDesc={page.business.longDescription}
        tagline={page.business.tagline}
      />

      <PublicBody
        style={page.branding.selectedStyle}
        contact={page.contact}
        address={getFullAddress(page.business.address.region, page.business.address.country, page.business.address.line2,  page.business.address.line2)}
        social={page.social}
        faqts={page.faqts}
      />

      <BoldDocuments docs={page.documents} style={page.branding.selectedStyle} />

      <BoldGallery
        style="bold"
        gallery={page.branding.gallery}
      />


      <PublicFooter
        name={page.business.name}
        style={page.branding.selectedStyle}
        shortDesc={page.business.shortDescription}
      />

    </div>
  );
}
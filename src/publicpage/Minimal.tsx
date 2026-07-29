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
import MinimalHero from "./hero/MinimalHero";
import { PublicStyleProps } from "./model/HeroProps";
import LogoAvatar from "./ui/LogoAvatar";

export default function Bold( {page}: Readonly<PublicStyleProps>) {
  const theme = useBrandTheme();
  const logo = page.branding.logo ? (<LogoAvatar src={page.branding.logo} name={page.business.name} />) : (
      <CircleAvatar initials={getBusinessInitials(page.business.name)} />
    );


  return (
    <div className="relative min-h-screen w-full">

      {/* HERO BACKGROUND */}
      <div className=" absolute inset-x-0 top-0 h-[850px] overflow-hidden rounded-b-[4rem] shadow-[0_8px_6px_-4px_rgba(0,0,0,0.25)] -z-10 "
        style={{
          background: page.branding.coverImage
            ? `linear-gradient(to bottom, rgba(255,255,255,0.15), ${theme.background}), url(${page.branding.coverImage}) center/cover`
            : theme.gradient.hero,
        }}
      />


      {/* BANNER */}
      {page.banner && <PublicBanner banner={page.banner} />}


      {/* STICKY NAVBAR */}
      <PublicPageNavbar
        logo={logo}
        style={page.branding.selectedStyle}
        name={page.business.name}
        desc={page.business.shortDescription}
        phone={page.contact.phone}
        address={page.business.address}
      />


      {/* HERO CONTENT */}
      <MinimalHero
        name={page.business.name}
        logo={logo}
        shortDesc={page.business.shortDescription}
        longDesc={page.business.longDescription}
        tagline={page.business.tagline}
      />



      <PublicBody
        style={page.branding.selectedStyle}
        contact={page.contact}
        address={page.business.address}
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
import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import MarketingShell from "@/components/MarketingShell";

const sections = [
  {
    title: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files placed on your browser or device when you visit a website. They allow the website to recognize certain information about your visit and help improve how the website functions.",
      "Some cookies operate only for the duration of a browsing session, while others may remain on your device for a longer period so that settings or preferences can be recognized when you return.",
    ],
  },
  {
    title: "How Finlec Uses Cookies",
    paragraphs: [
      "Finlec may use cookies and similar technologies to support the normal operation of the website, remember user preferences, maintain session-related functions, improve speed and usability, and better understand how visitors interact with the platform.",
      "Cookies may also help Finlec identify technical issues, improve content structure, strengthen security, and make the browsing experience more consistent across visits.",
    ],
  },
  {
    title: "Types of Cookies",
    paragraphs: [
      "The website may use essential cookies that are required for core functionality, functional cookies that remember preferences or convenience settings, performance cookies that help analyze traffic and usage patterns, and security-related cookies that help protect the platform against suspicious or abusive activity.",
      "The exact cookies in use may change from time to time depending on the services, tools, and features being offered through the website.",
    ],
    items: [
      "Essential cookies help pages load correctly, maintain secure sessions, and support basic website functionality.",
      "Functional cookies remember choices such as preferences, selections, or convenience settings that improve repeat visits.",
      "Performance and analytics cookies help Finlec understand website traffic, user interaction patterns, and areas that may need improvement.",
      "Security cookies and related technologies help detect suspicious behaviour, prevent misuse, and protect the website and connected systems.",
    ],
  },
  {
    title: "Cookies and Similar Technologies",
    paragraphs: [
      "In addition to standard browser cookies, the website may use similar technologies such as local storage, session identifiers, analytics tags, or other tools that perform comparable functions in relation to website operation, performance measurement, or service support.",
      "Where such technologies are used, they are treated in the same general spirit as cookies for the purpose of this policy.",
    ],
  },
  {
    title: "Third-Party Cookies",
    paragraphs: [
      "Some cookies or similar technologies may be set through trusted third-party services that support analytics, embedded tools, hosting features, or other operational functions connected with the website.",
      "Where third-party tools are involved, those providers may process information under their own privacy policies and operating terms. Users should review those policies where relevant.",
    ],
  },
  {
    title: "Managing Cookie Preferences",
    paragraphs: [
      "Most internet browsers allow users to review, control, block, or delete cookies through browser settings. Users can usually configure their browser to notify them when cookies are being placed or to refuse some or all cookies entirely.",
      "Please note that disabling essential cookies may affect the availability or proper functioning of certain features or sections of the website.",
    ],
  },
  {
    title: "Impact of Disabling Cookies",
    paragraphs: [
      "If cookies are blocked or removed, some website pages may not display correctly, user preferences may not be remembered, and certain secure or session-based functions may not work as intended.",
      "Limiting cookies may also reduce Finlec's ability to understand website usage trends and improve performance over time.",
    ],
  },
  {
    title: "Policy Changes and Contact",
    paragraphs: [
      "Finlec may update this Cookie Policy from time to time to reflect changes in website practices, technology, legal requirements, or operational needs. The current version will be made available on this page.",
      "If you have any questions about how Finlec uses cookies or similar technologies, you may contact Finlec India at investor@finlec.in or write to 2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Cookie Policy | Finlec",
  description:
    "Read how Finlec uses cookies and similar technologies to support website performance, security, and usability.",
};

export default function CookiePolicyPage() {
  return (
    <MarketingShell>
      <LegalDocumentPage
        title="Cookie Policy"
        intro="This Cookie Policy explains how Finlec uses cookies and similar technologies on its website. It is intended to help users understand what cookies are, why they may be used in connection with website functionality and performance, how third-party tools may interact with them, and how browser settings can affect the availability of cookie-based features."
        sections={[...sections]}
      />
    </MarketingShell>
  );
}

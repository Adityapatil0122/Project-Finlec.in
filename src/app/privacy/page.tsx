import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import MarketingShell from "@/components/MarketingShell";

const sections = [
  {
    title: "About This Policy",
    paragraphs: [
      "This Privacy Policy explains how Finlec collects, uses, stores, protects, and shares personal information through its website and related online services.",
      "This policy is intended to help users understand what information may be collected, why it is collected, how it may be used, and the circumstances in which it may be shared.",
      "By using the website or submitting information through it, you acknowledge the practices described in this policy, subject to applicable law.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "Finlec may collect information that you voluntarily provide when you register, contact us, submit a form, request support, update a profile, or use services available through the website.",
      "This information may include your name, phone number, email address, address, communication details, investment-related preferences, service instructions, and documents or details required for account servicing or compliance processes.",
      "We may also collect technical and usage information such as IP address, browser type, device information, pages visited, session activity, and other website interaction data that helps us understand how the platform is being used.",
    ],
    items: [
      "Contact and identity information such as name, phone number, email address, and address details.",
      "Information submitted through onboarding, profile, support, or service-related forms.",
      "Transaction, servicing, or request-related information submitted in connection with investment support or operational workflows.",
      "Technical and usage data such as browser type, device characteristics, IP address, and website interaction details.",
    ],
  },
  {
    title: "How Information Is Collected",
    paragraphs: [
      "Information may be collected directly from you when you submit it through the website, communicate with Finlec, register for services, or use a website feature that asks for your details.",
      "Information may also be generated automatically through standard website technologies, logs, cookies, and interaction data as you browse or use website features.",
      "In some cases, information may be received from service providers, transaction partners, or other parties who are authorized to support service delivery, verification, compliance, or operational requirements.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "Finlec may use collected information to provide and improve services, respond to requests, support account access, process instructions, maintain records, and communicate important updates relating to the website or services.",
      "Information may also be used to verify identity, prevent misuse or fraud, strengthen security, maintain internal records, perform operational analysis, improve website functionality, and comply with legal, audit, or regulatory requirements.",
      "Where permitted, information may also be used to share updates about relevant services, features, or communications connected with your relationship with Finlec.",
    ],
  },
  {
    title: "Purpose of Processing",
    paragraphs: [
      "Depending on the context, Finlec may process personal information for customer support, account-related actions, service fulfilment, security review, operational administration, complaint handling, fraud prevention, analytics, regulatory reporting, and internal quality control.",
      "Information may also be used to document user instructions, maintain audit trails, evaluate platform performance, and protect the legitimate interests of the website, its users, and connected service systems.",
    ],
  },
  {
    title: "Sharing of Information",
    paragraphs: [
      "Finlec does not sell your personal information as part of its ordinary website operations.",
      "Information may be shared with service providers, technology vendors, transaction platforms, registrar or payment partners, compliance partners, professional advisers, auditors, or regulatory authorities where such sharing is reasonably necessary to provide services, complete transactions, meet lawful requests, or comply with legal obligations.",
      "Any such sharing is limited to what is reasonably necessary for the relevant purpose and may remain subject to confidentiality, contractual, technical, or regulatory safeguards where applicable.",
    ],
  },
  {
    title: "Disclosure in Special Circumstances",
    paragraphs: [
      "Finlec may disclose information where required to comply with law, regulatory instruction, court order, audit process, enforcement request, fraud investigation, or legitimate security review.",
      "Information may also be disclosed where reasonably necessary to protect the rights, safety, operations, or legal interests of Finlec, its users, service partners, or the public, subject to applicable law.",
    ],
  },
  {
    title: "Cookies and Usage Data",
    paragraphs: [
      "Finlec may use cookies and similar technologies to support core website functions, remember preferences, maintain sessions where required, understand user interaction with the website, and improve overall performance and usability.",
      "Usage data collected through such tools may help Finlec analyze traffic, identify areas for improvement, and support a more consistent user experience. More detailed information is available in the separate Cookie Policy.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "Finlec uses reasonable administrative, technical, and organizational safeguards to protect personal information against unauthorized access, alteration, misuse, loss, or disclosure.",
      "While reasonable care is taken to protect information, no website, network, or digital transmission method can be guaranteed to be completely secure at all times. Users should also take appropriate care in relation to their own devices, credentials, and communication channels.",
    ],
  },
  {
    title: "Retention of Information",
    paragraphs: [
      "Finlec may retain personal information for as long as it is reasonably necessary for the purposes for which it was collected, including servicing, record-keeping, compliance, audit, fraud prevention, dispute resolution, and legal obligations.",
      "The length of retention may vary depending on the nature of the information, the services involved, and the requirements of applicable law or regulation.",
    ],
  },
  {
    title: "Your Choices and Corrections",
    paragraphs: [
      "You may contact Finlec to request reasonable correction or updating of personal information that you have provided, subject to applicable law, identity verification, and operational requirements.",
      "You may also choose not to provide certain information, but doing so may affect the availability of some features, services, or support processes that depend on that information.",
    ],
  },
  {
    title: "Third-Party Websites and Services",
    paragraphs: [
      "The website may include links to third-party platforms, service providers, payment channels, registrars, regulators, or informational resources for convenience or service support.",
      "Finlec is not responsible for the privacy practices, security controls, or content of external websites or services that are not directly operated by Finlec. Users should review the relevant privacy notices of such third parties before sharing information with them.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "The website is intended for lawful use by persons who are competent to submit information and interact with the services. Finlec does not knowingly collect personal information directly from children through independent use of the website without appropriate authorization.",
      "If you believe that personal information relating to a child has been provided improperly through the website, you may contact Finlec so that the matter can be reviewed appropriately.",
    ],
  },
  {
    title: "Policy Changes and Contact",
    paragraphs: [
      "Finlec may revise this Privacy Policy from time to time to reflect changes in services, law, operations, or compliance requirements. The latest version will be made available on this page.",
      "If you have any questions about this Privacy Policy or the handling of personal information, you may contact Finlec India at investor@finlec.in or write to 2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy | Finlec",
  description:
    "Read how Finlec collects, uses, protects, and shares personal information on its website and investor services.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <LegalDocumentPage
        title="Privacy Policy"
        intro="This Privacy Policy describes how Finlec handles personal information collected through its website and related online services. It explains the general privacy practices that apply when users visit the website, submit information, use digital features, interact with service forms, communicate with Finlec, or rely on website-based tools and related support processes."
        sections={[...sections]}
      />
    </MarketingShell>
  );
}

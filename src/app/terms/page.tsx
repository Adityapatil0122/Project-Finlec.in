import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import MarketingShell from "@/components/MarketingShell";

const sections = [
  {
    title: "About These Terms",
    paragraphs: [
      "These Terms of Use apply to your access to and use of the Finlec website, calculators, informational pages, support forms, and any other online features or services made available through this platform.",
      "By visiting, browsing, or using this website, you agree to be bound by these terms and by all applicable laws and regulations. If you do not agree with these terms, you should not use the website or rely on the information provided through it.",
      "These terms are intended to explain the basis on which the website is made available, the responsibilities of users, and the limits that apply to the content and services offered on the platform.",
    ],
  },
  {
    title: "Definitions",
    paragraphs: [
      "In these Terms of Use, certain words are used in a specific sense for clarity and consistency across the website and related services.",
    ],
    items: [
      "\"Finlec\", \"we\", \"our\", or \"us\" refers to Finlec India and the website, tools, content, and related digital services operated under the Finlec name.",
      "\"Website\" refers to the Finlec website, its pages, calculators, forms, content, and any related online interfaces made available through this domain or connected pages.",
      "\"User\", \"you\", or \"your\" refers to any visitor, customer, applicant, or other person who accesses, browses, submits information through, or otherwise uses the website.",
      "\"Services\" refers to website-based informational services, calculators, mutual fund discovery features, investment-related support content, onboarding or servicing forms, and associated digital functionality.",
      "\"Personal Information\" refers to information that may identify you directly or indirectly, including contact, identity, profile, communication, or service-related information submitted through the website.",
      "\"Third-Party Services\" refers to payment channels, registrar systems, banking partners, service providers, technology vendors, embedded tools, or other external platforms that may interact with parts of the user journey.",
    ],
  },
  {
    title: "Use of the Website",
    paragraphs: [
      "Finlec provides general information relating to mutual funds, investing tools, calculators, educational material, and service-related support to help users better understand investment products and processes.",
      "The material on this website is designed to support awareness and informed decision-making. However, the website does not replace independent judgment, suitability analysis, or professional advice tailored to your personal financial circumstances.",
      "Your use of the website must always be lawful, genuine, and consistent with the intended purpose of the platform.",
    ],
  },
  {
    title: "Eligibility and User Declarations",
    paragraphs: [
      "By using the website, you represent that you have the legal capacity to enter into binding terms and to provide information through the website for legitimate purposes.",
      "If you are using the website on behalf of another person, family member, or entity, you represent that you are appropriately authorized to do so and that the information you provide is submitted lawfully.",
      "Finlec may rely on declarations, consents, and representations made through the website unless there is a clear reason to believe that such information is inaccurate or unauthorized.",
    ],
  },
  {
    title: "User Responsibilities",
    paragraphs: [
      "You are responsible for ensuring that any information provided by you through forms, account registration, support requests, or any other interaction with the website is true, complete, and current.",
      "You agree not to misuse the website, interfere with its normal operation, attempt unauthorized access, upload malicious content, or use the platform in a manner that may harm Finlec, other users, or connected third-party systems.",
      "Where credentials, account access, or secure areas are involved, you are responsible for maintaining confidentiality and for all actions carried out through your access unless the issue arises due to Finlec's own failure.",
    ],
  },
  {
    title: "Nature of Information and No Advice",
    paragraphs: [
      "All content made available on the website is for general information and educational purposes only. It should not be interpreted as legal advice, tax advice, a guarantee of performance, or a recommendation that any product, strategy, or transaction is suitable for a particular person.",
      "Any references to returns, performance, features, risk categories, or illustrations are provided only to help users understand investment concepts. Market conditions, taxation, scheme rules, and personal circumstances may change, and they can materially affect the suitability and outcome of an investment.",
      "Mutual fund investments are subject to market risk. Users should carefully read all relevant scheme documents, disclosures, and official product materials before making any investment decision.",
    ],
  },
  {
    title: "Investor Responsibility and Risk Acknowledgement",
    paragraphs: [
      "Investment decisions carry financial risk, including the possible loss of capital, changes in market value, liquidity constraints, tax consequences, and delays that may arise from banking or transaction processes.",
      "The website may help users compare, understand, or discover products, but final investment responsibility remains with the investor. Users are expected to review official offer documents, scheme information documents, key information memoranda, risk factors, and any applicable regulatory disclosures before acting.",
      "Past performance, historical returns, category rankings, model outputs, and calculator illustrations should not be treated as a guarantee of future results.",
    ],
  },
  {
    title: "Transactions and Third-Party Services",
    paragraphs: [
      "Certain parts of the user journey may involve third-party platforms, registrars, payment systems, banking channels, technology providers, or partner infrastructure. Their separate terms, privacy practices, process flows, and operational requirements may also apply.",
      "Finlec may rely on such external systems for transactions, servicing steps, verification workflows, or communications. Delays, service interruptions, technical errors, or operational issues arising from third-party systems may affect the availability or completion of certain actions.",
      "Finlec is not responsible for failures caused solely by external entities or systems that are outside its direct control, although reasonable efforts may be made to assist users where possible.",
    ],
  },
  {
    title: "External Links and Linked Websites",
    paragraphs: [
      "The website may contain links to external websites, partner pages, registrars, exchanges, regulators, banks, or other third-party resources for convenience, reference, or transaction support.",
      "Such links do not automatically imply endorsement, warranty, or control by Finlec. Once you leave the Finlec website, your use of an external website will be governed by the terms, privacy policy, and operational practices of that third party.",
      "Finlec is not responsible for the availability, content, security, or practices of external websites that are not directly operated by Finlec.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "The website, including its brand assets, text, layout, calculators, graphics, design elements, and original material, is owned by or licensed to Finlec and is protected under applicable intellectual property laws.",
      "You may access and use the website for personal, lawful, and non-commercial purposes. You may not copy, reproduce, modify, republish, distribute, create derivative works from, or commercially exploit any part of the website without prior written permission, except where the law expressly permits limited use.",
    ],
  },
  {
    title: "Permitted and Prohibited Use",
    paragraphs: [
      "Users may access the website for lawful informational, planning, comparison, onboarding, or support-related purposes that align with the intended functionality of the platform.",
      "Users must not attempt to reverse engineer any part of the website, scrape content in a way that harms website operations, bypass security controls, impersonate another person, introduce malware, or submit information that is unlawful, harmful, defamatory, or misleading.",
      "Finlec reserves the right to monitor misuse, protect its systems, and take appropriate technical or legal action where misuse is detected or reasonably suspected.",
    ],
  },
  {
    title: "Availability, Accuracy, and Limitation of Liability",
    paragraphs: [
      "Finlec seeks to maintain the website with reasonable care, but it does not guarantee uninterrupted access, complete accuracy at all times, continuous availability, or the absence of technical defects, delays, or interruptions.",
      "The website and its content are provided on an as-available basis. To the fullest extent permitted by law, Finlec shall not be liable for any indirect, incidental, special, consequential, or market-related loss arising from use of the website, inability to access the website, reliance on information made available on the platform, or delays caused by external systems.",
      "Nothing on the website should be treated as a promise of specific results, assured returns, or uninterrupted service performance.",
    ],
  },
  {
    title: "Suspension, Restriction, and Termination",
    paragraphs: [
      "Finlec may suspend, restrict, or terminate access to any part of the website where reasonably necessary for maintenance, compliance, security, suspected misuse, technical review, operational upgrades, or protection of users and connected systems.",
      "Finlec may also decline to process requests or interactions where information appears incomplete, inaccurate, unauthorized, fraudulent, or inconsistent with applicable rules, policy requirements, or operational safeguards.",
    ],
  },
  {
    title: "Indemnity",
    paragraphs: [
      "You agree to be responsible for claims, losses, or liabilities arising from your misuse of the website, your breach of these Terms of Use, your violation of law, or your submission of unauthorized, false, or infringing material through the website.",
      "This does not apply to the extent a claim arises directly from Finlec's own proven misconduct or a legal responsibility that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Changes to the Website and Terms",
    paragraphs: [
      "Finlec may change, suspend, modify, or discontinue any part of the website, its content, or its services at any time where required for business, regulatory, operational, maintenance, or security reasons.",
      "Finlec may also revise these Terms of Use from time to time. Continued use of the website after any such revision will constitute acceptance of the updated terms as posted on this page.",
    ],
  },
  {
    title: "Governing Law and Contact",
    paragraphs: [
      "These Terms of Use are governed by the laws of India. Any dispute arising out of or relating to the use of this website shall be subject to the jurisdiction of the competent courts in Pune, Maharashtra, unless applicable law requires otherwise.",
      "For questions regarding these terms or the use of the website, you may contact Finlec India at investor@finlec.in or write to 2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Terms of Use | Finlec",
  description:
    "Read the Terms of Use governing access to the Finlec website, tools, and investor services.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <LegalDocumentPage
        title="Terms of Use"
        intro="Please read these Terms of Use carefully before using the Finlec website. These terms explain the basis on which the website is made available, the responsibilities that apply to users, the limits attached to informational and transaction-related features, and the rules that govern your use of Finlec's website, calculators, forms, and related online services."
        sections={[...sections]}
      />
    </MarketingShell>
  );
}

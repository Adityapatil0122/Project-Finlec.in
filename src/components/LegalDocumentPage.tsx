type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

type LegalDocumentPageProps = {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
};

export default function LegalDocumentPage({
  title,
  intro,
  sections,
}: LegalDocumentPageProps) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <article className="mx-auto max-w-[1500px]">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 text-[15px] leading-8 text-slate-700 sm:text-base">
          {intro}
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate-700 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items?.length ? (
                <ul className="mt-4 list-disc space-y-3 pl-6 text-[15px] leading-8 text-slate-700 sm:text-base">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}

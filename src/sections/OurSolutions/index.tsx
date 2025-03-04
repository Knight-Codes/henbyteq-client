import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/components/ui/separator";
import { ExpandArrowSVG, CollapseArrowSVG } from "@/assets/svgs";

const solutions = [
  {
    title: "AI productivity tools",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    infographics: [
      {
        label: "home automation",
        image:
          "https://s3-alpha-sig.figma.com/img/3bbf/90ae/dcf1981ae6a2945c3e1979b1f7bb506e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Phr--G8HE85~l05m8PcxFDlDREp8lTDQ~a~vlR49~vS4N5b7J88P4~355yQJ6M0vbolMZErI-LhpGVImTKIfK1PZTmEo1JXYVtCpwai6pvjGOAtnq1q2k6aloCbx~X-YZCyakeALaZdoDAArIZJ5kz1SzAsmsC561AMRNg3Yeplw~SYlf5aKMmXSGe28RSyUDXVYvbqaqLapsyYCExtq4aVP2MfQ66~jktlJ6KsbNJzQBHL9t76xRrCpA6fr0~qunJYFJUOYk2~PFjOISC1yUWqy4WtXibBYMU-nGy2p5nJuEYuRCryxDQ-mz~pAcCvsQduPOih~gnEOHhqtRuAEEQ__",
      },
      {
        label: "intelligent energy management",
        image:
          "https://s3-alpha-sig.figma.com/img/d649/37f5/6fac681f463c2fa03460933b2626bda3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbdlxInJSerQgJs3RYsNO8CRPQmuKgC8XyO1VPGMtOs3diXwFU-Jw41IWxuplrfmRL~llHs2y1oyYE9A3eAnthG7a8hDDLGwdYjSq50HIp6cx-PJXBqZ6kyPmzy0F990DydSZ9XaFgQ~DDghWu7U-KVBZA2C6z9LpXF2u3vxCi65XxZdcqx~lVKO189KaM4oBDUip~QLzpjXX~bbdDHMetcgy1G50zpHzSFrzTmijWQ0Ad5RpuBQqOVnKOEPs3QkEDcMCj6sKnw3GvN25CDlp~aAdthnBQxWjm7gHQW6VJGPxHbr8I1rpCsmfs7iAbPWKjXJFhEdYVmKIsyYPleIyw__",
      },
      {
        label: "industrial IoT",
        image:
          "https://s3-alpha-sig.figma.com/img/46c8/f7e3/eabcb55799d54b4bfc4f5440aea88f97?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMi3L3FV7dMOfcM4kL56uQe9rka4cw9Uy9sGRknxLNF6sBdE3k9AGrc9cCXaD2G9G-5dTNKufH3T3ZOtIWj7wVcCv-UUjP1zpx-EyWeeGj6vxFi0Pelm~~NNlw39ChdtfTpq5KHjG2nqy7Gam9QWNv1LoZ0CAe733vJdfTAyNbXs72iBKdJnbURESQREYfhBN72dPNsQLmU8xNZl~AYfOdGxuMyQSviF6xLqs0Cb4EXVCu4HqpKl2famU6TRlpeKBgeDHY1ylIi2nqPd323ObE6yWACc1WniCxKYLdQkBykr1FVyUJd~rjx6WuQLh8DGqR8fbChUYnNclkETzTW7Eg__",
      },
      {
        label: "smart healthcare",
        image:
          "https://s3-alpha-sig.figma.com/img/8c76/f06b/35f112bc9528802c796ec644f6afc823?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kqG33QPoz2nlUSczm8PmDDD4ZSriJkPtdJoLUWEUbzb-lzEGWOfxjGBvY8AAJSuCtvybKumf3Pii9iiHidhYu6rMzkMMQEyzV9TDvGre7d-ELDFMIq1h3hHuQvUBkj64Jqwngt4LHExb3x3i7iHQgx84lZs6mc5Myte2HOsuxX-ewWdligm3EEv86IR-SC5eQ8oTwnidPPeSFy3Tjhc8bT2ixnwiZ0aDxY17ZnBPIb7xQOxoVbAGpc3JYWQFrwzNFlqTOY7Yry8YGUJLUUg4LeAYQdKh7~UuawRJEVqWqKJ7dl5jdRuZ1ohHOZ82Orrr964eysCgoaWc5giA1-W8Qw__",
      },
    ],
  },
  {
    title: "Smart IoT Ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    infographics: [
      {
        label: "home automation",
        image:
          "https://s3-alpha-sig.figma.com/img/3bbf/90ae/dcf1981ae6a2945c3e1979b1f7bb506e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Phr--G8HE85~l05m8PcxFDlDREp8lTDQ~a~vlR49~vS4N5b7J88P4~355yQJ6M0vbolMZErI-LhpGVImTKIfK1PZTmEo1JXYVtCpwai6pvjGOAtnq1q2k6aloCbx~X-YZCyakeALaZdoDAArIZJ5kz1SzAsmsC561AMRNg3Yeplw~SYlf5aKMmXSGe28RSyUDXVYvbqaqLapsyYCExtq4aVP2MfQ66~jktlJ6KsbNJzQBHL9t76xRrCpA6fr0~qunJYFJUOYk2~PFjOISC1yUWqy4WtXibBYMU-nGy2p5nJuEYuRCryxDQ-mz~pAcCvsQduPOih~gnEOHhqtRuAEEQ__",
      },
      {
        label: "intelligent energy management",
        image:
          "https://s3-alpha-sig.figma.com/img/d649/37f5/6fac681f463c2fa03460933b2626bda3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbdlxInJSerQgJs3RYsNO8CRPQmuKgC8XyO1VPGMtOs3diXwFU-Jw41IWxuplrfmRL~llHs2y1oyYE9A3eAnthG7a8hDDLGwdYjSq50HIp6cx-PJXBqZ6kyPmzy0F990DydSZ9XaFgQ~DDghWu7U-KVBZA2C6z9LpXF2u3vxCi65XxZdcqx~lVKO189KaM4oBDUip~QLzpjXX~bbdDHMetcgy1G50zpHzSFrzTmijWQ0Ad5RpuBQqOVnKOEPs3QkEDcMCj6sKnw3GvN25CDlp~aAdthnBQxWjm7gHQW6VJGPxHbr8I1rpCsmfs7iAbPWKjXJFhEdYVmKIsyYPleIyw__",
      },
      {
        label: "industrial IoT",
        image:
          "https://s3-alpha-sig.figma.com/img/46c8/f7e3/eabcb55799d54b4bfc4f5440aea88f97?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMi3L3FV7dMOfcM4kL56uQe9rka4cw9Uy9sGRknxLNF6sBdE3k9AGrc9cCXaD2G9G-5dTNKufH3T3ZOtIWj7wVcCv-UUjP1zpx-EyWeeGj6vxFi0Pelm~~NNlw39ChdtfTpq5KHjG2nqy7Gam9QWNv1LoZ0CAe733vJdfTAyNbXs72iBKdJnbURESQREYfhBN72dPNsQLmU8xNZl~AYfOdGxuMyQSviF6xLqs0Cb4EXVCu4HqpKl2famU6TRlpeKBgeDHY1ylIi2nqPd323ObE6yWACc1WniCxKYLdQkBykr1FVyUJd~rjx6WuQLh8DGqR8fbChUYnNclkETzTW7Eg__",
      },
      {
        label: "smart healthcare",
        image:
          "https://s3-alpha-sig.figma.com/img/8c76/f06b/35f112bc9528802c796ec644f6afc823?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kqG33QPoz2nlUSczm8PmDDD4ZSriJkPtdJoLUWEUbzb-lzEGWOfxjGBvY8AAJSuCtvybKumf3Pii9iiHidhYu6rMzkMMQEyzV9TDvGre7d-ELDFMIq1h3hHuQvUBkj64Jqwngt4LHExb3x3i7iHQgx84lZs6mc5Myte2HOsuxX-ewWdligm3EEv86IR-SC5eQ8oTwnidPPeSFy3Tjhc8bT2ixnwiZ0aDxY17ZnBPIb7xQOxoVbAGpc3JYWQFrwzNFlqTOY7Yry8YGUJLUUg4LeAYQdKh7~UuawRJEVqWqKJ7dl5jdRuZ1ohHOZ82Orrr964eysCgoaWc5giA1-W8Qw__",
      },
    ],
  },
  {
    title: "Next-Gen UX & Service Design Tools",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    infographics: [
      {
        label: "home automation",
        image:
          "https://s3-alpha-sig.figma.com/img/3bbf/90ae/dcf1981ae6a2945c3e1979b1f7bb506e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Phr--G8HE85~l05m8PcxFDlDREp8lTDQ~a~vlR49~vS4N5b7J88P4~355yQJ6M0vbolMZErI-LhpGVImTKIfK1PZTmEo1JXYVtCpwai6pvjGOAtnq1q2k6aloCbx~X-YZCyakeALaZdoDAArIZJ5kz1SzAsmsC561AMRNg3Yeplw~SYlf5aKMmXSGe28RSyUDXVYvbqaqLapsyYCExtq4aVP2MfQ66~jktlJ6KsbNJzQBHL9t76xRrCpA6fr0~qunJYFJUOYk2~PFjOISC1yUWqy4WtXibBYMU-nGy2p5nJuEYuRCryxDQ-mz~pAcCvsQduPOih~gnEOHhqtRuAEEQ__",
      },
      {
        label: "intelligent energy management",
        image:
          "https://s3-alpha-sig.figma.com/img/d649/37f5/6fac681f463c2fa03460933b2626bda3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbdlxInJSerQgJs3RYsNO8CRPQmuKgC8XyO1VPGMtOs3diXwFU-Jw41IWxuplrfmRL~llHs2y1oyYE9A3eAnthG7a8hDDLGwdYjSq50HIp6cx-PJXBqZ6kyPmzy0F990DydSZ9XaFgQ~DDghWu7U-KVBZA2C6z9LpXF2u3vxCi65XxZdcqx~lVKO189KaM4oBDUip~QLzpjXX~bbdDHMetcgy1G50zpHzSFrzTmijWQ0Ad5RpuBQqOVnKOEPs3QkEDcMCj6sKnw3GvN25CDlp~aAdthnBQxWjm7gHQW6VJGPxHbr8I1rpCsmfs7iAbPWKjXJFhEdYVmKIsyYPleIyw__",
      },
      {
        label: "industrial IoT",
        image:
          "https://s3-alpha-sig.figma.com/img/46c8/f7e3/eabcb55799d54b4bfc4f5440aea88f97?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMi3L3FV7dMOfcM4kL56uQe9rka4cw9Uy9sGRknxLNF6sBdE3k9AGrc9cCXaD2G9G-5dTNKufH3T3ZOtIWj7wVcCv-UUjP1zpx-EyWeeGj6vxFi0Pelm~~NNlw39ChdtfTpq5KHjG2nqy7Gam9QWNv1LoZ0CAe733vJdfTAyNbXs72iBKdJnbURESQREYfhBN72dPNsQLmU8xNZl~AYfOdGxuMyQSviF6xLqs0Cb4EXVCu4HqpKl2famU6TRlpeKBgeDHY1ylIi2nqPd323ObE6yWACc1WniCxKYLdQkBykr1FVyUJd~rjx6WuQLh8DGqR8fbChUYnNclkETzTW7Eg__",
      },
      {
        label: "smart healthcare",
        image:
          "https://s3-alpha-sig.figma.com/img/8c76/f06b/35f112bc9528802c796ec644f6afc823?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kqG33QPoz2nlUSczm8PmDDD4ZSriJkPtdJoLUWEUbzb-lzEGWOfxjGBvY8AAJSuCtvybKumf3Pii9iiHidhYu6rMzkMMQEyzV9TDvGre7d-ELDFMIq1h3hHuQvUBkj64Jqwngt4LHExb3x3i7iHQgx84lZs6mc5Myte2HOsuxX-ewWdligm3EEv86IR-SC5eQ8oTwnidPPeSFy3Tjhc8bT2ixnwiZ0aDxY17ZnBPIb7xQOxoVbAGpc3JYWQFrwzNFlqTOY7Yry8YGUJLUUg4LeAYQdKh7~UuawRJEVqWqKJ7dl5jdRuZ1ohHOZ82Orrr964eysCgoaWc5giA1-W8Qw__",
      },
    ],
  },
  {
    title: "Sustainable Consumer Products",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    infographics: [
      {
        label: "home automation",
        image:
          "https://s3-alpha-sig.figma.com/img/3bbf/90ae/dcf1981ae6a2945c3e1979b1f7bb506e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Phr--G8HE85~l05m8PcxFDlDREp8lTDQ~a~vlR49~vS4N5b7J88P4~355yQJ6M0vbolMZErI-LhpGVImTKIfK1PZTmEo1JXYVtCpwai6pvjGOAtnq1q2k6aloCbx~X-YZCyakeALaZdoDAArIZJ5kz1SzAsmsC561AMRNg3Yeplw~SYlf5aKMmXSGe28RSyUDXVYvbqaqLapsyYCExtq4aVP2MfQ66~jktlJ6KsbNJzQBHL9t76xRrCpA6fr0~qunJYFJUOYk2~PFjOISC1yUWqy4WtXibBYMU-nGy2p5nJuEYuRCryxDQ-mz~pAcCvsQduPOih~gnEOHhqtRuAEEQ__",
      },
      {
        label: "intelligent energy management",
        image:
          "https://s3-alpha-sig.figma.com/img/d649/37f5/6fac681f463c2fa03460933b2626bda3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbdlxInJSerQgJs3RYsNO8CRPQmuKgC8XyO1VPGMtOs3diXwFU-Jw41IWxuplrfmRL~llHs2y1oyYE9A3eAnthG7a8hDDLGwdYjSq50HIp6cx-PJXBqZ6kyPmzy0F990DydSZ9XaFgQ~DDghWu7U-KVBZA2C6z9LpXF2u3vxCi65XxZdcqx~lVKO189KaM4oBDUip~QLzpjXX~bbdDHMetcgy1G50zpHzSFrzTmijWQ0Ad5RpuBQqOVnKOEPs3QkEDcMCj6sKnw3GvN25CDlp~aAdthnBQxWjm7gHQW6VJGPxHbr8I1rpCsmfs7iAbPWKjXJFhEdYVmKIsyYPleIyw__",
      },
      {
        label: "industrial IoT",
        image:
          "https://s3-alpha-sig.figma.com/img/46c8/f7e3/eabcb55799d54b4bfc4f5440aea88f97?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lMi3L3FV7dMOfcM4kL56uQe9rka4cw9Uy9sGRknxLNF6sBdE3k9AGrc9cCXaD2G9G-5dTNKufH3T3ZOtIWj7wVcCv-UUjP1zpx-EyWeeGj6vxFi0Pelm~~NNlw39ChdtfTpq5KHjG2nqy7Gam9QWNv1LoZ0CAe733vJdfTAyNbXs72iBKdJnbURESQREYfhBN72dPNsQLmU8xNZl~AYfOdGxuMyQSviF6xLqs0Cb4EXVCu4HqpKl2famU6TRlpeKBgeDHY1ylIi2nqPd323ObE6yWACc1WniCxKYLdQkBykr1FVyUJd~rjx6WuQLh8DGqR8fbChUYnNclkETzTW7Eg__",
      },
      {
        label: "smart healthcare",
        image:
          "https://s3-alpha-sig.figma.com/img/8c76/f06b/35f112bc9528802c796ec644f6afc823?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kqG33QPoz2nlUSczm8PmDDD4ZSriJkPtdJoLUWEUbzb-lzEGWOfxjGBvY8AAJSuCtvybKumf3Pii9iiHidhYu6rMzkMMQEyzV9TDvGre7d-ELDFMIq1h3hHuQvUBkj64Jqwngt4LHExb3x3i7iHQgx84lZs6mc5Myte2HOsuxX-ewWdligm3EEv86IR-SC5eQ8oTwnidPPeSFy3Tjhc8bT2ixnwiZ0aDxY17ZnBPIb7xQOxoVbAGpc3JYWQFrwzNFlqTOY7Yry8YGUJLUUg4LeAYQdKh7~UuawRJEVqWqKJ7dl5jdRuZ1ohHOZ82Orrr964eysCgoaWc5giA1-W8Qw__",
      },
    ],
  },
];

const SolutionCard = ({
  index,
  title,
  description,
  infographics,
}: {
  index: number;
  title: string;
  description?: string;
  infographics: { label: string; image: string }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  return (
    <div className="w-full flex flex-col items-start justify-between p-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="max-w-[280px] sm:max-w-[100%] font-cinzel tracking-wide text-xl sm:text-3xl bg-gradient-to-r from-white to-white/30 inline-block text-transparent bg-clip-text mt-4">
          <span className="mr-2 sm:mr-16 font-cinzel">0{index + 1}</span>{" "}
          {title}
        </h1>

        <div onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <CollapseArrowSVG className="cursor-pointer" />
          ) : (
            <ExpandArrowSVG className="cursor-pointer" />
          )}
        </div>
      </div>

      {isExpanded && (
        <>
          {description && (
            <p className="mt-12 text-[#9C9C9C] text-left font-manrope text-lg font-light leading-8 max-w-[768px] border-l-2 border-l-white/60 pl-8">
              {description}
            </p>
          )}
          <div className="w-full mt-12 flex flex-col sm:flex-row items-start justify-between gap-12">
            {infographics.map((infographic, infographicIndex) => (
              <div key={infographicIndex} className="relative">
                <img
                  src={infographic.image}
                  alt={infographic.label}
                  className="w-full h-[200px] object-cover bg-black/80"
                />
                <div className="absolute inset-0 bg-black/50" />
                <p className="capitalize text-center font-alegreya text-xl font-medium leading-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[150px]">
                  {infographic.label}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const OurSolutions = () => {
  return (
    <section id="services">
      <div className="bg-gradient-to-br from-[#2A2A2A] to-[#121212] text-white py-24">
        <div className="text-center flex flex-col items-center mb-8 sm:mb-24">
          <h3 className="text-gray-400 mb-2 tracking-wider text-md font-alegreya">
            Discover Our Solutions
          </h3>

          <h2 className="text-white/80 text-3xl tracking-wider font-cinzel mt-4 max-w-[800px]">
            Experience AI-powered innovation that enhances everyday life.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:px-10 2xl:px-50">
          {solutions.map((solution, index) => (
            <Fragment key={index}>
              <SolutionCard
                key={index}
                index={index}
                title={solution.title}
                description={solution.description}
                infographics={solution.infographics}
              />
              {index < solutions.length - 1 && (
                <Separator className="w-full bg-white/40 h-[1px]" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

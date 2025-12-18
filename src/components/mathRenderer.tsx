import { convertRawtoLatex } from "@/helper/convertRawtoLatex";
import React, { useCallback } from "react";
import { InlineMath } from "react-katex";

type MathRendererProps = {
  text: string;
};
const MathRenderer = ({ text }: MathRendererProps) => {
  const convertedTexts = useCallback(
    (text: string) => {
      const convertedText = convertRawtoLatex(text);
      const parts = convertedText.split(/(\$[^$]+\$)/g);
      return parts;
    },
    [text],
  );

  return (
    <>
      {convertedTexts(text).map((part, index) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const latex = part.slice(1, -1);
          return <InlineMath key={index} math={latex} />;
        }
        return (
          <span key={index} className="space-x-1">
            {part}
          </span>
        );
      })}
    </>
  );
};

export default MathRenderer;

// // components/MathRenderer.tsx
// import React, { useMemo } from "react";
// import MathJax from "react-mathjax";
// import { convertRawtoLatex } from "@/helper/convertRawtoLatex";

// type MathRendererProps = {
//   text: string;
//   inline?: boolean;
//   isMobile: boolean;
// };

// const MathRenderer = ({ text, isMobile = false }: MathRendererProps) => {
//   const convertedText = useMemo(() => {
//     return convertRawtoLatex(text, isMobile);
//   }, [text, isMobile]);

//   return (
//     <div className="text-xl text-left">
//       <MathJax.Provider
//         options={{
//           SVG: {
//             // linebreaks: { automatic: true, width: "container" },
//           },
//           "HTML-CSS": {
//             linebreaks: {
//               automatic: true,
//               //   width: ` "200px" `,
//               textAlign: "left",
//             },

//             textAlign: "left",
//           },
//           MathRenderer: [
//             "HTML-CSS",
//             {
//               //   linebreaks: { automatic: true, width: "200px" },
//             },
//           ],
//         }}
//       >
//         <MathJax.Node formula={convertedText} />
//       </MathJax.Provider>
//     </div>
//   );
// };

// export default MathRenderer;

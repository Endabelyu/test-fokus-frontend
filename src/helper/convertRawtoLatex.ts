//
export function convertRawtoLatex(rawText: string) {
  let text = rawText;

  // --- Core math phrases → inline LaTeX ---
  text = text.replace(
    /a\s*times\s*(\d+)\s*to\s*the\s*power\s*of\s*n/gi,
    "$ a \\times $1^{n} $",
  );
  text = text.replace(/plus-minus/gi, "$ \\pm $ ");
  text = text.replace(/the number/gi, "");
  text = text.replace(/(\d+)\s*to\s*the\s*power\s*of\s*(\w+)/gi, "$ $1^{$2} $");

  text = text.replace(/(\w+)\s*to\s*the\s*power\s*of\s*(\w+)/gi, "$ $1^{$2} $");

  // --- Comparisons ---
  text = text.replace(/is\s*less\s*than\s*or\s*equal\s*to/gi, "$ \\le  $");
  text = text.replace(/which\s*is\s*less\s*than\s*/gi, "$ <  $");

  // --- Integer definition ---
  text = text.replace(/is\s*an/gi, "$  \\in  $ ");
  text = text.replace(/integer/gi, "$  \\mathbb{Z} $");

  // --- Cleanup double spaces caused by replacements ---
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

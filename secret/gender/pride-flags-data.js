// ============================================================
// PRIDE FLAG DATA - shared by flags.html (reference) and
// flag-guess/ (the guessing game). Every flag is rendered from
// these colors as CSS stripes - no image files needed.
//
// HOW TO EDIT: add/remove/reword entries freely. `colors` is a
// top-to-bottom (or left-to-right where noted) list of hex codes.
// Some real flags include a shape (chevron, triangle, circle) on
// top of the stripes - those are noted in `meaning` and simplified
// to stripes-only here for consistency and simplicity.
// ============================================================

const PRIDE_FLAGS = [
  {
    id: "pride",
    name: "Pride (Rainbow) Flag",
    colors: ["#e40303", "#ff8c00", "#ffed00", "#008026", "#004dff", "#750787"],
    meaning: "The original 1978 design by Gilbert Baker, now the most widely recognized symbol of LGBTQ+ pride and community.",
  },
  {
    id: "progress",
    name: "Progress Pride Flag",
    colors: ["#e40303", "#ff8c00", "#ffed00", "#008026", "#004dff", "#750787", "#5bcefa", "#f5a9b8", "#ffffff", "#000000", "#8b4513"],
    meaning: "The classic rainbow plus a chevron (shown here simplified as stripes) adding trans colors and black/brown stripes for LGBTQ+ people of color.",
  },
  {
    id: "trans",
    name: "Transgender Flag",
    colors: ["#5bcefa", "#f5a9b8", "#ffffff", "#f5a9b8", "#5bcefa"],
    meaning: "Designed by Monica Helms in 1999. Light blue and pink for traditional boy/girl colors, white for those who are non-binary, intersex, or transitioning.",
  },
  {
    id: "bi",
    name: "Bisexual Flag",
    colors: ["#d60270", "#d60270", "#9b4f96", "#0038a8", "#0038a8"],
    meaning: "Pink represents same-gender attraction, blue represents different-gender attraction, and the purple overlap represents attraction to both.",
  },
  {
    id: "pan",
    name: "Pansexual Flag",
    colors: ["#ff218c", "#ffd800", "#21b1ff"],
    meaning: "Pink for attraction to women, blue for attraction to men, and yellow for attraction to non-binary people or those outside the gender binary.",
  },
  {
    id: "ace",
    name: "Asexual Flag",
    colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"],
    meaning: "Black for asexuality, gray for the gray-ace/demi spectrum, white for allosexual allies, and purple for community.",
  },
  {
    id: "aro",
    name: "Aromantic Flag",
    colors: ["#3da542", "#a7d379", "#ffffff", "#a9a9a9", "#000000"],
    meaning: "Shades of green (the opposite of red, associated with romance) for aromanticism, white for platonic love, gray for the gray-aro/demi spectrum, black for the wider sexuality spectrum.",
  },
  {
    id: "nonbinary",
    name: "Non-binary Flag",
    colors: ["#fcf434", "#ffffff", "#9c59d1", "#2c2c2c"],
    meaning: "Yellow for genders outside the binary, white for many/all genders, purple for a mix of male and female, black for agender identities.",
  },
  {
    id: "genderfluid",
    name: "Genderfluid Flag",
    colors: ["#ff75a2", "#ffffff", "#be18d6", "#000000", "#333ebd"],
    meaning: "Pink for femininity, white for lack of gender, purple for a mix of masculinity and femininity, black for all genders, blue for masculinity.",
  },
  {
    id: "genderqueer",
    name: "Genderqueer Flag",
    colors: ["#b57edc", "#ffffff", "#4a8123"],
    meaning: "Lavender for androgyny and queer identity, white for agender identity, green for identities outside the binary.",
  },
  {
    id: "lesbian",
    name: "Lesbian Flag",
    colors: ["#d52d00", "#ff9a56", "#ffffff", "#d362a4", "#a30262"],
    meaning: "The 'sunset' design - shades of orange for gender non-conformity and independence, white for community, shades of pink/red for femininity and love.",
  },
  {
    id: "gay-men",
    name: "Gay Men's Flag",
    colors: ["#078d70", "#26ceaa", "#98e8c1", "#ffffff", "#7bade2", "#5049cc", "#3d1a78"],
    meaning: "A 2019 redesign moving away from associating all gay identity with the general rainbow flag, using greens and blues.",
  },
  {
    id: "polysexual",
    name: "Polysexual Flag",
    colors: ["#f61cb9", "#07d569", "#1c92f6"],
    meaning: "Pink for attraction to women, green for attraction to non-binary people, blue for attraction to men - multiple, but not all, genders.",
  },
  {
    id: "omnisexual",
    name: "Omnisexual Flag",
    colors: ["#fe9ac6", "#ff53bf", "#000000", "#7f11e0", "#3b8cff"],
    meaning: "Pinks for attraction to women, blues for attraction to men, with the dark central band representing that gender is still perceived, unlike pansexuality.",
  },
  {
    id: "demisexual",
    name: "Demisexual Flag",
    colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"],
    meaning: "Shares the asexual flag's colors in different proportions (usually shown with a black triangle, simplified to stripes here) - attraction only after a strong emotional bond forms.",
  },
  {
    id: "agender",
    name: "Agender Flag",
    colors: ["#000000", "#b9b9b9", "#ffffff", "#b8f483", "#ffffff", "#b9b9b9", "#000000"],
    meaning: "Black and white for an absence of gender, gray for semi-genderlessness, green (the inverse of purple, often linked to gender) for non-binary identity.",
  },
  {
    id: "intersex",
    name: "Intersex Flag",
    colors: ["#ffd800", "#ffd800", "#7902aa", "#ffd800", "#ffd800"],
    meaning: "Yellow and purple were chosen as colors that avoid the pink/blue gender binary. Usually shown with a purple circle at center, simplified to stripes here.",
  },
  {
    id: "two-spirit",
    name: "Two-Spirit Flag",
    colors: ["#ff0000", "#ffffff", "#ffff00", "#000000"],
    meaning: "One of several designs used by Indigenous North American communities for Two-Spirit identity - a culturally specific term generally used only by Indigenous people.",
  },
  {
    id: "polysexual",
    name: "Polysexual Flag",
    colors: ["#F61BB9", "#07D669", "#1C92F5"],
    meaning: "Pink for attraction to women, green for attraction to non-binary people, blue for attraction to men - multiple, but not all, genders.",
  },
  {
    id: "bigender",
    name: "Bigender Flag",
    colors: ["#C178A0", "#EEA7CE", "#D6C8E9", "#FFFFFF", "#D6C8E9", "#9BC8E9", "#6D83D2"],
    meaning: "the two pink stripes represent femininity, while the two blue stripes represent masculity. The two purple stripes may represent androgyny Lastly, the white may represent non-binary identities in general.",
  },
];

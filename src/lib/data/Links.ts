interface ILink {
  href: string;
  imgAlt: string;
  imgSrc: string;
  text: string;
}

const genLink = (
  href: string,
  imgAlt: string,
  imgSrc: string,
  text: string
): ILink => ({ href, imgAlt, imgSrc, text });

export const Links: ILink[][] = [
  [
    genLink(
      "/create/simpleborder",
      "A simple border",
      "/placeholder.webp",
      "Simple Border"
    ),
    genLink(
      "/create/testview",
      "A sandbox",
      "/placeholder.webp",
      "Test View"
    )
  ],
  [],
  [],
  [
    genLink(
      "/create/rectangles",
      "PS2 Menu-like rectangles",
      "/placeholder.webp",
      "Rectangular Prisms"
    )
  ],
];

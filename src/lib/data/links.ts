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
      "/create/border",
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
  ]
];

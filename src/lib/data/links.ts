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
      "/overlays/testview",
      "A simple border",
      "/placeholder.webp",
      "Simple Border"
    )
  ]
];

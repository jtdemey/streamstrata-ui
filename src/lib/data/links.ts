interface ILink {
  href: string;
  text: string;
}

const genLink = (href: string, text: string): ILink => ({ href, text });

export const Links: ILink[] = [
  genLink("/overlays/testview", "Test View")
];

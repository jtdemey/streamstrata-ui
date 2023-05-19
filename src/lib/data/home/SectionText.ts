interface ISectionText {
  header: string;
  body: string;
}

const genSectionText = (header: string, body: string): ISectionText => ({
  header,
  body
});

export const SectionText: ISectionText[] = [
  genSectionText(
    "Borders",
    "Frame your webcam, your catcam, or your whole scene with an assortment of customizable patterns."
  ),
  genSectionText(
    "Layouts",
    "Design 16:9 layouts for mobile devices, 4:3 devices, tablets, or smart fridges."
  ),
  genSectionText(
    "Panes",
    "Make rectangles with flair: perfect for chat backgrounds, webcam frames, or a backdrop for text."
  ),
  genSectionText(
    "Backgrounds",
    "Tweak animated backgrounds for optimal visual stimulation."
  )
];

export interface MultiLineToParagraphsProps {
  paragraphs: string;
}

function MultiLineToParagraphs(props: MultiLineToParagraphsProps) {
  return (
    <>
      {props.paragraphs.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}

export default MultiLineToParagraphs;

import Container from "./container";

export default function Footer() {
  return (
    <Container
      tag="footer"
      borderTop={true}
      className="text-muted-foreground block flex-row items-center justify-center py-8 text-center text-sm leading-loose text-balance sm:py-4 sm:text-left"
    >
      Built by{" "}
      <a
        href="https://x.com/thadkrugman"
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-4"
      >
        Thad Krugman
      </a>
      . The source code is available on{" "}
      <a
        href="https://github.com/thadkrugman/skill-showcase"
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-4"
      >
        GitHub
      </a>
      .
    </Container>
  );
}

import PageTitle from "@/components/shared/PageTitle";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <>
      <PageTitle
        title="Financial Intelligence, Simplified"
        description="A cutting-edge dashboard powered by modern web technology to visualize spending, track goals, and optimize savings. Sophisticated tools wrapped in elegant simplicity. Intuitive. Secure. Responsive."
        primaryButtonText="Get Started"
        primaryButtonLink="/app"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/#features"
      />
      <Container
        className="h-14 flex-row items-center gap-6"
        borderBottom={true}
      >
        <button className="class=flex text-muted-foreground hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors">
          Test
        </button>
      </Container>
      <Container flex1={true}>
        <div className="bg-muted aspect-video w-full rounded-lg"></div>
      </Container>
    </>
  );
}

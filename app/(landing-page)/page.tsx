import PageTitle from "@/components/shared/page-title";
import Container from "@/components/shared/container";
import TabNavigation from "./components/TabNavigation";
import TabContent from "./components/TabContent";

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
      <TabNavigation />
      <Container borderBottom={true}>
        <TabContent />
      </Container>
      <Container flex1={true} className="">
        <h2 className="text-3xl font-bold tracking-tight">Features</h2>
        <p className="text-muted-foreground mt-1 text-base font-light">
          Some text about the features of the app.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="h-48 w-full rounded-lg border"></div>
          <div className="h-48 w-full rounded-lg border"></div>
          <div className="h-48 w-full rounded-lg border"></div>
          <div className="h-48 w-full rounded-lg border"></div>
        </div>
      </Container>
    </>
  );
}

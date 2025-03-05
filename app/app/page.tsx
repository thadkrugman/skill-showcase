import PageTitle from "@/components/shared/page-title";
import Container from "@/components/shared/container";
import TotalBalance from "@/app/app/components/total-balance";

export default function Home() {
  return (
    <>
      <PageTitle title="Dashboard" />
      <Container flex1={true} className="gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <TotalBalance />
          <TotalBalance />
          <TotalBalance />
          <TotalBalance />
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <TotalBalance />
          <TotalBalance />
        </div>
      </Container>
    </>
  );
}

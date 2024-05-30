import PageHook from "@/app/pageHook";

function page() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/trophy.svg" />
        <title>The Ultimate Sauce</title>
      </Head>
      <div>
        <PageHook />
      </div>
    </div>
    
  );
}

export default page;

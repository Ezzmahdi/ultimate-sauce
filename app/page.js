import PageHook from "@/app/pageHook";
import Head from 'next/head';


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

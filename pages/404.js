import Head from "next/head";
import Link from "next/link";

const page404 = () => {
  return (
    <>
      <Head>
        <title>404 - Jose Maria Ipio</title>
        <meta name="keywords" content="404" />
      </Head>
      <div
        className="flex flex-col items-center justify-center pt-24 text-light"
        style={{ height: "calc(100vh - 10.8rem)" }}
      >
        <div className="pb-8 font-bold text-center scale-150 text-7xl sm:text-9xl">
          404
        </div>
        <div className="pb-4 text-lg">The page cannot be found</div>
        <p>
          Go back to{" "}
          <Link href="/">
            <a className="text-blue-500 underline">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default page404;

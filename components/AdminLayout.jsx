import Head from "next/head";

export default function AdminLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

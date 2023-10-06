import React from 'react';
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ポートフォリオサイト準備中</title>
    </Head>
      {children}
  </>
  );
}
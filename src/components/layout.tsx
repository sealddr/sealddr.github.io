import React from 'react';
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ポートフォリオサイト準備中</title>
      </Head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
import { Html, Head, Main, NextScript } from 'next/document'
import { zenKakuGothicNew } from '@/lib/fonts'

export default function Document() {
  return (
    <Html lang="en" className={zenKakuGothicNew.variable}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

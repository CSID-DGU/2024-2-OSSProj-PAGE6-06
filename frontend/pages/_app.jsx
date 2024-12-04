import "@/styles/globals.css";
import styled from "styled-components";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { useEffect } from "react";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Reading Routine" />
        <meta name="description" content="오픈소스프로젝트-PAGE6" />
        <meta name="color-scheme" content="light" />
      </Head>
      <Body>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {`
            @font-face {
              font-family: "Pretendard";
              src: url("/fonts/PretendardVariable.woff2") format("woff2");
              font-weight: normal;
              font-style: normal;
            }
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            menu,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            hgroup,
            main,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
              font-family: Pretendard;
              // background-color: #fff;
            }
            /* HTML5 display-role reset for older browsers */
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            main,
            menu,
            nav,
            section {
              display: block;
            }
            /* HTML5 hidden-attribute fix for newer browsers */
            *[hidden] {
              display: none;
            }
            html {
              font-family: "Pretendard";
            }
            body {
              line-height: 1;
            }
            menu,
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
              content: "";
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            * {
              box-sizing: border-box;
            }

            a {
              text-decoration: none;
              color: inherit;
            }
          `}
        </style>
      </Body>
    </>
  );
}

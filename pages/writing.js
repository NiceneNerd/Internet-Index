import Head from "next/head";
import Content from "../components/content";

export default function Writing() {
  return (
    <>
      <Head>
        <title>Writing ― Caleb's Internet Index</title>
      </Head>
      <Content>
        <h1>Caleb the Writer</h1>
        <p>
          My love of writing began in the second grade and has taken a number of
          odd turns over the years. Most of my writing which is now still
          available is specifically about theology and such, for which I have a
          separate page, but here is a wee bit of other writing I have produced
          over the years.
        </p>
        <ul>
          <li>
            <a href="https://www.doctorwhotv.co.uk/the-doctor-dark-hero-no-more-56575.htm">
              The Doctor: Dark Hero No More?
            </a>{" "}
            ― Doctor Who TV
          </li>
          <li>
            <a href="https://talesofteretz.wordpress.com/">Tales of Teretz</a>
          </li>
        </ul>
      </Content>
    </>
  );
}

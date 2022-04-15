import Head from "next/head";
import Image from "next/image";
import Content from "../components/content";
import styles from "../styles/BCML.module.scss";
import bcmlImage from "../public/bcml.png";

export default function BCML() {
  return (
    <>
      <Head>
        <title>BCML ― Caleb's Internet Index</title>
      </Head>
      <Content>
        <header>
          <h1>BCML</h1>
          <p>
            <em>Breath of the Wild</em> Cross-Platform Mod Loader
          </p>
        </header>
        <div>
          <aside className={styles.image}>
            <Image src={bcmlImage} />
          </aside>
          <p>
            BCML was the project which first and foremost made me a proper
            developer. Over a thousand commits later, it has accumulated{" "}
            <strong>133k</strong> downloads on GameBanana, <strong>27k</strong>{" "}
            on GitHub, and some thousands a month on PyPI (though of course the
            PyPI numbers are not remotely representative of real users).
          </p>
          <p>
            The purpose of BCML is to identify, isolate, and merge the changes
            made by individual mods for <em>Breath of the Wild</em> (BOTW) into
            a single modpack. This is particularly necessary with a game like
            BOTW because its assets are packaged and optimized in such a way
            that most mods will have to override the same files and archives as
            a number of other mods. BCML, then, applies algorithms to{" "}
            <strong>diff and merge</strong> important BOTW data and parameter
            files. Given that the game has over 7000 actors and hosts of other
            files, this is an intensive, high-CPU operation which makes
            extensive use of <em>multiple threads and processes</em>.
          </p>
          <p>
            BCML is a <em>desktop app</em> with a split frontend and backend.
            The frontend is written in <strong>React</strong> (styled with{" "}
            <strong>Sass/SCSS</strong>), and the backend in{" "}
            <strong>Python</strong>, the two being united by{" "}
            <a href="https://pywebview.flowrl.com/">pywebview</a>. There are
            approximately <strong>16k lines</strong> of code, of which around
            2/3 is Python, 1/3 React JSX, and a small proportion SCSS.
          </p>
          <p>
            I wrote BCML from scratch starting in 2019, and since then it has
            accumulated over <strong>1100</strong> commits, most from myself but
            a few from about half a dozen other contributors, and has closed
            nearly 200 issues. It can be installed from PyPI and has well over{" "}
            <strong>130k downloads</strong>. (The total download count is hard
            to nail down with precision, however, because for a long time it was
            available separately on GameBanana, PyPI, GitHub, and Nexus Mods.
            Now all distribution is through PyPI, which has notoriously bizarre
            download statistics.)
          </p>
          <p>
            At the height of BCML's development, I ran a Patreon which earned
            around $30-60/month. Not the most exciting thing in the world but
            quite welcome, personally.
          </p>
          <p>
            For more on BCML, feel free to check out the{" "}
            <a href="https://github.com/NiceneNerd/BCML">GitHub repository</a>.
          </p>
        </div>
      </Content>
    </>
  );
}

import Head from "next/head";
import Content from "../components/content";
import Grid from "../components/grid";
import styles from "../styles/Programming.module.scss";

export default function Programming() {
  return (
    <>
      <Head>
        <title>Programming ― Caleb's Internet Index</title>
      </Head>
      <Content>
        <h1>Caleb the Programmer</h1>
        <p>
          I've been programming in some capacity, to some extent, in some language (or
          sometimes "language") or another, since I was an adolescent. In the early
          dates I really only used HTML, CSS, and JavaScript, then later Visual
          Basic.NET and C#, but all of that was for childhood nonsense.
        </p>
        <p>
          As an adult, I taught myself more seriously <strong>JavaScript</strong>{" "}
          (especially React), <strong>Python</strong>, and <strong>Rust</strong>, all of
          which I am now fairly proficient in. I have dabbled in other languages as well
          (C++, Bash, PHP), and I plan to learn C++, C#, and Go.
        </p>
        <p>
          All of my <em>professional</em> experience is in <strong>JavaScript</strong>.
          This experience has included especially common modern tools and technologies
          like <strong>React</strong>, <strong>Node</strong>, <strong>Sails.io</strong>,{" "}
          <strong>jQuery</strong>, and some <strong>Angular</strong> and{" "}
          <strong>React Native</strong>.
        </p>
        <p>
          Below are a few sample projects of mine. Most of them link to GitHub, but BCML
          has its own page here. If you see a repeated theme, it is because I seriously
          began teaching myself programming as an adult in order to support the{" "}
          <em>Breath of the Wild</em> modding community.
        </p>
        <Grid>
          <Grid.Item href="/bcml">
            <Grid.Item.Title>BCML</Grid.Item.Title>
            <Grid.Item.Body>
              <div className={styles.badges}>
                <a href="https://pypi.org/project/bcml/">
                  <img src="https://img.shields.io/pypi/v/bcml?color=brightgreen" />
                </a>{" "}
                <a href="https://gamebanana.com/tools/6624#StatsModule">
                  <img src="https://img.shields.io/badge/downloads-133k-yellow" />
                </a>{" "}
                <a href="https://github.com/NiceneNerd/BCML/stargazers">
                  <img src="https://img.shields.io/github/stars/NiceneNerd/BCML" />
                </a>
                <a href="https://github.com/NiceneNerd/BCML/blob/master/docs/LICENSE.md">
                  <img src="https://img.shields.io/pypi/l/bcml?color=orange" />
                </a>{" "}
              </div>
              <p>
                Mod manager for <em>The Legend of Zelda: Breath of the Wild</em>,
                written in Python and React. Over 100k downloads, 16k lines of code,
                1000 commits.
              </p>
              <Grid.Item.Footer>More information...</Grid.Item.Footer>
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item href="https://github.com/NiceneNerd/Wild-Bits/tree/rust">
            <Grid.Item.Title>Wild Bits</Grid.Item.Title>
            <Grid.Item.Body>
              <div className={styles.badges}>
                <a href="https://pypi.org/project/wildbits/">
                  <img src="https://img.shields.io/pypi/v/wildbits" />
                </a>{" "}
                <a href="https://pypistats.org/packages/wildbits">
                  <img src="https://img.shields.io/pypi/dm/wildbits" />
                </a>{" "}
                <a href="https://github.com/NiceneNerd/Wild-Bits/stargazers">
                  <img src="https://img.shields.io/github/stars/NiceneNerd/Wild-Bits" />
                </a>
                <a href="https://github.com/NiceneNerd/Wild-Bits/blob/master/docs/LICENSE.md">
                  <img src="https://img.shields.io/pypi/l/wildbits" />
                </a>{" "}
              </div>
              <p>
                Graphical file editor for common Nintendo file formats, written first in
                Python and React, then rewritten with a Rust backend.
              </p>
              <Grid.Item.Footer>GitHub</Grid.Item.Footer>
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item href="https://github.com/NiceneNerd/roead">
            <Grid.Item.Title>roead</Grid.Item.Title>
            <Grid.Item.Body>
              <div className={styles.badges}>
                <a href="https://crates.io/crates/roead">
                  <img src="https://img.shields.io/crates/v/roead" />
                </a>
                <a href="https://docs.rs/roead/">
                  <img src="https://img.shields.io/badge/api-rustdoc-558b2f" />
                </a>
                <a href="https://spdx.org/licenses/GPL-3.0-or-later.html">
                  <img src="https://img.shields.io/badge/license-GPL-blue" />
                </a>
                <a href="https://github.com/NiceneNerd/roead/actions/workflows/rust.yml">
                  <img src="https://img.shields.io/github/workflow/status/NiceneNerd/roead/Build%20and%20test" />
                </a>
              </div>
              Rust bindings to the C++ oead library for common Nintendo file formats.
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item href="https://github.com/NiceneNerd/rusted-parrot">
            <Grid.Item.Title>Rusted Parrot</Grid.Item.Title>
            <Grid.Item.Body>
              Braindead simple Twitter bot, written in Rust.
            </Grid.Item.Body>
          </Grid.Item>
        </Grid>
      </Content>
    </>
  );
}

import Head from "next/head";
import Content from "../components/content";
import styles from "../styles/Hire.module.scss";

export default function Hire() {
  return (
    <>
      <Head>
        <title>Hire Me - Caleb's Internet Index</title>
      </Head>
      <Content>
        <h1>Hire Caleb, the Nicene Nerd</h1>
        <p>
          Per the "Nerd" in "The Nicene Nerd," I have considerable skills in the
          world of computers and technology. Since I also have a large family to
          support, I am happy to offer my services to expand the resources of my
          household. Per the "Nicene" in my title, I am also especially
          interested in supporting Christian ministries or Christian-owned
          businesses, for whom I am willing to offer special value.
        </p>
        <h2>My Services</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 id="websites">Websites</h3>
            <p>
              I can create, maintain, manage, or migrate websites, this being
              one of my oldest and most developed skills, which I first began
              learning as a child. I have extensive experience with the relevant
              languages, such as JavaScript, HTML, and CSS, popular extensions
              to these such as SCSS, Less, and TypeScript, popular frameworks
              and libraries like React, Angular.js, Node, or Next.js, as well as
              higher-level tools like WordPress.
            </p>
            <p>
              For small churches (around 100 members or fewer), I can perform
              website setup for free. If you represent a small church in need of
              a website, please be sure to let me know and we can make
              arrangements.
            </p>
            <h4>Websites I've Worked On</h4>
            <ul>
              <li>
                This website, which I made mostly from scratch using Next.js.
              </li>
              <li>
                <a href="https://calebdixonsmith.top">My blog</a>. The theme I
                have heavily customized and extended.
              </li>
              <li>
                <a href="https://myrvmail.com">MyRVmail Inc.</a> I have been the
                second developer on this site for about four years, and have
                worked on nearly every page or feature, backend and frontend.
              </li>
              <li>
                <a href="https://davenantinstitute.org">
                  The Davenant Institute
                </a>
                . I have been the webmaster of this WordPress site since
                September 2022.
              </li>
              <li>
                <a href="http://ebclaurelhill.com/">Ebenezer Baptist Church</a>{" "}
                I created this website for the church in 2019.
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 id="software">Software Development</h3>
            <p>
              I also offer general purpose software development services. I have
              experience developing applications for Windows and Linux, usually
              cross-platform, using technologies such as Rust, Python,
              TypeScript, Node.js, React, Qt, WinForms, and others.
            </p>
            <p>
              I also have Android app development experience, albeit relatively
              much less than desktop work. None of the apps I made myself have
              ever been published and were mostly for personal use, but I have
              worked some on the{" "}
              <a href="https://play.google.com/store/apps/details?id=com.myrvmail">
                MyRVmail
              </a>{" "}
              app.
            </p>
            <p>
              For more information on my software development experience, check
              out this site's <a href="/programming">Programming</a> page.
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          If you have any questions or would like to hire me for a project,
          please email me at{" "}
          <a href="mailto:calebdixonsmith@gmail.com">
            calebdixonsmith@gmail.com
          </a>
          .
        </p>
      </Content>
    </>
  );
}

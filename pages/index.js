import Head from "next/head";
import Link from "next/link";
import Grid from "../components/grid.js";
import Content from "../components/content.js";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb Smith's Internet Index</title>
        <meta
          name="description"
          content="The Internet index of Caleb Dixon Smith, perhaps best described as a 'portfolio'"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <h1 className={styles.title}>Greetings and Salutations</h1>

        <p className={styles.description}>
          Welcome to Caleb Smith's Internet index. I am a man of a few mostly
          irreconcilable interests and activities, detailed below.
        </p>

        <Grid>
          <Grid.Item href="/computers">
            <Grid.Item.Title>Computers (In General)</Grid.Item.Title>
            <Grid.Item.Body>
              <p>
                Read about how I have been obssessed with them since I was boy,
                my oldest and most extensive hobby.
              </p>
              <a>Read more...</a>
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item href="/programming">
            <Grid.Item.Title>Programming</Grid.Item.Title>
            <Grid.Item.Body>
              <p>
                Of all computer activities, programming holds a special place as
                most compulsive need, and I daresay the chief of my skills.
              </p>
              <Grid.Item.Footer>Read more...</Grid.Item.Footer>
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item href="/writing">
            <Grid.Item.Title>Writing</Grid.Item.Title>
            <Grid.Item.Body>
              Since second grade I have always been driven to write, fiction
              moreso in my childhood and essays moreso in the present.
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item>
            <Grid.Item.Title>Theology and Philosophy</Grid.Item.Title>
            <Grid.Item.Body>
              From the third grade lunch table until today, I have been
              incessantly given to the study and disputation of theology,
              ethics, and, to a lesser extent, philosophy, recently including
              political philosophy.
            </Grid.Item.Body>
          </Grid.Item>
          <Grid.Item>
            <Grid.Item.Title>
              Fantasy and the Medieval Donegality
            </Grid.Item.Title>
            <Grid.Item.Body>
              My imagination has always been captive to the world of swords,
              castles, lore, and other worlds.
            </Grid.Item.Body>
          </Grid.Item>
        </Grid>
      </Content>
    </>
  );
}

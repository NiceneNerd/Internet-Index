import Head from "next/head";
import Grid from "../components/grid.js";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caleb Smith's Petty Domain</title>
        <meta
          name="description"
          content="The petty domain of Caleb Dixon Smith, perhaps best described as a 'portfolio'"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Salve</h1>

        <p className={styles.description}>
          Welcome to the petty domain of Caleb Smith. I am a man of a few mostly
          irreconcilable interests and activities, detailed below.
        </p>

        <Grid>
          <Grid.Item>
            <Grid.Item.Title>Computers</Grid.Item.Title>
            <Grid.Item.Body>
              I have always had an interest and a knack for computers, perhaps
              because my mind itself operates unusually like unto one.
            </Grid.Item.Body>
          </Grid.Item>
        </Grid>
      </main>
    </div>
  );
}

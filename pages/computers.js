import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Content from "../components/content";
import Modal from "../components/modal";
import styles from "../styles/Computers.module.scss";

export default function Computers() {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Computers ― Caleb's Internet Index</title>
      </Head>
      <Content>
        <h1>Caleb the Computer Guy</h1>
        <p>
          I became the resident computer guy at school, church, and home
          relatively early in my life, probably around 10-12. At first I simply
          learned how to navigate Windows and the growing uses of the Internet.
          Then I began learning to handle Microsoft Office and several other
          common tools. Much has changed since then.
        </p>
        <p>
          There were two main factors that triggered me to learn much more.
          First, when Windows Vista (and later Windows 7) came out, I began
          labouring diligently to acquire programs and configure settings to
          port their features and styles back to Windows XP. (This actually also
          lead to my first dabbling in real software development, as opposed to
          mere HTML fiddling). Second, I began using Linux as simply an
          experiment in a virtual machine after reading about it in{" "}
          <em>PCWorld</em> magazine early as a teenager.
        </p>
        <p>
          Since then I have become pretty generally proficient in all the usual
          affairs of desktop computer usage across both Windows and Linux.
          Though I recently have attempted to do without Windows almost
          entirely, I still have experience with the new features in Windows 10
          and 11. In the Linux realm, I am very familiar with and comfortable in
          most Ubuntu-based and Arch-based distros, and I currently use Garuda
          Linux.
        </p>
        <figure className={styles.desktop}>
          <Image
            src="/desktop.png"
            layout="responsive"
            width={1920}
            height={1080}
            onClick={() => setModal(true)}
          />
          <figcaption>My current i3 desktop</figcaption>
        </figure>
        <p>
          As something of an aside, my computer interests also led me in time to
          tinker with smartphones and tablets, so I have significant experience
          with Android by now as well. I have developed two notable project for
          Android devices:{" "}
          <a href="https://forum.xda-developers.com/t/howto-dual-boot-p31xx.1866675/">
            a dual-boot utility for the Samsung Galaxy Tab 2 7.0
          </a>{" "}
          and{" "}
          <a href="https://forum.xda-developers.com/t/script-utility-suicide-flash-for-moto.3173766/">
            a set of tools for flashing software modifications on Motorola Moto
            X without a bootloader unlock
          </a>
          .
        </p>
      </Content>
      {showModal && (
        <Modal show={showModal} onClose={() => setModal(false)} border={false}>
          <Image
            src="/desktop.png"
            layout="intrinsic"
            width={1920}
            height={1080}
          />
        </Modal>
      )}
    </>
  );
}

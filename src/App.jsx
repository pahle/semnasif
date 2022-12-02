import styles from "./style";

import {
  Navbar,
  Hero,
  Welcome,
  Timer,
  Announcement,
  Rules,
  Topics,
  Registration,
  Timeline,
  Speakers,
  Clients,
  CTA,
  Footer,

} from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div
      className={`${styles.flexCenter} fixed w-full z-40`}
    >
      <div className={`${styles.boxWidth} bg-white`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart} mt-[120px]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Timer />
        <Announcement />
        <Welcome />
        <Rules />
        <Topics />
        <Registration />
        <Timeline />
        <Speakers />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

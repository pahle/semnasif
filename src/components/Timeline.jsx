import styles, { layout } from "../style";
import { timeline } from "../assets";

const Timeline = () => (
  <section
    id="timeline"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center">
        Timeline Acara <br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h1>
    </div>
    <div className={layout.sectionImg}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[100%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[100%] rounded-full yellow__gradient" />
      <img
        src={timeline}
        alt="timeline"
        className="md:w-[800px] relative z-[5] ml-[100px]"
      />
    </div>
  </section>
);

export default Timeline;

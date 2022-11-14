import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Speakers = () => (
  <section
    id="pembicara"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center">
        Pembicara <br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h1>
    </div>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))} */}
      <div className="flex justify-center flex-col px-10 py-12 rounded-[20px] w-full h-[300px] coming-soon align-middle">
        <h4 className="font-poppins font-semibold text-center text-[50px] leading-[32px]">
          Coming Soon
        </h4>
      </div>
    </div>
  </section>
);

export default Speakers;

import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="#pengumuman">
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-primary">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-primary">Started</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;

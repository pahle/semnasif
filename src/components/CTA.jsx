import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white text-center sm:text-left text-[35px]`}>Ayo Daftar Sekarang!</h2>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-5 sm:mb-0 mb-4`}>
      <Button text={"Daftar"} link={'#registrasi'}/>
    </div>
  </section>
);

export default CTA;

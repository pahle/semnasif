import styles from "../style";
import Button from "./Button";

const Registration = () => (
  <section
    id="registrasi"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[65%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center">
        Informasi Pendaftaran{" "}
        <br className="sm:block hidden" /> SEMNASIF 2022
      </h1>
    </div>
    <div className="flex flex-wrap justify-center md:justify-around w-full feedback-container relative z-[1]">
      <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:min-w-[450px] sm:min-w-[400px] min-w-[360px] my-5 bg-black-gradient-2">
        <div>
          <h4 className="font-poppins font-semibold text-[20px] text-white text-center">
            Registrasi Pemakalah
          </h4>
          <div className="mt-5">
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Umum
            </p>
            <table className="font-poppins font-normal text-dimWhite">
              <tr>
                <td className="w-[120px] md:w-[220px] sm:w-[180px]">

                  1 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 1.030.000,-</span>
                </td>
              </tr>
              <tr>
                <td>
                  5 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 1.780.000,-</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-5">
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Mahasiswa
            </p>
            <table className="font-poppins font-normal text-dimWhite">
              <tr>
                <td className="w-[120px] md:w-[220px] sm:w-[180px]">
                  1 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 580.000,-</span>
                </td>
              </tr>
              <tr>
                <td>
                  10 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 2.780.000,-</span>
                </td>
              </tr>
            </table>
          </div>

        </div>
        <div className="flex justify-center mt-6">
          <Button styles='mt-5' link={'//www.google.com'} text={'Register'} />
        </div>
      </div>
      <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:min-w-[450px] sm:max-w-[400px] min-w-[360px] my-5 bg-black-gradient-2">
        <div>
          <h4 className="font-poppins font-semibold text-[20px] text-white text-center">
            Registrasi Non-Pemakalah
          </h4>
          <div className="mt-5">
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Umum
            </p>
            <table className="font-poppins font-normal text-dimWhite">
              <tr>
                <td className="w-[120px] md:w-[220px] sm:w-[180px]">

                  1 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 780.000,-</span>
                </td>
              </tr>
              <tr>
                <td>
                  5 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 780.000,-</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-5">
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Mahasiswa
            </p>
            <table className="font-poppins font-normal text-dimWhite">
              <tr>
                <td className="w-[120px] md:w-[220px] sm:w-[180px]">

                  1 Paper
                </td>
                <td>
                  : <span className="font-semibold text-gradient">Rp. 530.000,-</span>
                </td>
              </tr>
            </table>
          </div>

          <p className="font-poppins font-normal text-dimWhite text-[14px] text-justify mt-5">
            *Untuk mendapatkan sertifikat akan dikenakan biaya tambahan sebesar Rp. 100.000,-
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button styles='mt-5' link={'//www.google.com'} text={'Register'} />
        </div>
      </div>
    </div>
  </section>
);

export default Registration;

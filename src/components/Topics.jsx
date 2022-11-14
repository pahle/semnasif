import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Topics = () => (
  <section
    id="registrasi"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[65%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        Topik - Topik <br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left`}>
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center md:justify-around w-full feedback-container relative z-[1]">
      <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:min-w-[450px] min-w-[370px] my-5 bg-black-gradient-2 border-2">
        <div>
          <div className="flex md:flex-row flex-col p-4 md:text-left text-center">
            <div className="md:min-w-[470px] sm:mr-5 mr-0 ">
              <p className="font-poppins font-normal sm:text-[20px] text-[18px] text-white leading-10">
                Software Engineering <br /> 
                System Analysis and Design <br />
                IT Governance and Audits <br />
                E-Government <br />
                IT Service Management <br />
                IT Project Management <br />
                Information System Development <br />
                Software Quality Assurance <br />
                IT/IS Evaluation <br />
                IT Risk and Management <br />
                Business Intelligence <br />
                Data Mining <br />
                Intelligent Systems <br />
                Artificial Intelligence <br />
                Autonomous Agents <br />
                Intelligent Agents <br />
                Expert Systems <br />
                Pattern Recognition <br />
                Machine Learning <br />
                Soft Computing <br />
                Optimization <br />
                Forecasting <br />
                Computational Intelligence <br />
                Decision Support Systems <br />
                Database Management Systems <br />
              </p>
            </div>
            <div className="md:min-w-[470px]">
              <p className="font-poppins font-normal sm:text-[20px] text-[18px] text-white leading-10">
                Semantics Web and Linked Data <br />
                Big Data <br />
                Web Services <br />
                Social Networks Analysis <br />
                Spatial Information Systems <br />
                Geographical Information Systems <br />
                Enterprise Resource Planning <br />
                Business Process Management <br />
                Customer Relationship Management <br />
                E-business and e-Commerce <br />
                Information Security and Privacy <br />
                Digital Forensics <br />
                Network Security <br />
                Cryptography <br />
                Cloud and Virtualization <br />
                Research Methods of Information Systems{" "}
                <br />
                Computer Vision and Image <br />
                Human Computer Interaction <br />
                Wireless Sensor Networks <br />
                Internet of Things <br />
                Mobile and Pervasive Computing <br />
                Real-time Systems and Embedded Systems{" "}
                <br />
                Parallel and Distributed Systems <br />
                UI/UX Design <br />
                Human Behavior in Information System <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Topics;

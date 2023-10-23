import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} items-start`}>
      <div className={`${layout.sectionImgReverse} relative`}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%]  z-5" />

        <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

        <div className="absolute z-[0] -left-1/2 bottom -0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mt-24`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="">
            <img
              src={apple}
              alt="apple_store"
              className="w-[128px] h-[42px] object-contain mr-8 cursor-pointer"
            />
          </a>

          <a href="">
            <img
              src={google}
              alt="google_play"
              className="w-[128px] h-[42px] object-contain  cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
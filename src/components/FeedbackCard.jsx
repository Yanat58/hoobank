import { quotes } from '../assets';

const FeedbackCard = card => {
  const { content, name, title, img } = card;

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[42px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex vflex-row">
        <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h3 className="font-poppins fomt-semibold text-[20px] leading-[32px] text-white ">
            {name}
          </h3>
          <p className="font-poppins fomt-normal text-[16px] leading-[24px] text-dimWhite ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

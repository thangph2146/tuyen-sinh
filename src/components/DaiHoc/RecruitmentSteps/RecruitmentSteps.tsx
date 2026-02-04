import Image from "next/image";

const recruitmentSteps = [
  {
    id: 1,
    number: 1,
    title: "chọn chương\ntrình học",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step1.png",
  },
  {
    id: 2,
    number: 2,
    title: "chuẩn bị tài\nliệu của bạn",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step2.png",
  },
  {
    id: 3,
    number: 3,
    title: "kiểm tra đủ\nđiều kiện",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step3.png",
  },
  {
    id: 4,
    number: 4,
    title: "hoàn thành\nđăng ký Online",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step4.png",
  },
  {
    id: 5,
    number: 5,
    title: "tham dự phỏng\nvấn hoặc đánh giá",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step5.png",
  },
  {
    id: 6,
    number: 6,
    title: "nhận quyết định\ntuyển sinh",
    description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả",
    icon: "/assets/images/recruitment_step6.png",
  },
];

export default function RecruitmentSteps() {
  const firstRow = recruitmentSteps.slice(0, 3);
  const secondRow = recruitmentSteps.slice(3, 6);

  return (
    <section
      className="recruitment-section"
      id="recruitment"
      aria-labelledby="recruitment-title"
    >
      <div className="recruitment-section__bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Image
              src="/assets/images/recruitment_img.png"
              alt="Quy trình tuyển sinh"
              className="recruitment-section__image d-none d-sm-block"
              width={478}
              height={730}
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <div className="recruitment-section__content">
              {/* Desktop & Tablet */}
              <p className="recruitment-section__subtitle d-none d-sm-block">
                quy trình tuyển sinh
              </p>
              <h2
                id="recruitment-title"
                className="recruitment-section__title d-none d-sm-block"
              >
                CÁC BƯỚC ĐƠN GIẢN ĐỂ BẮT ĐẦU
              </h2>
              <p className="recruitment-section__description d-none d-sm-block">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã
                được sử dụng như một văn bản chuẩn cho ngành công nghiệp
              </p>

              {/* Mobile only */}
              <div className="recruitment-section__header d-sm-none mb-4">
                <div className="recruitment-section__icon-wrapper-mobile">
                  <Image
                    src="/assets/svg/chevron-right-triple.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="recruitment-section__icon-mobile"
                  />
                </div>
                <div className="recruitment-section__title-wrapper">
                  <p className="recruitment-section__subtitle-mobile">quy trình tuyển sinh</p>
                  <h2 className="recruitment-section__title-mobile">
                    Các Bước Đơn Giản Để Bắt Đầu
                  </h2>
                </div>
              </div>

              <div className="recruitment-steps">
                {/* Row 1 */}
                <div className="recruitment-steps__row">
                  {firstRow.map((step) => (
                    <article key={step.id} className="recruitment-step">
                      <div className="recruitment-step__number" aria-hidden="true">
                        {step.number}
                      </div>
                      <div className="recruitment-step__icon-wrapper">
                        <div className="recruitment-step__icon-bg"></div>
                        <Image
                          src={step.icon}
                          alt={`Step ${step.number} icon`}
                          className="recruitment-step__icon"
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="recruitment-step__title">
                        {step.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < step.title.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </h3>
                      <p className="recruitment-step__description">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="recruitment-steps__row">
                  {secondRow.map((step) => (
                    <article key={step.id} className="recruitment-step">
                      <div className="recruitment-step__number" aria-hidden="true">
                        {step.number}
                      </div>
                      <div className="recruitment-step__icon-wrapper">
                        <div className="recruitment-step__icon-bg"></div>
                        <Image
                          src={step.icon}
                          alt={`Step ${step.number} icon`}
                          className="recruitment-step__icon"
                          width={30}
                          height={30}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="recruitment-step__title">
                        {step.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < step.title.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </h3>
                      <p className="recruitment-step__description">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

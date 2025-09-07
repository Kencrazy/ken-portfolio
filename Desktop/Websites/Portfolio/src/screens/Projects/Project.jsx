import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import BottomNav from '../../components/bottomNav';
import './styles.css';
import intellilex from '../../assets/intellilex.png'
import tht from '../../assets/tht.png'
import hackathon from '../../assets/hackathon.png'
import robotic from '../../assets/robotic.png'
import hkico from '../../assets/hkico.png'
import khkt from '../../assets/khoahoc.jpg'

function Project() {
  const sliderWrapperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderWrapperRef.current) {
      gsap.to(sliderWrapperRef.current, {
        x: `-${currentSlide * 100}vw`, // Moves the slides based on the current slide index
        duration: 0.4,
        ease: 'power1.out',
      });
    }
  }, [currentSlide]);
  

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < slideData.length - 1 ? prevSlide + 1 : 0));
  };
  
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slideData.length - 1));
  };

  const slideData = [
    {
      date: '16.02.2024',
      title: 'Khoa học kỹ thuật cấp thành phố',
      text:'Dự án này là một phần của cuộc thi khoa học kỹ thuật cấp thành phố, nơi chúng tôi đã nghiên cứu và phát triển một giải pháp sáng tạo để giải quyết các vấn đề thực tiễn. Chúng tôi đã làm việc chăm chỉ để hoàn thiện dự án và rất tự hào về những gì đã đạt được.',
      imageUrl: khkt,
    },
    {
      date: '13.06.2024',
      title: 'Imagine Cup Junior 2024',
      text: 'Cuộc thi Imagine Cup Junior 2024 là một sân chơi công nghệ dành cho học sinh trung học, nơi chúng tôi đã trình bày dự án của mình và học hỏi từ các đội khác trên toàn thế giới.',
      imageUrl: intellilex,
    },
    {
      date: '11.05.2024',
      title: 'Cuộc thi tin học trẻ thành phố Đà Nẵng',
      text: 'Cuộc thi tin học trẻ thành phố Đà Nẵng là một sự kiện thường niên nhằm khuyến khích học sinh tham gia vào lĩnh vực công nghệ thông tin và phát triển kỹ năng lập trình.Chúng tôi đã tham gia cuộc thi này với tinh thần học hỏi và sáng tạo, và đã đạt được nhiều thành tựu đáng kể.',
      imageUrl: tht,
    },
    {
      date: '25.11.2023',
      title: 'Giải 3 Hackathon Youth On (Unicef)',
      text: 'Hackathon Youth On do Unicef tổ chức là một sự kiện thú vị, nơi chúng tôi đã có cơ hội làm việc cùng các bạn trẻ khác để phát triển các giải pháp công nghệ sáng tạo nhằm giải quyết các vấn đề xã hội.',
      imageUrl: hackathon,
    },
    {
      date: '19.08.2023',
      title: 'Lần đầu tham gia cuộc thi Robotic thành phố Đà Nẵng',
      text: 'Đây là lần đầu tiên chúng tôi tham gia cuộc thi Robotic thành phố Đà Nẵng, một trải nghiệm đầy thử thách và thú vị. Chúng tôi đã học được rất nhiều và có cơ hội gặp gỡ nhiều bạn bè mới. Đây cũng là cơ hội được thách thức bản thân trên những thương trường mới',
      imageUrl: robotic,
    },
    {
      date: '26.06.2023',
      title: 'Giải bạc vòng quốc tế cuộc thi HKICO',
      text: 'Cuộc thi HKICO là một cuộc thi quốc tế về khoa học máy tính, nơi chúng tôi đã đạt được giải bạc. Đây là một thành tựu lớn và là kết quả của sự nỗ lực không ngừng nghỉ của cả đội.',
      imageUrl: hkico,
    },
  ];

  
  return (
    <>
      <section className='container2'>
        <div className="slider">
          <div className="slider-wrapper" ref={sliderWrapperRef} style={{ width: `${slideData.length * 100}vw` }}>
            {slideData.map((slide, index) => (
              <div className="slide" key={index}>
                <div className="slide-image">
                  <img src={slide.imageUrl} alt={`Slide ${index}`} />
                  <div className="overlay"></div>
                </div>
                <div className="slide-content">
                  <div className="slide-date">{slide.date}</div>
                  <div className="slide-title">{slide.title}</div>
                  <div className="slide-text">{slide.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="arrows">
            <button onClick={handlePrevSlide} title="Previous" className="arrow slider-link prev">
            </button>
            <button onClick={handleNextSlide} title="Next" className="arrow slider-link next">
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;

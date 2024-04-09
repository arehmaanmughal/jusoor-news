import React, { useState, useRef } from "react";
import "./Faq.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Faqimage from "../../assets/faq.png";
import Faqtwo from '../../assets/faqcircle.png'
const Faq = () => {
  const facts = [
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },

    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
  ];
  const faqRefs = useRef([]);
  const [selectedButton, setSelectedButton] = useState("App_btn");

  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-6 mt-3 mb-3">
          <img src={Faqimage} alt="" />
        </div>
       <div className="col-md-6">
          <div className="faqs-section">
            <div className="col-md-10 m-auto">
              <div className="faqs-header">
                <p className="faqs-heading">أسئلة مكررة</p>
                <p className="faqs-overview">
                  ومن المهم أن يكون العميل ذكياً جداً، وأن يكون قادراً على تمويل
                  الاستثمار
                </p>
              </div>
              <div>

                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="faq rounded faq-rounded-back d-flex justify-content-between" >
                    <div>
                      <button
                        ref={(el) => (faqRefs.current[index] = el)}
                         onClick={() => {
                          toggleFaq(index);
                          setSelectedButton("faqs");
                        }}
                      >
                        {index === activeIndex ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>
                    <div className="faq-items d-flex align-items-center">
                      <div className="faq-container">
                        <p className="faq-question"> <span> {fact.question} <img src={Faqtwo} alt=""/> </span>  </p>
                        <p
                          className={`faq-answer ${
                            index === activeIndex ? "d-block" : "d-none"
                          }`}
                        >
                          {fact.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;

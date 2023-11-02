import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import postAPI from "../../server/post/index";
import logo from "../../assets/icons/logo.svg";
import hacker from "../../assets/images/hackerImg.png";
import reactLogo from "../../assets/icons/icon-react.svg";
import vue from "../../assets/images/vue1image.png";
import amazon from "../../assets/icons/amazon.svg";
import amd from "../../assets/icons/amd.svg";
import megabox from "../../assets/icons/megabox.svg";
import najotTalim from "../../assets/icons/najot-talim.svg";
import logitech from "../../assets/icons/logitech.svg";
import Korzina from "./../../assets/icons/Korzina";
import uzum from "../../assets/icons/uzum.svg";
import img1 from "../../assets/images/card1-img.png";
import img2 from "../../assets/images/card2-img.png";
import img3 from "../../assets/images/card3-img.png";
import img4 from "../../assets/images/card4-img.png";
import img5 from "../../assets/images/card5-img.png";
import img6 from "../../assets/images/card6-img.png";
import iphone from "../../assets/images/iphone.png";
import icon from "../../assets/icons/polyglon.svg";
import video from "../../assets/video/video.mp4";
import poster from "../../assets/images/poster.png";
import Play from "../../assets/icons/Play";
import Pause from "../../assets/icons/Pause";
import Ellipse from "../../assets/images/Ellipse.png";
import Learn from "./../../assets/icons/Learn";
import Graduate from "./../../assets/icons/Graduate";
import Work from "./../../assets/icons/Work";
import rasm from "../../assets/images/shape.svg";
import { Button, Label, Modal, TextInput } from "flowbite-react";

import "../../index.scss";

const Layout = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [btn, setBtn] = useState(false);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
      setPlay(true);
    } else {
      videoElement.pause();
      setPlay(false);
    }
  };
  const [courses, setCourses] = useState([]);
  const [service, setServices] = useState([]);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const fetchCourses = async () => {
    try {
      const response = await postAPI.getCourse();

      if (response) {
        setCourses(response.data.courses);
      } else {
        console.log("Courses data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await postAPI.getServices();

      if (response.data && Array.isArray(response.data.services)) {
        const services = response.data.services;
        setServices(services);
      } else {
        console.log("Services data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchServices();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="#">
              <img src={logo} alt="" />
            </a>

            <div className="navbar_info">
              <ul className="navbar_info_list">
                <li>
                  <a href="#featured" className="navbar_info_list_item">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#services" className="navbar_info_list_item">
                    Services
                  </a>
                </li>
              </ul>
              <Link to="/login">
                <button className="">Join</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section id="intro">
          <div className="intro__wrapper">
            <div className="container">
              <div className="box flex items-start justify-between">
                <div className="box-left">
                  <p className="sm-title">Successful coaches are visionaries</p>
                  <h1>
                    Good <span>coaching</span> is good teaching & nothing else.
                    InshaaAlloh
                  </h1>
                  <button>Coureses</button>
                  <div>
                    <p>What do you want to learn today?</p>
                    <div>
                      <i className="bx bx-search-alt-2 text-white text-[20px]"></i>
                      <span> </span>
                      <input
                        className="border-none focus:border-none active:border-none"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-right">
                  <div className="box-img">
                    <img
                      className="w-[591px] h-[769px]"
                      src={hacker}
                      alt="hackerImg"
                    />
                    <img src={reactLogo} alt="logo" />
                    <img src={vue} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="intro-child">
          <div className="container">
            <div className="box-child">
              <img src={amazon} alt="logo" />
              <img src={amd} alt="logo" />
              <img src={megabox} alt="logo" />
              <img src={najotTalim} alt="logo" />
              <img src={logitech} alt="logo" />
              <img src={uzum} alt="logo" />
            </div>
          </div>
        </section>
        <section id="featured" className="featured">
          <div className="container">
            <div className="featured_wrapper">
              <div>
                <h2>
                  Featured <span>Course</span>
                </h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temporidunt ut labore veniam...
                </p>
              </div>

              <ul>
                {courses?.map((item) => (
                  <li
                    key={item._id}
                    data={item._id}
                    onClick={() => props.setOpenModal("form-elements")}
                  >
                    <div>
                      <img src={item.image} alt="card-image" />
                    </div>
                    <div className="card_body">
                      <div className="st-counter">
                        <p>5,957 Students</p>
                        <p>01h 49m</p>
                      </div>
                      <h3>{item.title}</h3>
                      <div className="price_box">
                        <p>$33.99</p>
                        <Korzina />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="btn-div">
                <button>Explore courses</button>
              </div>
            </div>
          </div>
          <div>
            <Modal
              show={props.openModal === "form-elements"}
              size="4xl"
              popup
              onClose={() => props.setOpenModal(undefined)}
            >
              <Modal.Body>
                <div className="space-y-6">
                  <div className="mt-[20px] flex items-center justify-between  border-b">
                    <div className="flex items-center gap-x-5">
                      <button className="text-[20px] text-blue-900 font-bold duration-200   active:bg-blue-700  active:text-white py-3 px-6  active:rounded-xl ">
                        Xizmatlar
                      </button>
                      <button className="text-[20px] text-blue-900 font-bold duration-200   active:bg-blue-700  active:text-white py-3 px-6  active:rounded-xl ">
                        Kurslar
                      </button>
                    </div>
                    <Modal.Header />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        HtmlFor="ism"
                        className="text-blue-800 text-[20px] font-bold"
                        value="Ism familiya sharifingiz"
                      />
                    </div>
                    <TextInput id="text" placeholder="F.I.SH" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        HtmlFor="tel"
                        className="text-blue-800 text-[20px] font-bold"
                        value="Telefon raqamingiz"
                      />
                    </div>
                    <TextInput id="number" placeholder="901234567" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        HtmlFor="text"
                        className="text-blue-800 text-[20px] font-bold"
                        value="Xizmatni tanlang"
                      />
                    </div>
                    <select className="w-full border-gray-800 opacity-70 text-[20px]  py-3 px-5 mt-[10px] rounded-lg">
                      <option selected value="Select">
                        Select...
                      </option>
                      <option value="nimadur">nimadur</option>
                      <option value="nimadur">nimadur</option>
                      <option value="nimadur">nimadur</option>
                    </select>
                  </div>

                  <div>
                    <Button
                      gradientMonochrome="info"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Jo'natish
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </section>

        <section id="why">
          <div className="container">
            <div className="wrapper">
              <h2>
                Why <span>learn</span> with our courses?
              </h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporidunt ut labore veniam...
              </p>

              <ul>
                <li>
                  <div className="icon-box">
                    <Learn />
                  </div>
                  <h3>01. Learn</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliqua.
                  </p>
                </li>
                <li>
                  <div className="icon-box">
                    <Graduate />
                  </div>

                  <h3>02. Graduate</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliqua.
                  </p>
                </li>
                <li>
                  <div className="icon-box">
                    <Work />
                  </div>

                  <h3>03. Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliqua.
                  </p>
                </li>
              </ul>

              <img className="image" src={rasm} alt="" />
            </div>
          </div>
        </section>

        <section id="categories">
          <div className="container">
            <div className="wrapper">
              <h2 className="title">
                Top <span>Categories</span>
              </h2>
              <p className="desc">12,000+ unique online course list designs</p>
              <ul className="flex flex-wrap">
                <li className=" ">
                  <img src={img1} alt="img" className="mb-[50px]" />
                  <h3>Digtal Marketing</h3>
                  <p c>25 Courses</p>
                </li>
                <li className="">
                  <img src={img2} alt="img" className="mb-[50px]" />
                  <h3>Web Development</h3>
                  <p>16 Courses</p>
                </li>
                <li className="">
                  <img src={img3} alt="img" className="mb-[50px]" />
                  <h3>Art & Humanities</h3>
                  <p>76 Courses</p>
                </li>
                <li className="">
                  <img src={img4} alt="img" className="mb-[50px]" />
                  <h3>Personal Development</h3>
                  <p>22 Courses</p>
                </li>
                <li className="">
                  <img src={img5} alt="img" className="mb-[50px]" />
                  <h3>IT and Software</h3>
                  <p>110 Courses</p>
                </li>
                <li className="">
                  <img src={img6} alt="img" className="mb-[50px]" />
                  <h3>Graphic Design</h3>
                  <p>85 Courses</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="wishes">
          <div className="container">
            <div className="wrapper">
              <div className="all">
                <div className="image">
                  <img src={iphone} alt="" />
                </div>

                <div className="texts">
                  <div className="h_text">
                    <p className="first">The number one factor in</p> <br />
                    <p className="second">relevance drives out resistance.</p>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla <br /> pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt <br /> mollit anim id est
                    laborum.
                  </p>
                  <button className="wish">Learn More</button>
                  <img className="icon" src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="video">
          <div className="container">
            <div className="wrapper">
              <div className="wrapper-vid">
                <span onClick={() => handlePlayClick()}>
                  {play ? <Pause /> : <Play />}
                </span>
                <video poster={poster} ref={videoRef} controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="service_wrapper">
              <div className="engtepa">
                <img src={Ellipse} alt="ellipse" className="ellipse" />
                <div className="tepatexts">
                  <h1 className="services_title">Services</h1>
                  <p className="service_title">What our student say about us</p>
                </div>
              </div>
              <div className="service_cards">
                {service?.map((item) => (
                  <div
                    className="card1"
                    onClick={() => props.setOpenModal("form-elements")}
                  >
                    <img
                      src={`${"http://api.webhub.uz" + item.image}`}
                      alt="image"
                      className="image"
                    />
                    <div className="texts">
                      <div className="texts_tepa">
                        <p>{item.users.length}</p>
                        <h6>01h 49m</h6>
                      </div>
                      <p className="texts_uchd">{item.title}</p>
                      <div className="texts_pastt">
                        <h5>$33.99</h5>
                        <div className=" cursor-pointer">
                          <Korzina />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__left">
              <h3>webhub.uz</h3>
              <p>
                Veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>

            <div className="footer__right">
              <div className="footer__right--about">
                <div className="footer__right--about-sss">
                  <h2>Quick Links</h2>
                  <div className="about__footer">
                    <div className="abouts">
                      <p>About</p>
                      <p>Course</p>
                    </div>
                    <div className="abouts">
                      <p>Blog</p>
                      <p>Contact</p>
                    </div>
                  </div>
                </div>
                <div className="footer__right--about-sss">
                  <h2>Contact us</h2>
                  <div className="about__footer res">
                    <div className="ggg">
                      <div className="with__svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M16.9325 12.9992V15.3742C16.9334 15.5947 16.8882 15.813 16.7999 16.015C16.7116 16.217 16.582 16.3983 16.4196 16.5474C16.2571 16.6964 16.0653 16.8099 15.8564 16.8806C15.6476 16.9512 15.4263 16.9774 15.2067 16.9576C12.7706 16.6929 10.4305 15.8604 8.37459 14.5272C6.46178 13.3117 4.84006 11.69 3.62459 9.77716C2.28665 7.71186 1.45403 5.36045 1.19417 2.91341C1.17439 2.69449 1.2004 2.47385 1.27057 2.26553C1.34073 2.05721 1.4535 1.86579 1.60169 1.70344C1.74989 1.5411 1.93027 1.41139 2.13134 1.32257C2.33241 1.23376 2.54977 1.18778 2.76959 1.18758H5.14459C5.52879 1.1838 5.90126 1.31985 6.19256 1.57037C6.48387 1.8209 6.67415 2.16881 6.72792 2.54924C6.82816 3.3093 7.01407 4.05557 7.28209 4.77383C7.3886 5.05718 7.41165 5.36513 7.34851 5.66119C7.28537 5.95725 7.13869 6.229 6.92584 6.44424L5.92042 7.44966C7.0474 9.43163 8.68845 11.0727 10.6704 12.1997L11.6758 11.1942C11.8911 10.9814 12.1628 10.8347 12.4589 10.7716C12.7549 10.7084 13.0629 10.7315 13.3463 10.838C14.0645 11.106 14.8108 11.2919 15.5708 11.3922C15.9554 11.4464 16.3066 11.6401 16.5577 11.9364C16.8087 12.2327 16.9421 12.611 16.9325 12.9992Z"
                            stroke="white"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>+998 99 649 98 07</p>
                      </div>
                      <div className="with__svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                        >
                          <path
                            d="M14.6333 14.75H3.45322C2.08676 14.75 0.96875 13.625 0.96875 12.25V3.5C0.96875 2.125 2.08676 1 3.45322 1H14.6333C15.9998 1 17.1178 2.125 17.1178 3.5V12.25C17.1178 13.625 15.9998 14.75 14.6333 14.75Z"
                            stroke="white"
                            strokeWidth="1.3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.96875 6L9.04328 11L17.1178 6"
                            stroke="white"
                            strokeWidth="1.3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>webhub@example.com</p>
                      </div>

                      <div className="with__svg res__">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.7736 0.622559C7.00757 0.622559 3.9419 3.7074 3.94189 7.49694C3.94189 14.1649 10.3884 19.2341 10.3884 19.2341C10.4985 19.3225 10.6351 19.3706 10.7759 19.3706C10.9167 19.3706 11.0533 19.3225 11.1633 19.2341C11.1633 19.2341 17.6099 14.1649 17.6099 7.49694C17.6098 3.7074 14.5396 0.622559 10.7736 0.622559ZM10.7736 1.87287C13.8682 1.87287 16.3673 4.38294 16.3673 7.49694C16.3673 12.9519 11.4585 17.2617 10.7782 17.8454C10.1011 17.2646 5.18443 12.954 5.18444 7.49694C5.18444 4.38294 7.67892 1.87287 10.7736 1.87287Z"
                            fill="white"
                          />
                          <path
                            d="M10.7735 4.37354C9.06569 4.37354 7.66944 5.77852 7.66943 7.497C7.66942 9.2155 9.06567 10.6251 10.7735 10.6251C12.4813 10.6251 13.8822 9.2155 13.8821 7.497C13.8821 5.77852 12.4813 4.37354 10.7735 4.37354ZM10.7735 5.62384C11.81 5.62384 12.6396 6.45406 12.6396 7.497C12.6396 8.53993 11.81 9.37476 10.7735 9.37476C9.73703 9.37476 8.91197 8.53993 8.91198 7.497C8.91198 6.45406 9.73704 5.62384 10.7735 5.62384Z"
                            fill="white"
                          />
                        </svg>

                        <p>Toshkent , Chilonzor A9</p>
                      </div>
                    </div>

                    <div className="with__svg res__remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M10.7736 0.622559C7.00757 0.622559 3.9419 3.7074 3.94189 7.49694C3.94189 14.1649 10.3884 19.2341 10.3884 19.2341C10.4985 19.3225 10.6351 19.3706 10.7759 19.3706C10.9167 19.3706 11.0533 19.3225 11.1633 19.2341C11.1633 19.2341 17.6099 14.1649 17.6099 7.49694C17.6098 3.7074 14.5396 0.622559 10.7736 0.622559ZM10.7736 1.87287C13.8682 1.87287 16.3673 4.38294 16.3673 7.49694C16.3673 12.9519 11.4585 17.2617 10.7782 17.8454C10.1011 17.2646 5.18443 12.954 5.18444 7.49694C5.18444 4.38294 7.67892 1.87287 10.7736 1.87287Z"
                          fill="white"
                        />
                        <path
                          d="M10.7735 4.37354C9.06569 4.37354 7.66944 5.77852 7.66943 7.497C7.66942 9.2155 9.06567 10.6251 10.7735 10.6251C12.4813 10.6251 13.8822 9.2155 13.8821 7.497C13.8821 5.77852 12.4813 4.37354 10.7735 4.37354ZM10.7735 5.62384C11.81 5.62384 12.6396 6.45406 12.6396 7.497C12.6396 8.53993 11.81 9.37476 10.7735 9.37476C9.73703 9.37476 8.91197 8.53993 8.91198 7.497C8.91198 6.45406 9.73704 5.62384 10.7735 5.62384Z"
                          fill="white"
                        />
                      </svg>

                      <p>Toshkent , Chilonzor A9</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__last">
            <p>Copyright {new Date().getFullYear()} | Mystery</p>

            <div className="accounts">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3109 16.6667C13.9699 16.6667 16.9361 13.682 16.9361 10.0001C16.9361 6.31818 13.9699 3.33341 10.3109 3.33341C6.65184 3.33341 3.68561 6.31818 3.68561 10.0001C3.68561 13.682 6.65184 16.6667 10.3109 16.6667ZM10.3109 18.3334C14.8846 18.3334 18.5924 14.6024 18.5924 10.0001C18.5924 5.39771 14.8846 1.66675 10.3109 1.66675C5.73708 1.66675 2.0293 5.39771 2.0293 10.0001C2.0293 14.6024 5.73708 18.3334 10.3109 18.3334Z"
                    fill="white"
                  />
                  <path
                    d="M10.3109 8.33325C10.3109 7.87302 10.6817 7.49992 11.1391 7.49992H11.9672C12.4246 7.49992 12.7954 7.12683 12.7954 6.66659C12.7954 6.20635 12.4246 5.83325 11.9672 5.83325H11.1391C9.7669 5.83325 8.65461 6.95254 8.65461 8.33325V9.99992H7.82645C7.36907 9.99992 6.99829 10.373 6.99829 10.8333C6.99829 11.2935 7.36907 11.6666 7.82645 11.6666H8.65461V16.6666C8.65461 17.1268 9.02537 17.4999 9.48276 17.4999C9.94015 17.4999 10.3109 17.1268 10.3109 16.6666V11.6666H11.9672C12.4246 11.6666 12.7954 11.2935 12.7954 10.8333C12.7954 10.373 12.4246 9.99992 11.9672 9.99992H10.3109V8.33325Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_367)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.68423 11.6665C1.31468 11.6704 0.430613 13.2403 1.27434 14.4298C2.48264 16.133 4.67373 17.5 8.33172 17.5C14.0005 17.5 18.5509 12.8514 17.9139 7.35925L18.8472 5.48108C19.4944 4.17857 18.3697 2.69685 16.9506 2.98245L15.7176 3.23057C15.3908 3.05702 15.0525 2.92606 14.7634 2.83117C14.1999 2.64627 13.5179 2.5 12.8866 2.5C11.7526 2.5 10.7739 2.79276 9.99607 3.37994C9.22712 3.96053 8.794 4.72354 8.55632 5.42421C8.44675 5.74717 8.37379 6.07112 8.32698 6.38203C7.887 6.24269 7.43838 6.05522 6.99917 5.82629C6.00274 5.30693 5.19698 4.64852 4.74244 4.07126C3.97985 3.10275 2.36375 3.17456 1.79665 4.43351C0.99736 6.20789 1.21661 8.31122 1.93507 10.0108C2.17589 10.5803 2.48914 11.1434 2.87184 11.6652C2.80632 11.666 2.74365 11.6663 2.68423 11.6665ZM8.33164 15.8333C5.13218 15.8333 3.4778 14.6672 2.62235 13.4614C2.58392 13.4072 2.62268 13.3333 2.68882 13.3332C3.55908 13.3307 5.34542 13.2892 6.52355 12.5954C6.58448 12.5595 6.57107 12.4691 6.50416 12.4465C3.75785 11.5173 2.19675 7.58216 3.30514 5.12158C3.33055 5.06517 3.40592 5.05772 3.44415 5.10628C4.7103 6.71432 7.47866 8.28933 9.88725 8.33242C9.93951 8.33333 9.97901 8.28558 9.97106 8.23361C9.874 7.60044 9.5034 4.16667 12.8865 4.16667C13.6944 4.16667 14.8964 4.56319 15.3391 4.96942C15.3595 4.98819 15.3873 4.99672 15.4145 4.99125L17.2753 4.61675C17.3429 4.60315 17.3965 4.67371 17.3657 4.73573L16.2115 7.05849C16.2034 7.07462 16.201 7.09312 16.204 7.11088C17.0124 11.6833 13.2906 15.8333 8.33164 15.8333Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_367">
                      <rect
                        width="19.8758"
                        height="20"
                        fill="white"
                        transform="translate(0.0500488)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9775 3.33341H7.35224C5.52273 3.33341 4.03962 4.8258 4.03962 6.66675V13.3334C4.03962 15.1743 5.52273 16.6667 7.35224 16.6667H13.9775C15.807 16.6667 17.2901 15.1743 17.2901 13.3334V6.66675C17.2901 4.8258 15.807 3.33341 13.9775 3.33341ZM7.35224 1.66675C4.60797 1.66675 2.3833 3.90532 2.3833 6.66675V13.3334C2.3833 16.0948 4.60797 18.3334 7.35224 18.3334H13.9775C16.7218 18.3334 18.9464 16.0948 18.9464 13.3334V6.66675C18.9464 3.90532 16.7218 1.66675 13.9775 1.66675H7.35224Z"
                    fill="white"
                  />
                  <path
                    d="M14.8057 6.66667C15.2631 6.66667 15.6339 6.29357 15.6339 5.83333C15.6339 5.3731 15.2631 5 14.8057 5C14.3483 5 13.9775 5.3731 13.9775 5.83333C13.9775 6.29357 14.3483 6.66667 14.8057 6.66667Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8057 9.99992C14.8057 12.3011 12.9518 14.1666 10.665 14.1666C8.37807 14.1666 6.52417 12.3011 6.52417 9.99992C6.52417 7.69874 8.37807 5.83325 10.665 5.83325C12.9518 5.83325 14.8057 7.69874 14.8057 9.99992ZM13.1494 9.99992C13.1494 11.3807 12.0371 12.4999 10.665 12.4999C9.29278 12.4999 8.18048 11.3807 8.18048 9.99992C8.18048 8.61917 9.29278 7.49992 10.665 7.49992C12.0371 7.49992 13.1494 8.61917 13.1494 9.99992Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_369)">
                    <path
                      d="M14.4827 3.33325C14.0253 3.33325 13.6545 3.70635 13.6545 4.16659C13.6545 4.62682 14.0253 4.99992 14.4827 4.99992H17.7953C18.2527 4.99992 18.6235 4.62682 18.6235 4.16659C18.6235 3.70635 18.2527 3.33325 17.7953 3.33325H14.4827Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9983 10.8334C11.9983 8.53225 13.8522 6.66675 16.1391 6.66675C18.426 6.66675 20.2799 8.53225 20.2799 10.8334V11.6667C20.2799 12.127 19.9091 12.5001 19.4517 12.5001H13.6546C13.6546 13.8808 14.7669 15.0001 16.1391 15.0001C16.7167 15.0001 17.2482 14.8017 17.6702 14.4691C17.8905 14.2952 18.1509 14.1667 18.431 14.1667C19.1407 14.1667 19.5947 14.9043 19.0982 15.4147C18.3466 16.1872 17.2985 16.6667 16.1391 16.6667C13.8522 16.6667 11.9983 14.8012 11.9983 12.5001V10.8334ZM16.1391 8.33341C14.7669 8.33341 13.6546 9.45266 13.6546 10.8334H18.6235C18.6235 9.45266 17.5113 8.33341 16.1391 8.33341Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.06037 4.99992V8.33325H6.20115C7.11591 8.33325 7.85747 7.58706 7.85747 6.66659C7.85747 5.74611 7.11591 4.99992 6.20115 4.99992H2.06037ZM8.51981 9.04725C9.13325 8.44225 9.51378 7.59914 9.51378 6.66659C9.51378 4.82564 8.03067 3.33325 6.20115 3.33325H1.7291C0.997298 3.33325 0.404053 3.93021 0.404053 4.66659V15.238C0.404053 16.027 1.03967 16.6666 1.82375 16.6666H6.20115C8.48804 16.6666 10.3419 14.8011 10.3419 12.4999C10.3419 11.0632 9.61929 9.79634 8.51981 9.04725ZM2.06037 9.99992V14.9999H6.20115C7.57329 14.9999 8.68563 13.8807 8.68563 12.4999C8.68563 11.1192 7.57329 9.99992 6.20115 9.99992H2.06037Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_369">
                      <rect
                        width="19.8758"
                        height="20"
                        fill="white"
                        transform="translate(0.404053)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0189 16.6667C13.6779 16.6667 16.6441 13.682 16.6441 10.0001C16.6441 6.31818 13.6779 3.33341 10.0189 3.33341C6.35985 3.33341 3.39362 6.31818 3.39362 10.0001C3.39362 13.682 6.35985 16.6667 10.0189 16.6667ZM10.0189 18.3334C14.5926 18.3334 18.3005 14.6024 18.3005 10.0001C18.3005 5.39771 14.5926 1.66675 10.0189 1.66675C5.44509 1.66675 1.7373 5.39771 1.7373 10.0001C1.7373 14.6024 5.44509 18.3334 10.0189 18.3334Z"
                    fill="white"
                  />
                  <path
                    d="M12.8961 17.8167C12.602 15.7082 12.112 13.7946 11.4224 11.9858C9.73441 12.8093 7.84637 14.2482 5.2503 16.8141C4.79609 16.4916 4.37556 16.1244 3.99506 15.7187C6.72165 13.013 8.80414 11.3954 10.7776 10.4486C10.5244 9.89637 10.2514 9.35196 9.95842 8.81254C7.63504 9.54937 4.9859 9.93762 1.7373 9.99312C1.73776 9.42112 1.79551 8.86254 1.90507 8.32293C4.7721 8.26112 7.09136 7.92722 9.09871 7.33376C8.16697 5.82934 7.07491 4.34437 5.81987 2.81576C6.30924 2.52552 6.83085 2.28447 7.378 2.09937C8.64447 3.66567 9.75412 5.2051 10.7043 6.77942C12.4896 6.06937 14.072 5.11107 15.6515 3.89098C16.0576 4.27018 16.4257 4.68987 16.7496 5.14364C15.1067 6.42239 13.4313 7.45881 11.5337 8.24011C11.813 8.76487 12.0749 9.29546 12.3197 9.83396C14.1968 9.23554 16.0445 9.17371 18.2596 9.16737C18.2866 9.44121 18.3005 9.71904 18.3005 10C18.3005 10.2816 18.2865 10.56 18.2595 10.8344C16.1193 10.842 14.532 10.9027 12.9646 11.3775C13.6376 13.1405 14.1355 15.0042 14.4552 17.0381C13.9677 17.3499 13.4456 17.6118 12.8961 17.8167Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__last--res">
            <h3>Copyright 2023 | Mystery</h3>

            <div className="accounts__res">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3109 16.6667C13.9699 16.6667 16.9361 13.682 16.9361 10.0001C16.9361 6.31818 13.9699 3.33341 10.3109 3.33341C6.65184 3.33341 3.68561 6.31818 3.68561 10.0001C3.68561 13.682 6.65184 16.6667 10.3109 16.6667ZM10.3109 18.3334C14.8846 18.3334 18.5924 14.6024 18.5924 10.0001C18.5924 5.39771 14.8846 1.66675 10.3109 1.66675C5.73708 1.66675 2.0293 5.39771 2.0293 10.0001C2.0293 14.6024 5.73708 18.3334 10.3109 18.3334Z"
                    fill="white"
                  />
                  <path
                    d="M10.3109 8.33325C10.3109 7.87302 10.6817 7.49992 11.1391 7.49992H11.9672C12.4246 7.49992 12.7954 7.12683 12.7954 6.66659C12.7954 6.20635 12.4246 5.83325 11.9672 5.83325H11.1391C9.7669 5.83325 8.65461 6.95254 8.65461 8.33325V9.99992H7.82645C7.36907 9.99992 6.99829 10.373 6.99829 10.8333C6.99829 11.2935 7.36907 11.6666 7.82645 11.6666H8.65461V16.6666C8.65461 17.1268 9.02537 17.4999 9.48276 17.4999C9.94015 17.4999 10.3109 17.1268 10.3109 16.6666V11.6666H11.9672C12.4246 11.6666 12.7954 11.2935 12.7954 10.8333C12.7954 10.373 12.4246 9.99992 11.9672 9.99992H10.3109V8.33325Z"
                    fill="white"
                  />
                </svg>
                <p>Facebook</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_367)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.68423 11.6665C1.31468 11.6704 0.430613 13.2403 1.27434 14.4298C2.48264 16.133 4.67373 17.5 8.33172 17.5C14.0005 17.5 18.5509 12.8514 17.9139 7.35925L18.8472 5.48108C19.4944 4.17857 18.3697 2.69685 16.9506 2.98245L15.7176 3.23057C15.3908 3.05702 15.0525 2.92606 14.7634 2.83117C14.1999 2.64627 13.5179 2.5 12.8866 2.5C11.7526 2.5 10.7739 2.79276 9.99607 3.37994C9.22712 3.96053 8.794 4.72354 8.55632 5.42421C8.44675 5.74717 8.37379 6.07112 8.32698 6.38203C7.887 6.24269 7.43838 6.05522 6.99917 5.82629C6.00274 5.30693 5.19698 4.64852 4.74244 4.07126C3.97985 3.10275 2.36375 3.17456 1.79665 4.43351C0.99736 6.20789 1.21661 8.31122 1.93507 10.0108C2.17589 10.5803 2.48914 11.1434 2.87184 11.6652C2.80632 11.666 2.74365 11.6663 2.68423 11.6665ZM8.33164 15.8333C5.13218 15.8333 3.4778 14.6672 2.62235 13.4614C2.58392 13.4072 2.62268 13.3333 2.68882 13.3332C3.55908 13.3307 5.34542 13.2892 6.52355 12.5954C6.58448 12.5595 6.57107 12.4691 6.50416 12.4465C3.75785 11.5173 2.19675 7.58216 3.30514 5.12158C3.33055 5.06517 3.40592 5.05772 3.44415 5.10628C4.7103 6.71432 7.47866 8.28933 9.88725 8.33242C9.93951 8.33333 9.97901 8.28558 9.97106 8.23361C9.874 7.60044 9.5034 4.16667 12.8865 4.16667C13.6944 4.16667 14.8964 4.56319 15.3391 4.96942C15.3595 4.98819 15.3873 4.99672 15.4145 4.99125L17.2753 4.61675C17.3429 4.60315 17.3965 4.67371 17.3657 4.73573L16.2115 7.05849C16.2034 7.07462 16.201 7.09312 16.204 7.11088C17.0124 11.6833 13.2906 15.8333 8.33164 15.8333Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_367">
                      <rect
                        width="19.8758"
                        height="20"
                        fill="white"
                        transform="translate(0.0500488)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Twitter</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9775 3.33341H7.35224C5.52273 3.33341 4.03962 4.8258 4.03962 6.66675V13.3334C4.03962 15.1743 5.52273 16.6667 7.35224 16.6667H13.9775C15.807 16.6667 17.2901 15.1743 17.2901 13.3334V6.66675C17.2901 4.8258 15.807 3.33341 13.9775 3.33341ZM7.35224 1.66675C4.60797 1.66675 2.3833 3.90532 2.3833 6.66675V13.3334C2.3833 16.0948 4.60797 18.3334 7.35224 18.3334H13.9775C16.7218 18.3334 18.9464 16.0948 18.9464 13.3334V6.66675C18.9464 3.90532 16.7218 1.66675 13.9775 1.66675H7.35224Z"
                    fill="white"
                  />
                  <path
                    d="M14.8057 6.66667C15.2631 6.66667 15.6339 6.29357 15.6339 5.83333C15.6339 5.3731 15.2631 5 14.8057 5C14.3483 5 13.9775 5.3731 13.9775 5.83333C13.9775 6.29357 14.3483 6.66667 14.8057 6.66667Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8057 9.99992C14.8057 12.3011 12.9518 14.1666 10.665 14.1666C8.37807 14.1666 6.52417 12.3011 6.52417 9.99992C6.52417 7.69874 8.37807 5.83325 10.665 5.83325C12.9518 5.83325 14.8057 7.69874 14.8057 9.99992ZM13.1494 9.99992C13.1494 11.3807 12.0371 12.4999 10.665 12.4999C9.29278 12.4999 8.18048 11.3807 8.18048 9.99992C8.18048 8.61917 9.29278 7.49992 10.665 7.49992C12.0371 7.49992 13.1494 8.61917 13.1494 9.99992Z"
                    fill="white"
                  />
                </svg>
                <p>Instagram</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_369)">
                    <path
                      d="M14.4827 3.33325C14.0253 3.33325 13.6545 3.70635 13.6545 4.16659C13.6545 4.62682 14.0253 4.99992 14.4827 4.99992H17.7953C18.2527 4.99992 18.6235 4.62682 18.6235 4.16659C18.6235 3.70635 18.2527 3.33325 17.7953 3.33325H14.4827Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9983 10.8334C11.9983 8.53225 13.8522 6.66675 16.1391 6.66675C18.426 6.66675 20.2799 8.53225 20.2799 10.8334V11.6667C20.2799 12.127 19.9091 12.5001 19.4517 12.5001H13.6546C13.6546 13.8808 14.7669 15.0001 16.1391 15.0001C16.7167 15.0001 17.2482 14.8017 17.6702 14.4691C17.8905 14.2952 18.1509 14.1667 18.431 14.1667C19.1407 14.1667 19.5947 14.9043 19.0982 15.4147C18.3466 16.1872 17.2985 16.6667 16.1391 16.6667C13.8522 16.6667 11.9983 14.8012 11.9983 12.5001V10.8334ZM16.1391 8.33341C14.7669 8.33341 13.6546 9.45266 13.6546 10.8334H18.6235C18.6235 9.45266 17.5113 8.33341 16.1391 8.33341Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.06037 4.99992V8.33325H6.20115C7.11591 8.33325 7.85747 7.58706 7.85747 6.66659C7.85747 5.74611 7.11591 4.99992 6.20115 4.99992H2.06037ZM8.51981 9.04725C9.13325 8.44225 9.51378 7.59914 9.51378 6.66659C9.51378 4.82564 8.03067 3.33325 6.20115 3.33325H1.7291C0.997298 3.33325 0.404053 3.93021 0.404053 4.66659V15.238C0.404053 16.027 1.03967 16.6666 1.82375 16.6666H6.20115C8.48804 16.6666 10.3419 14.8011 10.3419 12.4999C10.3419 11.0632 9.61929 9.79634 8.51981 9.04725ZM2.06037 9.99992V14.9999H6.20115C7.57329 14.9999 8.68563 13.8807 8.68563 12.4999C8.68563 11.1192 7.57329 9.99992 6.20115 9.99992H2.06037Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_369">
                      <rect
                        width="19.8758"
                        height="20"
                        fill="white"
                        transform="translate(0.404053)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Behance</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0189 16.6667C13.6779 16.6667 16.6441 13.682 16.6441 10.0001C16.6441 6.31818 13.6779 3.33341 10.0189 3.33341C6.35985 3.33341 3.39362 6.31818 3.39362 10.0001C3.39362 13.682 6.35985 16.6667 10.0189 16.6667ZM10.0189 18.3334C14.5926 18.3334 18.3005 14.6024 18.3005 10.0001C18.3005 5.39771 14.5926 1.66675 10.0189 1.66675C5.44509 1.66675 1.7373 5.39771 1.7373 10.0001C1.7373 14.6024 5.44509 18.3334 10.0189 18.3334Z"
                    fill="white"
                  />
                  <path
                    d="M12.8961 17.8167C12.602 15.7082 12.112 13.7946 11.4224 11.9858C9.73441 12.8093 7.84637 14.2482 5.2503 16.8141C4.79609 16.4916 4.37556 16.1244 3.99506 15.7187C6.72165 13.013 8.80414 11.3954 10.7776 10.4486C10.5244 9.89637 10.2514 9.35196 9.95842 8.81254C7.63504 9.54937 4.9859 9.93762 1.7373 9.99312C1.73776 9.42112 1.79551 8.86254 1.90507 8.32293C4.7721 8.26112 7.09136 7.92722 9.09871 7.33376C8.16697 5.82934 7.07491 4.34437 5.81987 2.81576C6.30924 2.52552 6.83085 2.28447 7.378 2.09937C8.64447 3.66567 9.75412 5.2051 10.7043 6.77942C12.4896 6.06937 14.072 5.11107 15.6515 3.89098C16.0576 4.27018 16.4257 4.68987 16.7496 5.14364C15.1067 6.42239 13.4313 7.45881 11.5337 8.24011C11.813 8.76487 12.0749 9.29546 12.3197 9.83396C14.1968 9.23554 16.0445 9.17371 18.2596 9.16737C18.2866 9.44121 18.3005 9.71904 18.3005 10C18.3005 10.2816 18.2865 10.56 18.2595 10.8344C16.1193 10.842 14.532 10.9027 12.9646 11.3775C13.6376 13.1405 14.1355 15.0042 14.4552 17.0381C13.9677 17.3499 13.4456 17.6118 12.8961 17.8167Z"
                    fill="white"
                  />
                </svg>
                <p>Dribble</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

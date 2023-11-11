import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import gordev from "../../img/logo/Gordev_trans.png";
import { Snail, Code2, SquareCode, Palette, Database } from "lucide-react";
import { Icon } from "../../icons";
import "./homepage.scss";

export const Homepage = () => {
  const welcomingRef = useRef(null);
  const getStartedRef = useRef(null);

  //homepage button refs
  const leftButtonRef = useRef(null);
  const centerButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    const app = document.querySelector(".App");
    const welcoming = welcomingRef.current;
    const getStarted = getStartedRef.current;

    // homepage button animation

    // welcome Timeout
    welcoming.classList.remove("hidden__intro");
    // lets get started timeout
    getStarted.classList.remove("hidden");

    setTimeout(() => {
      app.style.overflow = "auto";
    }, 2000);
  }, []);

  return (
    <Container>
      <main className="homepage">
        <div className="homepage__content tw-gap-64 xs:tw-gap-72  xl:tw-gap-96">
          <div ref={welcomingRef} className="homepage__intro hidden__intro">
            <h1
              ref={getStartedRef}
              className="get-started hidden tw-text-offBlack "
            >
              Frontend Developer
            </h1>
            <p className="tw-text-xl">
              Fusing <span>design</span> with{" "}
              <code className="tw-text-neutral-500">programming</code> through
              intuitive and innovative solutions.
            </p>
          </div>

          <div className="tw-w-screen tw-flex tw-flex-col tw-justify-center tw-bg-primary/50 tw-py-28 xs:tw-py-32 md:tw-py-36 lg:tw-py-40  xl:tw-py-48 tw-relative  ">
            <img
              src={gordev}
              alt="Illustration of Jordan at my desk coding"
              className="tw-absolute tw-translate-y-[-50%] tw-translate-x-[-50%] tw-top-[-6%] tw-left-1/2 tw-z-10 tw-w-full  xs:tw-w-3/4  sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-5/12 tw-max-w-2xl tw-p-6  tw-rounded-lg"
            />

            <div
              className={`tw-flex tw-flex-col tw-mx-auto tw-gap-4 tw-w-full tw-h-[50rem] xs:tw-h-[45rem] md:tw-h-[40rem] lg:tw-h-[35rem] xl:tw-h-[32rem] md:tw-w-[55%] tw-text-left tw-p-6 md:tw-p-0 tw-pt-6 xs:tw-pt-8 sm:tw-pt-9 md:tw-pt-10 lg:tw-pt-16 2xl:tw-pt-20 tw-max-w-4xl tw-relative`}
            >
              <button
                onClick={handleFlip}
                className=" tw-mx-auto tw-p-1 sm:tw-p-1 tw-w-fit tw-rounded-full  tw-pb-6"
              >
                {isFlipped ? (
                  <Code2
                    strokeWidth={1.5}
                    size={35}
                    className="tw-drop-shadow-xl hover:tw-scale-105 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-6 sm:tw-w-20"
                  />
                ) : (
                  <Snail
                    strokeWidth={1.5}
                    size={35}
                    className="tw-drop-shadow-xl hover:tw-scale-105 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-6 sm:tw-w-20"
                  />
                )}
              </button>
              <div
                className={`card-inner tw-w-full tw-h-36 tw-flex tw-flex-col tw-gap-4 ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className=" tw-flex tw-flex-col tw-gap-4 card-front">
                  <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-1 md:tw-gap-2 ">
                    {/*  Front of card */}
                    <h3>Hi, I'm Jordan.</h3>
                    <h3>Pleasure to meet you.</h3>
                  </div>

                  <p>
                    Since starting my freelance journey, I've revamped websites,
                    help entrepreneurs launch and collaborated with some
                    incredibly talented people to build software for both
                    businesses and everyday users.
                  </p>
                  <p>
                    There's nothing quite like seeing a idea take shape, with
                    interfaces that just feel right and code that holds strong.
                    I'm naturally curious and meticulous at heart, tackling each
                    challenge as a stepping stone to becoming a more adept
                    developer.
                  </p>
                </div>
                {/* BAck of card */}
                <div className="tw-w-full  tw-flex tw-flex-col tw-gap-4 card-back  tw-rounded-lg">
                  <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-1 md:tw-gap-2">
                    <h3> Behind the code</h3>
                  </div>
                  <p>
                    When not bypassing the mainframe, I’m probably baking and
                    cooking up a storm, flying around Denver's bike trails on my
                    single-speed, searching for the best campsite in existence,
                    or devouring a great fantasy series (Stephen King'sThe Dark
                    Tower is my current favorite).
                  </p>
                </div>
              </div>
            </div>

            <div className="tw-absolute tw-translate-y-[-50%] tw-translate-x-[-50%] tw-top-[150%]  lg:tw-top-auto lg:tw-bottom-[-80%]  tw-left-1/2 tw-z-10 tw-bg-neutral-50 tw-flex tw-flex-col lg:tw-items-start lg:tw-flex-row tw-p-4 tw-rounded-lg tw-w-[90%] md:tw-justify-evenly tw-shadow-xl ">
              {/* Frontend */}
              <div className="tw-p-6 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-flex-grow  lg:tw-w-1/3">
                <div className=" tw-bg-secondary tw-text-black tw-rounded-full  tw-w-fit tw-p-4">
                  <SquareCode size={40} />
                </div>

                <h1 className="tw-font-bold tw-text-3xl tw-text-offBlack">
                  Frontend
                </h1>

                <div className=" tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-8">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Languages
                    </h2>
                    <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2">
                      <p>HTML,</p> <p>CSS,</p> <p>JavaScript</p>
                    </div>
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Frameworks & Libraries
                    </h2>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                      <p>React</p> <p>Nextjs</p> <p>React Native</p>
                      <p>TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" tw-border   tw-self-stretch"></div>
              {/* Backend */}
              <div className="tw-p-6 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-flex-grow  lg:tw-w-1/3">
                <div className=" tw-bg-secondary tw-text-black tw-rounded-full  tw-w-fit tw-p-4">
                  <Database size={40} />
                </div>
                <h1 className="tw-font-bold tw-text-3xl tw-text-offBlack">
                  Backend
                </h1>

                <div className=" tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-8">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Languages & CMS
                    </h2>
                    <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2">
                      <p>Node.js,</p> <p>Git,</p> <p>Express,</p>
                      <p>Sanity.io,</p> <p>Wordpress,</p> <p>Shopify</p>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Databases & Tools
                    </h2>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                      <p>MongoDB</p>
                      <p>AWS</p> <p>SQL</p> <p>NoSQL</p>
                      <p>RESTful APIs</p> <p>Git</p> <p>Vercel</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" tw-border   tw-self-stretch"></div>
              {/* Design */}
              <div className="tw-p-6 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-flex-grow  lg:tw-w-1/3">
                <div className=" tw-bg-secondary tw-text-black tw-rounded-full  tw-w-fit tw-p-4">
                  <Palette size={40} />
                </div>
                <h1 className="tw-font-bold tw-text-3xl tw-text-offBlack">
                  Design
                </h1>

                <div className=" tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-8">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Libraries
                    </h2>
                    <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2">
                      <p>Bootstrap,</p> <p>Material UI,</p> <p>TailwindCSS</p>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <h2 className="tw-text-primary tw-font-medium">
                      Design Tools
                    </h2>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                      <p>Figma</p>
                      <p>SASS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

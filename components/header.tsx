"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Me from "@/asset/Me.svg";
import TechIcon from "./TechIcon";

export default function Hero() {
  const circles = [344, 544, 744, 944];

  const techIcons = [
    {
      name: "GitHub",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current "
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      position: "top-1/4 left-1/4 lg:top-1/2 lg:left-[1220px]  ",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      position: "lg:top-1/3 lg:right-1/4 top-[270px] left-[445px] ",
    },
    {
      name: "GitLab",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>GitLab</title>
          <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 00.522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 00.522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 00-.957-.684.987.987 0 00-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 00-.942-.69h-.006zm1.82 8.709H8.02l2.139 6.594-5.49-6.594zm3.63 0h5.216l-2.61 8.044-2.606-8.044zm5.441 0h1.355l-5.49 6.596 2.139-6.596zm-10.486.068l5.489 6.594H1.844l3.406-6.594z" />
        </svg>
      ),
      position: "lg:top-[870px] lg:lg:left-1/2 top-[100px] right-[100px]",
    },
    {
      name: "Docker",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>Docker</title>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
        </svg>
      ),
      position: "lg:left-[890px] lg:top-[50px] top-[400px] left-[450px] overflow-hidden",
    },
    {
      name: "Next.js",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>Next.js</title>
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
        </svg>
      ),
      position: "top-[100px] left-1/4",
    },
    {
      name: "React",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>React</title>
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      position: "lg:top-[230px] lg:left-1/2 top-[260px] left-[0px]",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>Tailwind CSS </title>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
      position: "lg:top-[500px] lg:left-[500px] top-1/2 left-[50px]",
    },
    {
      name: "TypeScript",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8 w-7 h-7 text-white fill-current"
        >
          <title>TypeScript</title>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.478 7.273c.627 0 1.189.047 1.688.14.499.093.966.228 1.4.406v2.773a3.93 3.93 0 0 0-.944-.452 5.597 5.597 0 0 0-1.155-.204c-.413-.034-.838-.051-1.273-.051-.528 0-.944.064-1.248.19-.304.127-.529.296-.678.51-.15.215-.224.466-.224.752 0 .245.052.463.158.656.105.192.263.366.472.522.208.156.477.299.806.43.329.13.735.267 1.215.41.556.164 1.05.355 1.482.574.43.218.798.494 1.1.828.303.333.528.73.678 1.19.15.459.224.998.224 1.617 0 .748-.133 1.39-.4 1.926a3.593 3.593 0 0 1-1.112 1.31c-.49.354-1.068.623-1.736.806-.667.182-1.396.273-2.188.273-.663 0-1.287-.058-1.87-.173a6.732 6.732 0 0 1-1.502-.48v-2.912c.454.278.954.51 1.498.697a6.118 6.118 0 0 0 1.91.322c.58 0 1.049-.064 1.406-.19.358-.127.631-.297.826-.51.195-.215.292-.475.292-.782a1.13 1.13 0 0 0-.152-.594 1.35 1.35 0 0 0-.442-.448c-.19-.126-.436-.24-.736-.342a7.381 7.381 0 0 0-.982-.273 22.08 22.08 0 0 1-1.288-.372 4.054 4.054 0 0 1-1.038-.504 2.928 2.928 0 0 1-.826-.798c-.22-.33-.388-.727-.504-1.19-.115-.463-.173-1.015-.173-1.657 0-.748.129-1.391.388-1.93.258-.539.625-.998 1.1-1.378.477-.38 1.049-.676 1.718-.889.668-.213 1.406-.32 2.213-.32zM9.99 7.455v2.29H5.33v11.527H2.556V9.745H.01V7.455h9.98z" />
        </svg>
      ),
      position:
        "lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 top-[390px] left-[220px]",
    },
  ];

  return (
    <section id="home" className="bg-[#0b0414] overflow-hidden min-h-screen relative">
      <div className="relative container mx-auto px-4 py-12 md:py-24 lg:py-32 lg:px-8">
        <div className="opsity-10">
          {circles.map((size, index) => (
            <div
              key={index}
              className="absolute border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ height: `${size}px`, width: `${size}px` }}
            ></div>
          ))}

          {techIcons.map((icon, index) => (
            <TechIcon
              key={index}
              icon={icon.icon}
              name={icon.name}
              className={icon.position}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mt-6 w-52 h-52 md:w-80 md:h-80 mx-auto lg:mx-0 lg:left-[200px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: "385px",
                  height: "431px",
                  left: "calc(50% - 192.5px)",
                  top: "calc(50% - 215.5px)",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
                }}
              />
              <Image
                src={Me}
                alt="Picture of Behailu Bekele"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-contain relative  md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] priority"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-white space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="lg:text-6xl text-4xl text-center lg:text-left font-bold  mt-24 lg:mt-0">
              Hello! I Am{" "}
              <span className="text-[#7127BA] relative inline-block">
                Behailu Bekele
              </span>
            </h1>
            <div className="text-center lg:text-left">
              <p className="text-xs font-light text-white/50 ">
                A Developer who
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Writes code <br /> that{" "}
                <span className="relative text-[#763CAC]">
                  stands out
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-b from-[#763CAC] to-[#763CAC] transform rotate-5"></span>
                </span>{" "}
                ...
              </h2>
              <p className="mt-4 text-sm font-light text-white/50">
                Because if the code doesn't make an impact, what's the point?
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 lg:mt-24 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="lg:ml-20 lg:left-[200px]">
            <h2 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold font-['Preahvihear'] tracking-wide">
              I'm a Full-Stack Developer.
            </h2>
            <p className="text-white/50 text-sm md:text-base font-['Ebrima'] font-normal tracking-wide max-w-3xl">
              A self-taught Full-Stack Developer with 1+ years of experience. I
              specialize in building scalable, efficient, and robust web
              applications that bridge the gap between cutting-edge technologies
              and user-centric design. My passion lies in creating seamless,
              high-performance solutions that meet both user needs and business
              objectives.
            </p>
          </div>
        </motion.div>
        <div className="lg:absolute  lg:top-[600px] lg:left-[950px] ">
          <motion.div
            className="mt-12 lg:mt-24 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold pb-0 font-['Preahvihear'] tracking-wide">
              " Also I'm a Graphic Designer.
            </h2>
            <p className="text-white/50 text-sm md:text-base font-['Ebrima'] font-normal tracking-wide max-w-3xl">
              Creative and detail-oriented Graphic Designer with over 2 years of
              experience in visual storytelling. I specialize in crafting
              compelling designs that balance artistic vision with strategic
              communication. My expertise lies in impactful branding, digital
              assets, and print materials that really resonate with target
              audiences. Passionate about bringing ideas into visually stunning
              and meaningful designs, I try to provide solutions that meet the
              objectives of the clients and elevate brand identity."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

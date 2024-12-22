import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./components/Icons/GithubIcon";
import LinkedinIcon from "./components/Icons/LinkedinIcon";
import MailIcon from "./components/Icons/MailIcon";

export default function Home() {
  /* return (
    <main className='flex flex-col gap-12'>
      
      <div id="main-text-container" className='flex flex-col items-center gap-10'>
        <section className='flex flex-col items-center gap-5 p-12'>
          <h1 id="name-text" className="main-text text-3xl md:text-5xl tracking-wider">Marius Wagner</h1>
          <h3 id="attributes-text" className="main-text text-xl md:text-3xl tracking-wider">Student & Programmer</h3>
          <ul className="main-socials flex items-center jusify-center gap-10">
            <li>
              <Link href="https://github.com/Marius1501" className="main-social-icon" target="_blank">
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/marius-wagner-b39524210/" className="main-social-icon" target="_blank">
                <LinkedinIcon />
              </Link>
            </li>
            <li>
              <Link href="mailto:malemo2001@gmail.com" className="main-social-icon" target="_blank">
                <MailIcon />
              </Link>
            </li>
          </ul>
        </section>
      </div>

      
      <section className='flex flex-col items-center justify-center gap-10'>
        <h2 className="caption-home text-2xl md:text-4xl tracking-wider">Open Source Projects I worked on</h2>
        <ul id="projects" className='flex items-center justify-center gap-12'>
          <li>
            <Link href="https://github.com/TeamNewPipe/NewPipe" className="project-link" target="_blank">
              <div className="tooltip">
                <div className="zoom flex justify-center">
                  <Image src="/img/icons/new_pipe_icon.png" alt="NewPipe" className="project-logo" width={100} height={100} />
                </div>
                <span className="tooltip-text hidden">NewPipe</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/TeamNewPipe/NewPipe" className="project-link" target="_blank">
              <div className="tooltip">
                <div className="zoom flex justify-center">
                  <Image src="/img/icons/TUM_icon.png" alt="TUM-Dev" className="project-logo" width={100} height={100} />
                </div>
                <span className="tooltip-text hidden">TUM-Dev</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/TeamNewPipe/NewPipe" className="project-link" target="_blank">
              <div className="tooltip">
                <div className="zoom flex justify-center">
                  <Image src="/img/icons/ankiandroid_logo.png" alt="Anki-Android" className="project-logo" width={100} height={100} />
                </div>
                <span className="tooltip-text hidden">Anki-Android</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      
      
      
    </main>
  );*/

  return null;
}

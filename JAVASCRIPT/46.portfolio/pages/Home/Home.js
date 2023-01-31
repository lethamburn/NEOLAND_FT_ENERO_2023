import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="home">
    <p>Hey, I'm</p>
    <h1>Peter Parker</h1>
    <p>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
    <a href="mailto:peterpaker@gmail.com">Say hi →</a>
  </section>
  `;
};

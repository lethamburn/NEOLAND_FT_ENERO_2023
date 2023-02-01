import "./About.css";

const template = () => `
<section class="about">
    <h2>About</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

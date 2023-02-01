import "./Gallery.css";

const template = () => `
<section class="gallery">
    <h2>Gallery</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

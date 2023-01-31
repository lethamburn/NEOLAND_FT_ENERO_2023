import "./Footer.css";
import { Button } from "../Button/Button.js";

export const Footer = () => `
<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
${Button("/icons/telegram.png", "Telegram")}
</div>
`;

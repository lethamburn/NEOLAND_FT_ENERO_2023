import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <FormattedMessage id="header.home" />
          </a>
        </li>
        <li>
          <a href="#">
            <FormattedMessage id="header.gallery" />
          </a>
        </li>
        <li>
          <a href="#">
            <FormattedMessage id="header.about" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

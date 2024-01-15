import { FC } from "react";
import "./Contact.scss";
import Image from "next/image";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="contact">
      <p>
        Feel free to reach out to me whether you have a project, idea,
        suggestion, or just want to chat.
      </p>
      <div className="links">
        <a href="mailto:mohanadprogrammer96@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M20 4.5H4C2.89543 4.5 2 5.39543 2 6.5V18.5C2 19.6046 2.89543 20.5 4 20.5H20C21.1046 20.5 22 19.6046 22 18.5V6.5C22 5.39543 21.1046 4.5 20 4.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 7.5L13.03 13.2C12.7213 13.3934 12.3643 13.496 12 13.496C11.6357 13.496 11.2787 13.3934 10.97 13.2L2 7.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Email</span>
        </a>
        <a href="https://github.com/MohanadHani">
          <Image src="/assets/logos/github.png" alt="" width="20" height="20" />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/mohanad-hani-5b3194115/">
          <Image
            src="/assets/logos/linkedin.png"
            alt=""
            width="20"
            height="20"
          />
          <span>Linked In</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
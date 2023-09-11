import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 3rem;
  min-height: 95vh;
`;

const Quote = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`;

const Home = () => {
  return (
    <>
      <Section>
        <h1>
          Hi, I am Kaio! <br />
          I’m a product designer.
        </h1>
        <p>
          I design human-centered digital solutions that inspire and empower.
        </p>
        <Link to={{ pathname: "http://kaio.youcanbook.me/" }} target="_blank">
          Book a call
        </Link>
      </Section>
      <Section style={{ background: "#F5F5F7" }}>
        <Quote>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="56"
            viewBox="0 0 78 56"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M78 39.1694V22.3388H69.6973C65.1308 22.3388 61.3945 22.3042 61.3945 22.2618C61.3945 22.2196 63.8625 17.228 66.8789 11.1694C69.8953 5.11084 72.3633 0.11919 72.3633 0.0769615C72.3633 0.0345764 68.6272 0 64.0607 0H55.7583L50.1974 11.1689L44.6367 22.338L44.6367 39.1689V56L61.3184 56H78V39.1694ZM33.3633 39.1694L33.3633 22.3388H25.0604H16.7574L22.3184 11.1694L27.8794 0H19.5005H11.1216L5.5607 11.1689L0 22.338V39.1689V56H16.6816H33.3633V39.1694Z"
              fill="#FA4A7F"
            />
          </svg>
          <p>
            We are all in the gutter, but some of us are looking at the stars.{" "}
          </p>
          <b>
            <p>Oscar Wilde</p>
          </b>
        </Quote>
      </Section>
    </>
  );
};

export default Home;

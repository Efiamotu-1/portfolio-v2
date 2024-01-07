import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <section className="fixed hidden z-20 text-gray-400 md:block">
      <div className="links flex flex-col items-center gap-3 fixed bottom-0 left-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Efiamotu-1"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            className="hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/musa-habeeb"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="lg"
            className="hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/EFYAMOTU"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@musahabeebefy10"
        >
          <FontAwesomeIcon
            icon={faMedium}
            size="lg"
            className="hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <p className="vertical-line h-[10vh] border-r border-gray-400" />
      </div>
      <div className="email flex flex-col items-center gap-4 fixed top-16 right-6">
        <p className="vertical-line h-[10vh] border-r border-gray-400" />
        <a
          href="mailto:efiamotuu@gmail.com"
          className="cursor-pointer w-5 -rotate-90 mt-[8.5rem] hover:mt-[11.8rem] hover:text-aqua/80 transition-all duration-200"
        >
          efiamotuu@gmail.com
        </a>
      </div>
    </section>
  );
};

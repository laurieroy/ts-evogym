import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            laudantium dolorum porro cupiditate similique molestias tempora,
            repellat labore impedit animi libero sequi est eos ut hic! Fugiat
            libero ea et!
          </p>

          <p>&copy; Evogym All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold capitalize">links</h4>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5">amet consectetur adipisicing elit.</p>
          <p>Aut molestias provident reprehenderit soluta</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold capitalize">contact us</h4>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

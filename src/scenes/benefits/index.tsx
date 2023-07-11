import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="2-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum non similique veniam dolor voluptate vitae delectus, odit sint quod est dolore dolorum totam tempore quae magni, eos nam dolorem.",
  },
  {
    icon: <UserGroupIcon className="2-6 h-6" />,
    title: "Hundred of diverse classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum non similique veniam dolor voluptate vitae delectus, odit sint quod est dolore dolorum totam tempore quae magni, eos nam dolorem.",
  },
  {
    icon: <AcademicCapIcon className="2-6 h-6" />,
    title: "Expert and pro trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum non similique veniam dolor voluptate vitae delectus, odit sint quod est dolore dolorum totam tempore quae magni, eos nam dolorem.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto h-full w-5/6 py-20">
      <motion.div
        className="md_w-3/5 md:my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-3/5 md:my-5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/*  DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/*  DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                cumque accusamus fuga similique consectetur sapiente porro
                voluptates impedit distinctio. Error sapiente quidem cum
                mollitia incidunt asperiores, accusamus obcaecati tempore
                voluptates.
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                cumque accusamus fuga similique consectetur sapiente porro
                voluptates impedit distinctio. Error sapiente quidem cum
                mollitia incidunt asperiores, accusamus obcaecati tempore
                voluptates.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { Vortex } from "@/components/ui/Vortex"; // Import the Vortex component

const Approach = () => {
  return (
    <section className="w-full py-20 relative">
      <h1 id = 'approach'className="heading pb-10">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="relative w-full">
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-[25%]"> {/* Adjust the max-width as per the requirement */}
            {/* Vortex background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Vortex className="w-full h-full" particleCount={1000} baseSpeed={0.2} rangeSpeed={1.5} baseRadius={1} rangeRadius={2}  />
            </div>
            {/* Content above the Vortex */}
            <Card title="Problem Definition and Data Collection" icon={<AceternityIcon order="Phase 1" />}
              description="We'll define the project goals, identify necessary data sources, and conduct initial exploratory data analysis."
            >
              <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
            </Card>
          </div>

          <div className="relative w-full max-w-[25%]"> {/* Adjust the max-width as per the requirement */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Vortex className="w-full h-full" particleCount={1000} baseSpeed={0.2} rangeSpeed={1.5} baseRadius={1} rangeRadius={2} backgroundColor="#000000" />
            </div>
            <Card title="Model Development and Iteration" icon={<AceternityIcon order="Phase 2" />}
              description='We will design, build, and train the model, iterating based on performance and feedback.'
            >
              <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[236, 72, 153], [232, 121, 249]]} dotSize={2} />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          </div>

          <div className="relative w-full max-w-[25%]"> {/* Adjust the max-width as per the requirement */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Vortex className="w-full h-full" particleCount={1000} baseSpeed={0.2} rangeSpeed={1.5} baseRadius={1} rangeRadius={2} backgroundColor="#000000" />
            </div>
            <Card title="Evaluation, Deployment, and Optimization" icon={<AceternityIcon order="Phase 3" />}
              description='We will rigorously test the model, deploy it into production, and continuously monitor and optimize its performance.'
            >
              <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, icon, children, description }: { title: string; icon: React.ReactNode; children?: React.ReactNode; description: string }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full h-[35rem] relative rounded-3xl">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#4ecff' }}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;

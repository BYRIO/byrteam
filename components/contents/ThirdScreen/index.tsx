import { LayoutGroup, motion } from 'framer-motion';
import { useState, ComponentProps } from 'react';

function Accordion(props: ComponentProps<typeof motion.div>) {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      {...props}
      layout
      style={{ height: isOpen ? '100px' : '500px' }}
      onClick={() => setOpen(!isOpen)}
    />
  );
}

export function ThirdScreen() {
  return (
    <section className="h-screen bg-cyan-100">
      <LayoutGroup>
        <Accordion className="w-[240px] bg-purple-300" />
        <Accordion className="w-[240px] bg-green-300" />
      </LayoutGroup>
    </section>
  );
}

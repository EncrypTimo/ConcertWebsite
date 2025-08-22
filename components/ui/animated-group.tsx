'use client';

import React, { Children, isValidElement, useMemo } from 'react';
import { motion, Variants } from 'framer-motion'; // Corrected import

// --- API CLARITY ---
// Renamed 'asChild' to 'itemAs' to be more descriptive and avoid confusion
// with the 'asChild' pattern from libraries like Radix.
export type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: 'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide' | 'zoom' | 'flip';
  as?: React.ElementType;
  itemAs?: React.ElementType; // Renamed from asChild
};

// Default variants remain largely the same, but are now simpler to merge.
const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: 'spring', bounce: 0.3 } },
};

const presetVariants: Record<NonNullable<AnimatedGroupProps['preset']>, Variants> = {
  fade: {},
  slide: { hidden: { y: 20 }, visible: { y: 0 } },
  scale: { hidden: { scale: 0.8 }, visible: { scale: 1 } },
  blur: { hidden: { filter: 'blur(4px)' }, visible: { filter: 'blur(0px)' } },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: { hidden: { scale: 0.5 }, visible: { scale: 1 } },
  flip: { hidden: { rotateX: -90 }, visible: { rotateX: 0 } },
};

// --- MAIN COMPONENT REFACTOR ---
export function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as: ContainerComponent = 'div',
  itemAs: ItemComponent = 'div',
}: AnimatedGroupProps) {
  // --- ROBUST VARIANT MERGING ---
  // This new logic correctly combines variants with a clear order of precedence:
  // 1. Custom `variants` prop (highest priority)
  // 2. Selected `preset`
  // 3. Default variants (lowest priority)
  const finalItemVariants = useMemo(
    () => ({
      hidden: {
        ...defaultItemVariants.hidden,
        ...(preset ? presetVariants[preset].hidden : {}),
        ...variants?.item?.hidden,
      },
      visible: {
        ...defaultItemVariants.visible,
        ...(preset ? presetVariants[preset].visible : {}),
        ...variants?.item?.visible,
      },
    }),
    [preset, variants?.item]
  );

  const finalContainerVariants = useMemo(
    () => ({
      hidden: {
        ...defaultContainerVariants.hidden,
        ...variants?.container?.hidden,
      },
      visible: {
        ...defaultContainerVariants.visible,
        ...variants?.container?.visible,
      },
    }),
    [variants?.container]
  );

  // --- CORRECT DYNAMIC COMPONENT RENDERING ---
  // This is the standard, performant way to create dynamic motion components in Framer Motion.
  // The previous `motion.create` API is not standard and could cause errors.
  const MotionContainer = motion(ContainerComponent);
  const MotionItem = motion(ItemComponent);

  return (
    <MotionContainer
      initial="hidden"
      // Using `whileInView` is often better for sections further down the page.
      // It triggers the animation when the element enters the viewport.
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={finalContainerVariants}
      className={className}>
      {Children.map(children, (child) => {
        // --- REACT BEST PRACTICE: KEY HANDLING ---
        // Ensure we're only wrapping valid React elements.
        if (!isValidElement(child)) {
          return child;
        }

        // The key is now preserved from the original child element, preventing
        // common React bugs. Using `index` as a key is an anti-pattern.
        return (
          <MotionItem key={child.key} variants={finalItemVariants}>
            {child}
          </MotionItem>
        );
      })}
    </MotionContainer>
  );
}
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

// --- BEST PRACTICE ---
// Defining animation variants outside the component prevents them from being
// recreated on every render, which is great for performance.
import type { Variants } from 'framer-motion'

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

// --- COMPONENT ARCHITECTURE ---
// Extracted the decorative background blobs into their own component.
// This cleans up the main component's JSX and makes the code more readable and reusable.
const HeroBackground = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 isolate hidden opacity-65 lg:block">
    <div className="absolute left-0 top-0 h-[20rem] w-[8.75rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)] md:h-[40rem] md:w-[17.5rem] lg:h-[80rem] lg:w-[35rem] lg:-translate-y-1/2" />
    <div className="absolute left-0 top-0 h-[20rem] w-[3.75rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%] md:h-[40rem] md:w-[7.5rem] lg:h-[80rem] lg:w-[15rem]" />
    <div className="absolute left-0 top-0 h-[20rem] w-[3.75rem] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] md:h-[40rem] md:w-[7.5rem] lg:h-[80rem] lg:w-[15rem] lg:-translate-y-1/2" />
    <div className="absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
  </div>
)

export default function HeroSection() {
  // --- CODE QUALITY ---
  // Using a variable for the map URL is cleaner and easier to update.
  // The original URL was invalid; this one correctly links to Google Maps.
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=UPCPI-JCTAG+Camarin'

  return (
    <>
      <HeroHeader />
      <main className="relative overflow-hidden">
        <HeroBackground />

        <section className="relative px-6 pt-24 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#Goal"
                  className="group mx-auto inline-flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border">
                  <span className="text-sm text-foreground">
                    Learn More About Our Goal
                  </span>
                  <span className="block h-4 w-0.5 border-l bg-white dark:bg-zinc-900" />
                  <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      {/* --- CODE QUALITY --- 
                          Using Array(2).fill(0).map(...) is a concise way to render 
                          multiple identical elements without duplicating code. */}
                      {Array(2)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="flex size-6 shrink-0">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                        ))}
                    </div>
                  </div>
                </Link>
              </AnimatedGroup>

              <TextEffect
                as="h1"
                preset="fade-in-blur"
                speedSegment={0.3}
                className="mt-8 text-balance text-5xl md:text-7xl lg:mt-10 xl:text-[7.25rem]">
                A Night of Praise
              </TextEffect>

              <TextEffect
                as="p"
                preset="fade-in-blur"
                per="line"
                delay={0.5}
                speedSegment={0.3}
                className="mx-auto mt-6 max-w-2xl text-balance text-lg md:text-2xl">
                October 19, 2025 at UPCPI-JCTAG (Camarin) Church
              </TextEffect>

              <TextEffect
                as="p"
                preset="fade-in-blur"
                per="line"
                delay={0.9}
                speedSegment={0.4}
                className="mx-auto mt-2 max-w-2xl text-balance font-light">
                Isang Gabi ng Papuri: Sama-samang Pagsamba at Pasasalamat.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5">
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
                      Get Directions!
                    </Link>
                  </Button>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-[2.625rem] rounded-xl px-5">
                  <Link href="#Pricing">See our Ticket Pricing</Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
import { Camera, Music } from 'lucide-react'
import Image from 'next/image'
import JctagMockUp from '@/public/assets/JctagMockUp.png'

export default function ContentSection() {
    return (
<section id="Goal" className="py-16 md:py-16">
  <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-8">
    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
      Sing with us, build with us—be part of God&apos;s work!
    </h2>

    {/* Responsive grid: 1 col on mobile, 2 col on md */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      
      {/* Left side - text */}
      <div className="relative z-10 space-y-8">
        <p>
          <span className="font-medium">UPCPI-JCTAG (Camarin)</span> is stepping into a new chapter as we expand our territory and continue to spread God&apos;s work. Through this concert, we&apos;re not just raising music—we&apos;re raising hearts, faith, and the foundation to build our church.{" "}
        </p>
        <p>
          Huge  thanks to our <span className='font-medium'>JCTAG-Music Team</span> and <span className='font-medium'>JCTAG-Media Team</span> for their dedication and hard work in making this event possible. Your passion and commitment are the heartbeat of this concert, and we can&apos;t wait to see you all there!
        </p>
        {/* Two small feature columns */}
        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Music className="size-4" />
              <h3 className="text-sm font-medium">JCTAG-Music Team</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Through music, we&apos;re building a community that sings together, prays together, and grows together.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Camera className="size-4" />
              <h3 className="text-sm font-medium">JCTAG- Media Team</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Through media, we&apos;re building a community that share the message and mission to the world.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - image */}
      <div className="relative">
        <div
          aria-hidden
          className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-99% md:block"
        ></div>
        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
          <Image
            src={JctagMockUp}
            className="hidden rounded-[12px] dark:block"
            alt="payments illustration dark"
            width={2007}
            height={929}
          />
          <Image
            src={JctagMockUp}
            className="rounded-[12px] shadow dark:hidden"
            alt="payments illustration light"
            width={2007}
            height={929}
          />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

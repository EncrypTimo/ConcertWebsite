import { Button } from '@/components/ui/button'
import Link from 'next/link'


import CountdownClock from "@/components/CountdownClock";
export default function CallToAction() {
    return (
        <section id="Contact" className="pt-32 md:pt-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Your Time is running out</h2>
                    <CountdownClock />
                    <p className="mt-4 lg:text-2xl">Buy tickets today!</p>
                    <p className='mt-4'>You May contact <span className='font-medium'>Ptra. Medy Ibalan</span> or <span className='font-medium'>Sis. Laline Requinto</span>  for more details</p>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="my-8 flex flex-wrap justify-center gap-3 text-sm">
                    <Link
                        href="https://www.facebook.com/medibalan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                    <p className="text-muted-foreground hover:text-primary block">Ptra. Medy Ibalan</p>
                    <Link
                        href="https://www.facebook.com/lainevv.3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                    <p className="text-muted-foreground hover:text-primary block">Sis. Lalaine Requinto</p>
                </div>
            </div>
        </section>
    )
}

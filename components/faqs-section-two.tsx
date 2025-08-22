'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Binigyan mo ako ng Awit',
            answer: 'Binigyan Mo Ako Ng Awit from the album of Papuri! by Papuri Singers',
        },
        {
            id: 'item-2',
            question: 'Hesus, Aking Musika ',
            answer: 'Hesus, Aking Musika from the album of Papuri! by Papuri Singers',
        },
        {
            id: 'item-3',
            question: 'Been So Good',
            answer: 'Been So Good by Elevation Worship feat. Tiffany Hudson. ',
        },
        {
            id: 'item-4',
            question: 'Pupurihin Ka Sa Awit',
            answer: "Pupurihin Ka sa Awit, performed by Powerhouse Worship and composed by Edith San Pedro.",
        },
        {
            id: 'item-5',
            question: 'Maghari',
            answer: 'Maghari by Victory Worship. Words and Music by Vivien Borres, Lee Simon Brown, Richard Garcia and Sofia Paderes',
        },
    ]

    return (
        <section id="LineUp" className="py-16 md:pt-64 md:pb-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">Our Line Up</h2>
                        <p className="text-muted-foreground mt-2 text-balance text-lg">&quot;Isang Gabi ng Papuri at Pasasalamat&quot;</p>
                        <p className="text-muted-foreground mt-6 ">
                            While waiting for the big night, check out our <span className='font-bold'>official Spotify playlist </span>
                            and get into the vibe early!
                        </p>
                         <Button
                                asChild
                                size="lg"
                                className="rounded-xl px-5 mt-4 text-base">
                                <Link href= 'https://open.spotify.com/playlist/6GOXBKtiRzgw59bRZ4r0rL?si=026d98e8ce1247c5' >
                                    <span className="text-nowrap">Spotify Playlist</span>
                                </Link>
                            </Button>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

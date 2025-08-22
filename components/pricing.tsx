import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section id="Pricing"className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>We’re opening doors for <span className='font-bold'>partners and sponsors</span> to join us in making this concert an unforgettable experience.This is more than just music,it’s a movement that brings people together, and <span className='font-bold'>help build our church.</span></p>
                </div>

                <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-4 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Bronze</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">PHP 500 </span>
                            <CardDescription className="text-sm">VIP</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Priority Seating'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Silver</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">PHP 1,000 </span>
                            <CardDescription className="text-sm">VIP Sponsor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Priority Seating','Poster Recognition'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Gold</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">PHP 3,000 </span>
                            <CardDescription className="text-sm">VIP Minor Sponsor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Priority Seating','Poster Recognition', 'Certificate of Appreciation'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Platinum</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">PHP 5,000 </span>
                            <CardDescription className="text-sm">VIP Major Sponsor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Priority Seating','Poster Recognition', 'Certificate of Appreciation', 'Freebies'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

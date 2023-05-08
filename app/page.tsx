'use client'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import {ScrollParallax} from "react-just-parallax";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <div className={[styles.backgroundImage].join(" ")}>
                <ScrollParallax strength={.9} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer4.svg')"}}
                         className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={.8} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer3.svg')"}}
                         className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={.6} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer2.svg')"}}
                         className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={1.05} lerpEase={1} isAbsolutelyPositioned={false}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>uberboard.io</div>
                        <div className={styles.subtitle}>creating dashboards with style</div>
                    </div>
                </ScrollParallax>
                <ScrollParallax strength={.2} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer1.svg')"}}
                         className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={0} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer0.svg')"}}
                         className={styles.backgroundLayer}/>
                </ScrollParallax>
            </div>
        <div className={styles.container}>
            <main className={styles.main}>

                <div className={styles.center}>
                    <div className={styles.description}>
                        <p>
                            <code className={styles.code}>curl -o-
                                https://raw.githubusercontent.com/uberboard/uberboard-cli/main/install/install.sh |
                                bash</code>
                        </p>
                    </div>

                </div>
                <div className={styles.center}>
                    <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h2 className={inter.className}>
                                Docs <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Find in-depth information about uberboard features and&nbsp;API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={inter.className}>
                                Learn <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Learn about Next.js in an interactive course with&nbsp;quizzes!
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={inter.className}>
                                Try <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Instantly use your uberboard dashboard in the cloud.
                            </p>
                        </a>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

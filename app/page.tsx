'use client'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <ParallaxProvider scrollAxis='vertical'>
            <div className={styles.container}>
                <div className={[styles.backgroundImage, styles.glow].join(" ")}>
                    <Parallax speed={-5000} style={{backgroundImage: "url('/background/ocean/SVG/layer4.svg')"}}
                              className={styles.backgroundLayer}/>
                    <Parallax speed={-1000} style={{backgroundImage: "url('/background/ocean/SVG/layer3.svg')"}}
                              className={styles.backgroundLayer}/>
                    <Parallax speed={-200} style={{backgroundImage: "url('/background/ocean/SVG/layer2.svg')"}}
                              className={styles.backgroundLayer}/>
                    <Parallax speed={-150}>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}>uberboard.io</div>
                            <div className={styles.subtitle}>creating dashboards with style</div>
                        </div>
                    </Parallax>
                    <Parallax speed={-50} scale={[1, 1.2]}
                              style={{backgroundImage: "url('/background/ocean/SVG/layer1.svg')"}}
                              className={styles.backgroundLayer}/>
                    <Parallax speed={-0} scale={[1, 1.3]}
                              style={{backgroundImage: "url('/background/ocean/SVG/layer0.svg')"}}
                              className={styles.backgroundLayer}/>
                </div>
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
        </ParallaxProvider>
    )
}

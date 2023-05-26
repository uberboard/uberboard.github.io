'use client'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import {ScrollParallax} from "react-just-parallax";
import '@/styles/termynal.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <div className={[styles.backgroundImage].join(" ")}>
                <ScrollParallax strength={0.98} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer4.svg')"}}
                          className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={.94} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer3.svg')"}}
                          className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={.8} lerpEase={1} isAbsolutelyPositioned={true}>
                    <span style={{backgroundImage: "url('/background/ocean/SVG/layer2.svg')"}}
                          className={styles.backgroundLayer}/>
                </ScrollParallax>
                <ScrollParallax strength={1.05} lerpEase={1} isAbsolutelyPositioned={false}>
                    <span className={styles.titleContainer}>
                        <span className={styles.title}>uberboard.io</span>
                        <div className={styles.subtitle}>creating dashboards with style</div>
                    </span>
                </ScrollParallax>
                <ScrollParallax strength={.4} lerpEase={1} isAbsolutelyPositioned={true}>
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

                    <div className={styles.center} >
                        <div id="termynal" data-termynal>
                            <span data-ty="input" data-ty-prompt="~$">curl -o- https://uberboard.io/install.sh | bash</span>
                            <span data-ty="progress"></span>
                            <span data-ty>Successfully installed uberboard!</span>
                            <span data-ty="input" data-ty-prompt="~$">uberboard dashboard create my-dashboard</span>
                            <span data-ty="progress"></span>
                            <span data-ty>Dashboard &apos;my-dashboard&apos; created!</span>
                            <span data-ty="input" data-ty-prompt="~$">cd my-dashboard</span>
                            <span data-ty="input" data-ty-delay="0" data-ty-prompt={"~/my-dashboard$"}>uberboard start</span>
                            <span data-ty>Dashboard is running at http://localhost:3000</span>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.grid}>
                            <a
                                href="#"
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
                                href="#"
                                className={styles.card}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h2 className={inter.className}>
                                    Learn <span>-&gt;</span>
                                </h2>
                                <p className={inter.className}>
                                    Create your first dashboard with uberboard
                                </p>
                            </a>

                            <a
                                href="#"
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

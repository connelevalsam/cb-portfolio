import Head from 'next/head';
import Layout from "../components/Layout";

const About = () => {
    return ( 
        <>
            <Head>
                <title>About Me | Connelblaze - Connel Asikong Portfolio</title>
                <meta name="description" content="Connel Asikong Portfolio" />
                <meta name="keywords" content="Connel, Asikong, Flutter Dev, Programmer portfolio" />
                <meta name='author' content='Connel Asikong' />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Layout>
                <div class="px-4 cursor-pointer md:hidden inline" id="burger">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                </div>
                <div class="relative">
                    <section id="top" class="top dark cover"></section>
                    <div class="top-content">
                        <h1 class="md:text-4xl">About</h1>
                    <p class="text-xs md:text-lg ">
                        Hi! My name is Connel and I found out I love building things for other people to use. My interest started with Web and moved to Mobile and right now I have interest in Web3.
                    </p>
                    </div>
                </div>
                <div class="px-4 py-2 grid md:grid-cols-2 gap-3">
                    <div>
                        <p>
                            Started professionally 4 years ago at a startup. After My first job, I had worked at 4 other companies and right now I just freelance. I studied Computer Science.<br />
                            Started teaching various programming languages as well from 2016-2019. Worked in Jensiv LTD as Lead Mobile Developer, then moved to Freshtooth as Flutter Developer.
                            <br />
                            <br />
                            Started writing blog posts on Medium in 2017, written almost 8 so far. Asked and answered quesions on the different Stackoverflow branches.
                            <br />
                            <br />
                            My work has been considered very impressive by previous employers and clients all over the world. and I am confident that I live up to the hype. To me, I believe I can be of help to anyone even though I might not be needed to code.
                            <br />
                            <br />
                            Currently a Tutor at Kodex and freelancer.
                            <br />
                            <br />
                            <ul>
                                <span class="text-lg">Here are a few technologies I've been working with recently:</span>
                                <li>Flutter</li>
                                <li>JavaScript (ES6+)</li>
                                <li>NextJS</li>
                                <li>React</li>
                                <li>MySQL</li>
                                <li>Firebase</li>
                            </ul>
                            <br />
                            <div class="px-4 bg-slate-700 text-gray-400">
                                <a href="#" class=""><span class="p-signs">&#11040;</span> Git</a>
                                <a href="#" class=""><span class="p-signs">&#11040;</span> GitHub</a>
                                <a href="#" class=""><span class="p-signs">&#11040;</span> Agile</a>
                                <a href="#" class=""><span class="p-signs">&#11040;</span> Contentful</a>
                                <a href="#" class=""><span class="p-signs">&#11040;</span> Netlify</a>
                            </div>
    
                            Check out some of the things I've built <a href="portfolio.html" class="underline text-blue-600">Here.</a>
                        </p>
                    </div>
                    <div>
                        <img src="/img/cb_avatar.png" alt="" />
                    </div>
                </div>
            </Layout>
        </>
     );
}
 
export default About;
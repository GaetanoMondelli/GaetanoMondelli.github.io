
import React from 'react';
import DemoBook from './DemoBook';
import { Switch, Route, Router } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Navbar from './Navbar';
import ReactGoogleSlides from "react-google-slides";
import gman from './images/gman2.png'
import app from './images/poliapp.png'
import intercom from './images/intercom.jpg'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import clubhouse from './images/clubhouse.png'
import over from './images/overl.png'


class App extends React.Component {

  state = {
    hideWarning: false,
    colWidth: window.innerWidth
  }

  readBook2021 = 35;

  render() {
    return (<>
      <div class="container" >
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <div style={this.state.hideWarning ? { display: "none" } : { display: "block" }} class="alert alert-dismissible alert-warning">
          <button onClick={() => this.setState({ hideWarning: true })} type="button" class="close" data-dismiss="alert">&times;</button>
          <h4 class="alert-heading">Warning!</h4>
          {/* <p class="mb-0"> This space is Working in Progress. Better connect with me on  <a href="https://www.linkedin.com/in/gaetano-mondelli/" class="alert-link"> Linkedin</a>. Many Thanks!</p> */}
        </div>
        <Switch>
          <Route exact path="/">
            <div class="row">
              <div class="col-12 col-sm-5">
                <img width="80%" src={gman}></img>
              </div>
              <div class="col-12 col-sm-6">
                <h1>Gaetano Mondelli</h1>
                <p class="lead">Blockchain Protocol Engineer | Tokenization Pioneer | Chain Abstraction Architect</p>
                <hr />
                <p>Hi, <br></br> I'm a blockchain protocol engineer specializing in tokenization and chain abstraction. I invented Overledger, the first protocol for blockchain interoperability and tokenization, which became a foundational technology in the space.
                  <br></br>
                  &nbsp;
                  My work spans the entire tokenization landscape: from carbon credits (Rowan Energy) to decentralized identity (AIKON, working with W. Scott Stornetta - co-inventor of blockchain), NFT marketplaces and ticketing systems (DaChain), and stablecoin-based legal contracts (Rocket Lawyer). Featured on Forbes, New Scientist, and Gartner's lists, an article on <a href="https://www.nasdaq.com/articles/what-i-learned-about-bitcoin-could-make-you-fortune-2018-03-06">Nasdaq</a> described Overledger as:
                  <br></br>
                  <br></br>

                  <div class="">
                    <div class="card border-primary mb-3">
                      <div class="card-body">
                        <p style={{ fontSize: "16px" }}>"[...] the patent for a new technology called "overledger," which is essentially an elegant method to allow the various cryptos to talk to each other --
                          a common language that has the potential to knit them together and aggregate blockchain technology. Pay close attention to this.
                          I'm not sure whether this new idea is the one that's going to take off, but it's a Steve Jobsian approach --
                          taking a very complicated technology and making it much easier to use. [...]"  </p>

                      </div>
                    </div>
                  </div>
                  <br></br>
                  I'm a 10x hackathon winner (Chainlink, Polygon, Ethereum Foundation, ImmutableX, Encode, Ripple) and recently won the Chainlink Constellation Hackathon 2023 (interoperability track) with XTF, reimagining ETFs for Web3. I completed Encode's ZK Bootcamp in 2024, diving deep into zero-knowledge proofs and privacy-preserving blockchain architectures.
                  <br></br>
                  Currently focused on designing MRV-driven tokenization systems for carbon credits and exploring zk-proof concepts for public chain auditability.
                  <br></br>
                  <br></br>
                  <div class="col-md-8 offset-md-4">
                    <img data-tip="gaetano-mondelli" style={{ marginRight: "5%" }} width="15%" src={linkedin} onClick={() => {
                      window.open(
                        'https://www.linkedin.com/in/gaetano-mondelli/',
                        '_blank'
                      );
                    }}></img>
                    <img data-tip="GaetanoMondelli" style={{ marginRight: "5%" }} width="15%" src={github} onClick={() => {
                      window.open(
                        'https://github.com/GaetanoMondelli',
                        '_blank'
                      );
                    }}></img>
                    <img data-tip="clubhouse: @gaetanomondelli" style={{ marginRight: "5%" }} width="17%" src={clubhouse}></img>
                    <ReactTooltip />

                  </div>


                </p>
              </div>

              <div class="row">

                <div class="readingChallengesContainer">

                  <div id="gr_challenge_11650" style={{ margin: "3%", marginLeft: "7%", "border": "2px solid #EBE8D5", "borderRadius": "10px", "padding": "0px 7px 0px 7px", "maxWidth": "230px", "minHeight": "100px" }}>
                    <div id="gr_challenge_progress_body_11650" style={{ "fontSize": "12px", "fontFamily": "georgia,serif", "lineHeight": "18px" }}>
                      <h3 style={{ margin: "4px 0 10px", fontWeight: "normal", textAlign: "center" }}>
                      </h3>
                      <div class="challengePic">
                        <a rel="nofollow" href="https://www.goodreads.com/challenges/11650-2021-reading-challenge"><img alt="2021 Reading Challenge" style={{ "float": "left", "marginRight": "10px", "border": "0 none" }} src="https://images.gr-assets.com/challenges/1608245803p2/11650.jpg" /></a>
                      </div>
                      <div>
                        <a rel="nofollow" href="https://www.goodreads.com/user/show/129708737-gaetano-mondelli">Gaetano</a> has
                        read {this.readBook2021} books toward
                        their goal of {this.readBook2021} books.
                      </div>
                      <div style={{ "width": "100px", "margin": "4px 5px 5px 0", "float": "left", "border": "1px solid #382110", "height": "8px", "overflow": "hidden", "backgroundColor": "#FFF\"" }}>
                        <div style={{ "width": "100%", "backgroundColor": "#D7D2C4", "float": "left" }}><span style={{ visibility: "hidden" }}>hide</span></div>
                      </div>
                      <div style={{ "fontFamily": "arial, verdana, helvetica, sans-serif", "fontSize": "90%" }}>
                        <a rel="nofollow" href="https://www.goodreads.com/user_challenges/27760980">{this.readBook2021} of {this.readBook2021} ({this.readBook2021 / this.readBook2021 * 100} %)</a>
                      </div>
                      <div style={{ "textAlign": "right" }}>
                        <a style={{ "textDecoration": "none", "fontSize": "10px" }} rel="nofollow" href="https://www.goodreads.com/user_challenges/27760980">view books</a>
                      </div>
                    </div>
                    <script src="https://www.goodreads.com/user_challenges/widget/129708737-gaetano-mondelli?challenge_id=11650&v=2"></script>
                  </div>

                  <div id="gr_challenge_11636" style={{ margin: "3%", marginLeft: "7%", "border": "2px solid #EBE8D5", "borderRadius": "10px", "padding": "0px 7px 0px 7px", "maxWidth": "230px", "minHeight": "100px" }}>
                    <div id="gr_challenge_progress_body_11636" style={{ "fontSize": "12px", "fontFamily": "georgia,serif", "lineHeight": "18px" }}>
                      <h3 style={{ margin: "4px 0 10px", fontWeight: "normal", textAlign: "center" }}>
                      </h3>
                      <div class="challengePic">
                        <a rel="nofollow" href="https://www.goodreads.com/challenges/11636-2022-reading-challenge"><img alt="2022 Reading Challenge" style={{ float: "left", marginRight: "10px", border: "0 none" }} src="https://images.gr-assets.com/challenges/1636444409p2/11636.jpg" /></a>
                      </div>
                      <div>
                        <a rel="nofollow" href="https://www.goodreads.com/user/show/129708737-gaetano-mondelli">Gaetano</a> has
                        read 1 book toward
                        their goal of
                        30 books.
                      </div>
                      <div style={{ width: "100px", margin: "4px 5px 5px 0", float: "left", border: "1px solid #382110", height: "8px", overflow: "hidden", backgroundColor: "#FFF" }}>
                        <div style={{ width: "3%", backgroundColor: "#D7D2C4", float: "left" }}><span style={{ visibility: "hidden" }}>hide</span></div>
                      </div>
                      <div style={{ fontFamily: "arial, verdana, helvetica, sans-serif", fontSize: "90%" }}>
                        <a rel="nofollow" href="https://www.goodreads.com/user_challenges/33122738">1 of 30 (3%)</a>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <a style={{ textDecoration: "none", fontSize: "10px" }} rel="nofollow" href="https://www.goodreads.com/user_challenges/33122738">view books</a>
                      </div>
                    </div>
                    <script src="https://www.goodreads.com/user_challenges/widget/129708737-gaetano-mondelli?challenge_id=11636&v=2"></script>
                  </div>

                </div>
              </div>



            </div>
          </Route>
          <Route exact path="/projects" component>
            <div class="row">
              <div class="col-12">
                <h1>Recent Work & Projects</h1>
                <br></br>
                <p class="lead">Tokenization across multiple domains - from carbon credits to identity to NFTs</p>
                <hr></hr>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="card border-success mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">Rowan Energy</div>
                  <div class="card-body">
                    <h4 class="card-title">Carbon Credit Tokenization</h4>
                    <p class="card-text text">Leading blockchain and tokenization design for carbon credits. Built MRV-driven, UKAS-aligned systems tokenizing verified renewable energy data from TPM-signed IoT devices with zk-proof concepts for privacy.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="card border-info mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">AIKON (ORE ID)</div>
                  <div class="card-body">
                    <h4 class="card-title">Decentralized Identity</h4>
                    <p class="card-text text">Developed smart contracts for tokenized digital identity and access rights across EVM, EOS, and Algorand. Collaborated with W. Scott Stornetta (co-inventor of blockchain) on self-sovereign identity frameworks.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="card border-warning mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">DaChain</div>
                  <div class="card-body">
                    <h4 class="card-title">NFT Marketplace & Ticketing</h4>
                    <p class="card-text text">Led blockchain architecture for multi-chain NFT marketplace spanning sports, music, and art. Developed blockchain-based ticketing systems and metaverse stadium experiences. Backed by lastminute.com CEO and Leeds United F.C. owner.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="card border-danger mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">Rocket Lawyer</div>
                  <div class="card-body">
                    <h4 class="card-title">Legal Contracts & Stablecoins</h4>
                    <p class="card-text text">Architected smart contracts for legal document automation and escrow. Designed stablecoin-based payment infrastructure bridging legal services with blockchain. Integrated with Stripe, Circle, and compliance flows.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">XTF - Chainlink Winner 2023</div>
                  <div class="card-body">
                    <h4 class="card-title">Web3 ETF Reimagined</h4>
                    <p class="card-text text">Won Chainlink Constellation 2023 (interoperability track). Multichain decentralized protocol for ETF-like solutions supporting NFTs, RWAs, and diverse asset types. Utilizes secure price oracles and interoperability for transparent, diversified investment strategies.</p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://github.com/GaetanoMondelli/XRPLEDGER-XTF',
                        '_blank'
                      );
                    }}>View Project</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">ZK Bytecode Verifier - Encode 2024</div>
                  <div class="card-body">
                    <h4 class="card-title">Smart Contract Security</h4>
                    <p class="card-text text">Encode ZK Bootcamp graduation project. Vulnerability checker and security proxy architecture using Noir. Analyzes deployed contract bytecode for vulnerabilities and requires security interface certification for audited contracts.</p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://github.com/ksavul/zk-bootcamp-final-project',
                        '_blank'
                      );
                    }}>View Project</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">ZK Scaffold MACI - ETH London</div>
                  <div class="card-body">
                    <h4 class="card-title">Anti-Collusion Voting</h4>
                    <p class="card-text text">Won Ethereum Foundation track for Best Use of MACI. Scaffold-eth template for MACI (Minimal Anti-Collusion Infrastructure) enabling secure, anti-collusion e-voting using Zero Knowledge Proofs.</p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://ethglobal.com/showcase/skaffoldmaci-zkosios-2no6q',
                        '_blank'
                      );
                    }}>View Project</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">GODL - Polygon Winner 2020</div>
                  <div class="card-body">
                    <h4 class="card-title">NFT Jewelry Creator</h4>
                    <p class="card-text text">Won Polygon Hackathon 2020. Transform tokens into sparkling gems in unique NFT rings. Create digital jewelry by combining assets, or melt down existing pieces to reclaim the underlying tokens.</p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://github.com/GaetanoMondelli/NFTfany-PolygonxEasyAHackathon',
                        '_blank'
                      );
                    }}>View Project</button>
                  </div>
                </div>
              </div>


              <div class="col-12 col-sm-4">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">Solitude</div>
                  <div class="card-body">
                    <h4 class="card-title">Solidity Framework</h4>
                    <p class="card-text text" >Pythonic framework to deploy, interact, test and debug your Solidity contracts. It comes with a companion debugger</p>
                    <div>

                      <button type="button" class="btn btn-primary" onClick={() => {
                        window.open(
                          'https://solitude-ethereum.xyz/',
                          '_blank'
                        );
                      }}>Visit the website</button>
                      <span> </span>
                      <button type="button" class="btn btn-info" onClick={() => {
                        window.open(
                          'https://marketplace.visualstudio.com/items?itemName=gmondelli.solitude-debug',
                          '_blank'
                        );
                      }}>VSCODE extension</button>



                    </div>
                  </div>
                </div>
              </div>


              <div class="col-12 col-sm-4">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">Grad-drone</div>
                  <div class="card-body">
                    <h4 class="card-title">Drone Hat</h4>
                    <p class="card-text text" >GradDrone (Graduation Cap Drone) is a project to fly a Graduation wreath on a parrot drone over your head.</p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://github.com/GaetanoMondelli/GradDrone',
                        '_blank'
                      );
                    }}>Visit the repo</button>
                  </div>
                </div>
              </div>

            </div>
            <hr></hr>
            <br></br>

            <h2>OverLedger - First Chain Abstraction & Tokenization Protocol</h2>
            I invented Overledger, the first protocol for blockchain interoperability and tokenization, enabling seamless communication between different blockchains and the creation of multi-chain workflows and tokenized assets.
            <br></br><br></br>
            The idea emerged from working on a distributed event-driven application in an unreliable network environment. I recognized that blockchains could be modeled as clients in unreliable networks where messages might be lost (transactions not included in valid blocks) or temporarily altered (during blockchain forks).
            <br></br><br></br>
            Overledger became foundational technology for chain abstraction - abstracting away the complexity of multiple blockchains to enable unified tokenization layers. This architecture has influenced how modern protocols approach cross-chain token standards and interoperability.
            <br></br><br></br>
            The patent (WO2019106006A1) was granted internationally, and the token backing the project reached a market cap of $5 billion, ranking in the top 30 most valuable tokens by June 2021.
            <ReactTooltip />
            <br></br>
            <br></br>
            <img width="45%" src={over}></img>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-danger" onClick={() => {
              window.open(
                'https://worldwide.espacenet.com/patent/search/family/064949212/publication/WO2019106006A1?q=pn%3DWO2019106006A1',
                '_blank'
              );
            }}>Check Patent</button>
            <span> </span>
            <button type="button" class="btn btn-info" onClick={() => {
              window.open(
                'https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1/UK00003259032',
                '_blank'
              );
            }}>Check Trademark</button>
            <hr></hr>
            <h2>PoliApp - University Mobile Application</h2>
            PoliApp is the first unofficial mobile app for Politecnico di Torino, my alma mater.
            The app allows students to access course materials, check schedules, receive alerts, view exam information and statistics, and track their GPA.
            I spent a summer building it with a couple of friends.
            <br></br><br></br>
            The idea came while observing students at the university cafe struggling with the mobile website, constantly zooming in and out. I realized we could create a better mobile experience to reduce that friction.
            My main contribution was integrating the parser that extracted data from web pages with the application that consumed it.
            <br></br><br></br>
            We met with university administration, who were impressed by the work. Later we discovered they were developing their own app with similar design choices.
            <br></br><br></br>
            The highlight of this project was our April Fools' Day prank: we transformed the entire app into a Hogwarts experience for one day, replacing all university references with Harry Potter themes. Students loved it, sharing it across social media, and we got more downloads in that single day than in the previous month.
            <div>
              <br></br>
              <img width="50%" src={app}></img>
              <br></br>
              <br></br>
              <button type="button" class="btn btn-info" onClick={() => {
                window.open(
                  'https://www.facebook.com/Poliapp-610403765759774',
                  '_blank'
                );
              }}>FB Page</button>
              <span>  </span> <span>  </span>
              <button type="button" class="btn btn-primary" onClick={() => {
                window.open(
                  'https://play.google.com/store/apps/details?id=it.polibeta.app&hl=en',
                  '_blank'
                );
              }}>Playstore</button>
            </div>
            <hr></hr>
            <h2>Splunk your data </h2>
            Since I was a kid, I have been using computers and collected tons of data. I had stored more than 20 years of data in various supports and decided to bring them together.  Data were timestamped files, emails, messages, bank transactions, videogames data, and smart device data.
            A file system is not the best option to navigate these data.
            I indexed data and added it to Splunk. Based on this project, I made a fun presentation on how I used this historical data.<br></br>
            I then expanded the project and created a browser-like application for exploring data and memories with the help of filters and graphs.
            <br></br>
            <br></br>
            <div>

              <ReactGoogleSlides
                width={'340'}
                height={300}
                slidesLink="https://docs.google.com/presentation/d/1Udqqm-fKm2oHI-PFUtM4_dsTmeaDu2nI"
                // slideDuration={5}
                showControls
                loop
              />
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6423134756959059968" frameborder="0" height="300" allowfullscreen="" title="Splunk"></iframe>

            </div>
            <button type="button" class="btn btn-info" onClick={() => {
              window.open(
                'https://lnkd.in/eF5dMe3',
                '_blank'
              );
            }}>View Descritption</button>
            <hr></hr>
            <h2>Smart Intercom - IoT & Computer Vision</h2>
            DoorOnPhone is a smart intercom featuring remote control, video streaming, virtual keys, and face recognition.
            I implemented the face recognition system in Python when most resources were only available in C and C++, and collaborated with a talented designer on the physical product design.
            <br></br><br></br>
            The inspiration came from Steve Jobs's iconic iPhone presentation. I was captivated by how technology and design could transform a mundane object into something magical. Looking around, I spotted an old intercom - the perfect candidate for reinvention.
            <br></br><br></br>
            Years later, my classmates and I developed the complete design and built a working prototype, which we presented at I3P, Turin's startup incubator.
            <br></br><br></br>
            <img width="40%" src={intercom}></img>
            <br></br><br></br>
            <button type="button" class="btn btn-primary" onClick={() => {
              window.open(
                'https://www.dropbox.com/s/gny7m0qly2ex0bs/ambient.pdf?dl=0',
                '_blank'
              );
            }}>View Poster</button>
          </Route>

          {/* <Route exact path="/about" component>
            <DemoBook></DemoBook>
          </Route> */}

          <Route exact path="/articles" component>
            Coming Soon
          </Route>

          <Route exact path="/cert" component>


            <div class="col-12">
              <h1>Certs & Degrees & Patents </h1>
              <hr></hr>
            </div>

            <table class="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">Bachelors' Degree</th>
                  <td>Computer Engineering</td>
                  <td>Politecnico di Torino</td>
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Website</a></td>
                </tr>
                <tr>
                  <th scope="row">Masters' Degree</th>
                  <td>Digital Systems</td>
                  <td>Politecnico di Torino</td>
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Website</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Patent</th>
                  <td>Blockchain Communication and Ordering</td>
                  <td>IT, EP, CN & WO</td>
                  <td><a href="https://worldwide.espacenet.com/patent/search/family/064949212/publication/CN111433803A?q=pn%3DCN111433803A">Patent Website</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Bootcamp</th>
                  <td>Zero-Knowledge Proofs Bootcamp (2024)</td>
                  <td>Encode Club</td>
                  <td><a href="https://github.com/ksavul/zk-bootcamp-final-project">ZK Project</a></td>
                </tr>
                <tr>
                  <th scope="row">Professional Course</th>
                  <td>Business Strategy & Consulting</td>
                  <td>Imperial College London</td>
                  <td>Cert Link</td>
                </tr>
                <tr>
                  <th scope="row">Professional Course</th>
                  <td>Cyberlaw</td>
                  <td>London School of Economics (LSE)</td>
                  <td>Cert Link</td>
                </tr>
                <tr>
                  <th scope="row">Professional Course</th>
                  <td>Product Management</td>
                  <td>Stanford</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Professional Course</th>
                  <td>Storytelling for Influence</td>
                  <td>IDEO</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
              </tbody>
            </table>
            <br></br>

            <h2>Massive Online Open Courses (MOOCs) </h2>
            <hr></hr>

            <strong>Note</strong> The list would be longer If I could only stop to take more course than I can actually finish at the same time

            <table class="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">Coursera</th>
                  <td>Bitcoin and Cryptocurrency Technologies</td>
                  <td>Princeton University</td>
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Contract Law</td>
                  <td>Harvard Univeristy</td>
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">MIT</th>
                  <td>Computational Law Report</td>
                  <td>MIT Labs</td>
                  <td><a href="https://law.mit.edu/dash/overview">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">Coursera</th>
                  <td>Legal Tech and the Digital Transformation of Law</td>
                  <td>Universidad Austral</td>
                  <td><a href="">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">Coursera</th>
                  <td>Legal Tech & Startups</td>
                  <td>IE Business School</td>
                  <td><a href="">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">Futurelearn</th>
                  <td>Introduction to Innovation and Technology in Legal Services The University of Law</td>
                  <td>Univeristy of law</td>
                  <td><a href="">Course Webiste</a></td>
                </tr>

                <tr>
                  <th scope="row">DataBricks & Edx</th>
                  <td>Scalable Machine Learning</td>
                  <td>Berkeley University</td>
                  <td><a href="">Course Webiste</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Big Data in Education</td>
                  <td>Columbia University</td>
                  <td><a href="">Course</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Knowledge Management and Big Data in Business</td>
                  <td>Hong Kong Polytechnic University</td>
                  <td>Cert Link</td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>New Model of Business in Society</td>
                  <td>Virginia University</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Future Food Production: Crops</td>
                  <td>Wageningen University</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Politecnico di Milano</th>
                  <td>Fundamentals of financial and management accounting</td>
                  <td>Politecnico di Milano</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Politecnico di Milano</th>
                  <td>Managing Conflicts</td>
                  <td>Politecnico di Milano</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Decision Making</td>
                  <td>TU Delft</td>
                  <td><a href=""></a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Windows PowerShell Fundamentals</td>
                  <td>Microsoft</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Udemy</th>
                  <td>Ethereum: Decentralised Application Design & Development</td>
                  <td>Udemy</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Usable Security</td>
                  <td>University of Maryland</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Fundamentals of Market Structure</td>
                  <td>New York Institute of Finance</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
                <tr>
                  <th scope="row">Edx</th>
                  <td>Introduction to R</td>
                  <td>Microsoft</td>
                  <td><a href="">Cert Link</a></td>
                </tr>
              </tbody>
            </table>


          </Route>


        </Switch>
        <br></br>
        <footer>
          <hr></hr>
          <p></p>
          <p>Made with 🖤 in London 2025</p>
        </footer>
      </div>
    </>
    );
  }


}
export default App;

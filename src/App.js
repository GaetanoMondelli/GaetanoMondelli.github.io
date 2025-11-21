import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Navbar from './Navbar';
import ReactGoogleSlides from "react-google-slides";
import gman from './images/gman2.png'
import app from './images/poliapp.png'
import intercom from './images/intercom.jpg'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import over from './images/overl.png'
import article1 from './images/article1.png'

const projects = [
  {
    header: "Rowan Energy",
    title: "Carbon Credit Tokenization",
    style: "border-success",
    text: "Leading blockchain and tokenization design for carbon credits. Built MRV-driven, UKAS-aligned systems tokenizing verified renewable energy data from TPM-signed IoT devices with zk-proof concepts for privacy."
  },
  {
    header: "AIKON (ORE ID)",
    title: "Decentralized Identity",
    style: "border-info",
    text: "Collaborated with W. Scott Stornetta (co-inventor of blockchain) on self-sovereign identity frameworks. Developed smart contracts for tokenized digital identity and access rights across EVM, EOS, and Algorand."
  },
  {
    header: "DaChain",
    title: "NFT Marketplace & Ticketing",
    style: "border-warning",
    text: "Led blockchain architecture for multi-chain NFT marketplace spanning sports, music, and art. Developed blockchain-based ticketing systems and metaverse stadium experiences. Backed by lastminute.com CEO and Leeds United F.C. owner."
  },
  {
    header: "Rocket Lawyer",
    title: "Legal Contracts & Stablecoins",
    style: "border-danger",
    text: "Architected smart contracts for legal document automation and escrow. Designed stablecoin-based payment infrastructure bridging legal services with blockchain. Integrated with Stripe, Circle, and compliance flows."
  },
  {
    header: "XTF - Multiple Hackathon Winner 2023",
    title: "Web3 ETF Reimagined",
    style: "border-primary",
    text: "Won Chainlink Constellation 2023 (interoperability track). Multichain decentralized protocol for ETF-like solutions supporting NFTs, RWAs, and diverse asset types. Utilizes secure price oracles and interoperability for transparent, diversified investment strategies.",
    link: "https://xtflabs.com",
    linkText: "View Project"
  },
  {
    header: "ZK Bytecode Verifier - Encode 2024",
    title: "Smart Contract Security",
    style: "border-secondary",
    text: "Encode ZK Bootcamp graduation project. Vulnerability checker and security proxy architecture using Noir. Analyzes deployed contract bytecode for vulnerabilities and requires security interface certification for audited contracts.",
    link: "https://github.com/ksavul/zk-bootcamp-final-project",
    linkText: "View Project"
  },
  {
    header: "ZK Scaffold MACI - ETH London",
    title: "Anti-Collusion Voting",
    style: "border-secondary",
    text: "Won Ethereum Foundation track for Best Use of MACI. Scaffold-eth template for MACI (Minimal Anti-Collusion Infrastructure) enabling secure, anti-collusion e-voting using Zero Knowledge Proofs.",
    link: "https://ethglobal.com/showcase/skaffoldmaci-zkosios-2no6q",
    linkText: "View Project"
  },
  {
    header: "GODL - Polygon Winner 2020",
    title: "NFT Jewelry Creator",
    style: "border-secondary",
    text: "Won Polygon Hackathon 2020. Transform tokens into sparkling gems in unique NFT rings. Create digital jewelry by combining assets, or melt down existing pieces to reclaim the underlying tokens.",
    link: "https://github.com/GaetanoMondelli/NFTfany-PolygonxEasyAHackathon",
    linkText: "View Project"
  },
  {
    header: "Solitude",
    title: "Solidity Framework",
    style: "border-primary",
    text: "Pythonic framework to deploy, interact, test and debug your Solidity contracts. It comes with a companion debugger",
    link: "https://solitude-ethereum.xyz/",
    linkText: "Visit the website",
    link2: "https://marketplace.visualstudio.com/items?itemName=gmondelli.solitude-debug",
    linkText2: "VSCODE extension"
  },
  {
    header: "Grad-drone",
    title: "Drone Hat",
    style: "border-primary",
    text: "GradDrone (Graduation Cap Drone) is a project to fly a Graduation wreath on a parrot drone over your head.",
    link: "https://github.com/GaetanoMondelli/GradDrone",
    linkText: "Visit the repo"
  }
];


class App extends React.Component {

  state = {
    hideWarning: false,
    colWidth: window.innerWidth,
    selectedProject: null
  }

  openModal = (project) => {
    this.setState({ selectedProject: project });
  }

  closeModal = () => {
    this.setState({ selectedProject: null });
  }

  readBook2021 = 35;

  render() {
    return (<>
      <div class="container" >
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <Switch>
          <Route exact path="/">
            <div class="row">
              <div class="col-12 col-sm-5">
                <img width="80%" src={gman}></img>
              </div>
              <div class="col-12 col-sm-6">
                <h1>Gaetano Mondelli</h1>
                <p class="lead">Blockchain Protocol Engineer | Tokenization Specialist</p>
                <hr />
                <p>Hi, <br></br> I'm a blockchain protocol engineer currently focused on <strong>tokenization across multiple asset classes</strong>.
                  <br></br>
                  <br></br>

                  <div class="card border-success mb-3" style={{ backgroundColor: "#f0f9ff" }}>
                    <div class="card-body">
                      <h5 class="card-title" style={{ color: "#059669" }}>🔥 Currently Working On</h5>
                      <ul style={{ marginBottom: "0", paddingLeft: "20px" }}>
                        <li><strong>Stochastic Process Tokenization Patent (2023)</strong> - Developing novel tokenization methods for stochastic processes</li>
                        <li><strong>Zero-Knowledge Proofs</strong> - Privacy-preserving architectures for public chain auditability and recognition</li>
                        <li><strong>Beyond Blockchain</strong> - Exploring tokenization applications in various industries</li>
                      </ul>
                    </div>
                  </div>
                  <br></br>

                  <strong>My Tokenization Journey:</strong>
                  <br></br>
                  I invented <strong>Overledger</strong>, the first protocol for blockchain interoperability, which became foundational for chain abstraction and cross-chain tokenization. The patent-backed project reached a $5B market cap and ranks among the top crypto projects.
                  <br></br><br></br>

                  Since then, I've worked across the entire tokenization landscape:
                  <ul style={{ marginLeft: "20px" }}>
                    <li><strong>Carbon Credits</strong> - From TPM-signed device RWA data to carbon accounting and credit tokenization (Rowan Energy / Sertis / Brightis)</li>
                    <li><strong>Digital Identity</strong> - Self-sovereign identity with W. Scott Stornetta, co-inventor of Blockchain (AIKON)</li>
                    <li><strong>Experiences</strong> - Multi-chain marketplace and entertainment experiences (DaChain)</li>
                    <li><strong>Legal Contracts</strong> - Legal contracts automations and escrows</li>
                    <li><strong>Stablecoins</strong> - Legal contract automation with Circle/Stripe integration (Rocket Lawyer)</li>
                  </ul>
                  <br></br>

                  <div class="">
                    <div class="card border-primary mb-3">
                      <div class="card-body">
                        <p style={{ fontSize: "14px", fontStyle: "italic", marginBottom: "0" }}><strong>Nasdaq</strong> on Overledger: "[...] an elegant method to allow cryptos to talk to each other -- a common language that has the potential to knit them together. A Steve Jobsian approach - taking complicated technology and making it much easier to use."</p>
                      </div>
                    </div>
                  </div>
                  <br></br>

                  <strong>Recent Achievements:</strong> 10x hackathon winner including Chainlink 2023 (XTF - Web3 ETF), Ethereum Foundation (ZK anti-collusion voting), Polygon 2020 (NFT composability). Completed Encode's ZK Bootcamp 2024.
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
                        read 30 book toward
                        their goal of
                        30 books.
                      </div>
                      <div style={{ width: "100px", margin: "4px 5px 5px 0", float: "left", border: "1px solid #382110", height: "8px", overflow: "hidden", backgroundColor: "#FFF" }}>
                        <div style={{ width: "100%", backgroundColor: "#D7D2C4", float: "left" }}><span style={{ visibility: "hidden" }}>hide</span></div>
                      </div>
                      <div style={{ fontFamily: "arial, verdana, helvetica, sans-serif", fontSize: "90%" }}>
                        <a rel="nofollow" href="https://www.goodreads.com/user_challenges/33122738">30 of 30 (100%)</a>
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
              {projects.map((project, index) => (
                <div class="col-12 col-sm-4" key={index}>
                  <div className={`card ${project.style} mb-3`} style={{ maxWidth: "20rem" }}>
                    <div class="card-header">{project.header}</div>
                    <div class="card-body">
                      <h4 class="card-title">{project.title}</h4>
                      <p class="card-text text">{project.text}</p>
                      {project.link && (
                        <button type="button" class="btn btn-primary" onClick={() => {
                          window.open(project.link, '_blank');
                        }}>{project.linkText}</button>
                      )}
                      {project.link2 && (
                        <>
                          <span> </span>
                          <button type="button" class="btn btn-info" onClick={() => {
                            window.open(project.link2, '_blank');
                          }}>{project.linkText2}</button>
                        </>
                      )}
                      <br></br><br></br>
                      <button type="button" class="btn btn-secondary btn-sm" onClick={() => this.openModal(project)}>Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {this.state.selectedProject && (
              <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{this.state.selectedProject.header}</h5>
                      <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h4>{this.state.selectedProject.title}</h4>
                      <p>{this.state.selectedProject.text}</p>
                    </div>
                    <div className="modal-footer">
                      {this.state.selectedProject.link && (
                        <button type="button" className="btn btn-primary" onClick={() => window.open(this.state.selectedProject.link, '_blank')}>{this.state.selectedProject.linkText}</button>
                      )}
                      <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1>Articles</h1>
                  <p class="lead">Thoughts on tokenization, blockchain, and the future of digital assets</p>
                  <hr />
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div style={{ marginBottom: "60px" }}>
                    <p class="text-muted">January 2025</p>
                    <h2>Your Crypto Dollars Are Just IOUs (And the Feds Just Admitted It)</h2>

                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                      <img src={article1} style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} alt="Stablecoins and GENIUS Act" />
                    </div>

                    <p>Last month, the U.S. signed the GENIUS Act into law, the first major federal regulation of stablecoins. The crypto industry celebrated it as "regulatory clarity." Banks called it "a framework for innovation." Nobody mentioned the quiet part out loud: Washington just confirmed that stablecoins aren't money. They're debt.</p>

                  <p>The standard narrative goes like this: cryptocurrency was too volatile for everyday use, so the industry invented stablecoins. Digital dollars that move at the speed of the internet. Finally, real money on the blockchain. Cash, but better. It's a tidy story. It's also backwards.</p>

                  <p>Here's what happens when you hold a stablecoin: the issuer owes you one dollar. That dollar sits in their reserves, theoretically. Your token is a claim on those reserves. The blockchain just tracks who owns which IOU. Sound familiar? It should. Because this is exactly how money worked for most of human history.</p>

                  <p>Anthropologist David Graeber spent years studying ancient economies and came away with a radical finding: money didn't evolve from barter. It evolved from debt. The first "money" wasn't coins. It was clay tablets tracking who owed grain to the temple. The earliest monetary systems were just ledgers. Records of obligations between people and institutions. A Mesopotamian farmer with a tablet saying "the temple owes you 50 bushels" had basically the same thing you have when you hold a stablecoin: a credible IOU from a powerful institution. The only difference is the temple priest couldn't rug pull and flee to the Bahamas.</p>

                  <p>Strip away the legislative jargon and here's what the new law does. Stablecoins are now officially "payment stablecoins." Not currency, not securities, but a new category entirely. Issuers must hold 100% reserves in cash or Treasuries, with monthly public audits of those reserves. They need federal licensing through banking regulators. And here's the kicker: issuers must be able to freeze, seize, or burn tokens "when legally required."</p>

                  <p>Read that last one again. If stablecoins are "digital cash," why can the issuer delete them? Because they're not cash. They're liabilities on a company's balance sheet that require a federal license to issue. The Act doesn't treat stablecoins like money. It treats them like what they actually are: private debt instruments that need the same supervision as banks.</p>

                  <p>You might think issuers would hate this regulation. They don't. Many lobbied for it. Why? Because the GENIUS Act doesn't just regulate stablecoins. It licenses them. And licenses create moats. The Act sets the bar high enough that fly-by-night issuers die, questionable operators face a reckoning, and a handful of big players get a government-blessed oligopoly. It's the same playbook banks used in the 19th century: get yourself regulated, then use compliance costs as a weapon against competition.</p>

                  <p>Crypto's founding mythology was about escaping institutional control. The technology promised self-custody and trustless systems. Code as law. Financial sovereignty. And yet the most successful crypto product is institutionalized debt that requires government licensing. We've come full circle. Literally. Back to temples tracking obligations. Back to powerful intermediaries you have to trust. Back to ledgers that record who owes what to whom. The only thing that's changed is the database is now distributed and the priests wear Patagonia vests.</p>

                  <p>This isn't an argument against stablecoins. They're useful. Moving value across borders in seconds is genuinely valuable. But we should stop calling them "digital cash" when they're really "programmable bank deposits." The GENIUS Act makes this explicit: stablecoins are credit instruments issued by regulated institutions. They're not currency. They're not even trying to be. Which raises an uncomfortable question for true believers: If the killer app requires recreating the traditional financial system on a blockchain, what exactly was the revolution for?</p>

                  <p>Five thousand years ago, Mesopotamian temples issued clay tablets representing debt obligations backed by grain reserves and state authority. Today, companies issue blockchain tokens representing debt obligations backed by Treasury reserves and federal licensing. The U.S. government just spent 18 months and countless legislative hours to arrive at a conclusion that any economic anthropologist could have told you in five minutes: money was always debt. Stablecoins are just making it obvious again.</p>

                  <p style={{ fontStyle: "italic" }}>The revolution wasn't escaping the old system. It was rebuilding it with better APIs.</p>

                  </div>
                </div>
              </div>
            </div>
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

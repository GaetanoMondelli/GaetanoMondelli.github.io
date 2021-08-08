
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

  render() {
    return (<>
      <div class="container" >
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <div style={this.state.hideWarning ? { display: "none" } : { display: "block" }} class="alert alert-dismissible alert-warning">
          <button onClick={() => this.setState({ hideWarning: true })} type="button" class="close" data-dismiss="alert">&times;</button>
          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"> This space is Working in Progress. Better connect with me on  <a href="https://www.linkedin.com/in/gaetano-mondelli/" class="alert-link"> Linkedin</a>. Many Thanks!</p>
        </div>
        <Switch>
          <Route exact path="/">
            <div class="row">
              <div class="col-12 col-sm-5">
                <img width="80%" src={gman}></img>
              </div>
              <div class="col-12 col-sm-6">
                <h1>Gaetano Mondelli</h1>
                <p class="lead"> Engineer | Teller of Computational tales | Lawtech & Blockchain  since early days </p>
                <hr />
                <p>Hi, <br></br> I am a software engineer and a specialist in legal technology. When I'm not coding I spend time filling endless whiteboards with new ideas for crypto projects.
              &nbsp;
              One of my ideas solved the blockchain interoperability problem for some business cases. It was featured on Forbes, New Scientist, and included in serveal Gartner's lists. An artcle on <a href="https://www.nasdaq.com/articles/what-i-learned-about-bitcoin-could-make-you-fortune-2018-03-06">Nasdaq</a> described the idea as follows:
              <br></br>
                  <br></br>

                  <div class="">
                    <div class="card border-primary mb-3">
                      <div class="card-body">
                        <p style={{ fontSize: "16px" }}>"[...] the patent for a new technology called "overledger," which is essentially an elegant method to allow the various cryptos to talk to each other --
                        a common language that has the potential to knit them together and aggregate blockchain technology. Pay close attention to this .
                        I'm not sure whether this new idea is the one that's going to take off, but it's a Steve Jobsian approach --
              taking a very complicated technology and making it much easier to use. [...]"  </p>

                      </div>
                    </div>
                  </div>
                  <br></br>
              Recently, my focus has shifted to social-interest applications.
              I believe technology such as blockchain can transform and enhance trust by allowing for new ways to collaborate and coordinate activities.
              The integration of law with technology is key to empower us all with more accessible, fast, fair, and up to the times justice.
              If you feel it is exciting, feel free to ping or find me in Shoreditch, London!
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
                <div class="col-12">
                  <div id="gr_challenge_11650" style={{ margin: "3%", marginLeft: "7%", "border": "2px solid #EBE8D5", "borderRadius": "10px", "padding": "0px 7px 0px 7px", "maxWidth": "230px", "minHeight": "100px" }}>
                    <div id="gr_challenge_progress_body_11650" style={{ "fontSize": "12px", "fontFamily": "georgia,serif", "lineHeight": "18px" }}>
                      <h3 style={{ margin: "4px 0 10px", fontWeight: "normal", textAlign: "center" }}>
                      </h3>
                      <div class="challengePic">
                        <a rel="nofollow" href="https://www.goodreads.com/challenges/11650-2021-reading-challenge"><img alt="2021 Reading Challenge" style={{ "float": "left", "marginRight": "10px", "border": "0 none" }} src="https://images.gr-assets.com/challenges/1608245803p2/11650.jpg" /></a>
                      </div>
                      <div>
                        <a rel="nofollow" href="https://www.goodreads.com/user/show/129708737-gaetano-mondelli">Gaetano</a> has
                          read 13 books toward
                          their goal of
                          35 books.
                    </div>
                      <div style={{ "width": "100px", "margin": "4px 5px 5px 0", "float": "left", "border": "1px solid #382110", "height": "8px", "overflow": "hidden", "backgroundColor": "#FFF\"" }}>
                        <div style={{ "width": "37%", "backgroundColor": "#D7D2C4", "float": "left" }}><span style={{ visibility: "hidden" }}>hide</span></div>
                      </div>
                      <div style={{ "fontFamily": "arial, verdana, helvetica, sans-serif", "fontSize": "90%" }}>
                        <a rel="nofollow" href="https://www.goodreads.com/user_challenges/27760980">13 of 35 (37%)</a>
                      </div>
                      <div style={{ "textAlign": "right" }}>
                        <a style={{ "textDecoration": "none", "fontSize": "10px" }} rel="nofollow" href="https://www.goodreads.com/user_challenges/27760980">view books</a>
                      </div>
                    </div>
                    <script src="https://www.goodreads.com/user_challenges/widget/129708737-gaetano-mondelli?challenge_id=11650&v=2"></script>
                  </div>
                </div>
              </div>



            </div>
          </Route>
          <Route exact path="/projects" component>
            <div class="row">
              {/* <div class="col-12">
                <h1>Projects</h1>
                <br></br>
                <p class="lead">Favourites ★ You need to check it out!! </p>
                <hr></hr>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                  <div class="card-header">Pled.io</div>
                  <div class="card-body">
                    <h4 class="card-title">Trust as a service</h4>
                    <p class="card-text text" >Pled offers secure, transparent and verifiable services based on DLTs. Ledger services leverage the right combinations of access, speed and governance </p>
                    <button type="button" class="btn btn-primary" onClick={() => {
                      window.open(
                        'https://pled.io',
                        '_blank'
                      );
                    }}>Visit the website</button>
                  </div>
                </div>
              </div> */}


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

            <h2>OverLedger</h2>
          I invented a protocol that enables blockchains communication and allows the creation of workflows over multiple blockchains.
          The idea came from    working on a distributed event-driven application a couple of years ere. The application worked within an unreliable network, and it was not possible to sync continuously.
          You can model blockchain as clients in an unreliable network where messages can get lost (transactions not included in a valid block) or even changed for a variable period (forks happening in blockchains).
          Ok, stop with the technicalities.
          The idea was patented, and the token backing the project is <span style={{ textDecoration: "underline", color: "blue" }} data-tip="feb-2021">now</span> worth almost half a billion.
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
            <h2>PoliApp</h2>
            Poliapp is the first and unofficial mobile app for my old university: Politecnico di Torino.
            With Poliapp, students can access course material, check the schedule, get alerts, view info and stats about their next exams, and track their GPA.
            I spend a good part of a Summer building it with a couple of friends.
            The idea came while sitting at the uni cafe. Many students seemed to struggle with a website zooming in and out, and I thought I could reduce the stress of all those unnatural gestures.
            My code contribution was mainly the integration between the parser that produced data from the web pages and the application that consumed it.
            We had a meeting with the university that was impressed by the work. Later we understood they were developing their own app that happened to have similar design choices and an awful app icon.
            My best memory of this project is the Harry Potter theme for April's fool. Only for one day, we replaced all uni references, courses, news, and the schedule to Hogwarts. Students seemed to like it; they shared over social media, and we had more downloads in a day than in a month.
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
            <h2>Smart Intercom</h2>
          DoorOnPhone is a smart intercom with remote control, video streaming, virtual keys, face recognition. Code-wise I implemented the face-recognition feature in Python (back then, there was only material in C, C++) and worked on the physical design with a super-skilled designer.
          The idea came after watching Steve Jobs's iconic presentation of the iPhone. I was amazed at how he turned a blunt object into magic using technology and design. I look around the room, and the closest thing to a phone I saw was an old intercom. That was boring enough to be reinvented!
          Some years later, with some classmates, we went through the entire design until the realization of a working prototype presented at the business incubator I3P in Turin (Italy)
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
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Webiste</a></td>
                </tr>
                <tr>
                  <th scope="row">Masters' Degree</th>
                  <td>Digital Systems</td>
                  <td>Politecnico di Torino</td>
                  <td><a href="https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.corsi?p_sdu_cds=37:3&p_lang=EN">Course Webiste</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Patent</th>
                  <td>Blockchain Communication and ordering</td>
                  <td>IT, EP, CN & WO</td>
                  <td><a href="https://worldwide.espacenet.com/patent/search/family/064949212/publication/CN111433803A?q=pn%3DCN111433803A">Patent Website</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Professional Course</th>
                  <td>Business Strategy & Consulting</td>
                  <td>Imperial College</td>
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
                  <td>Story telling for influence</td>
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
          <p>Made with 🖤 in Shoreditch, London 2021</p>
        </footer>
      </div>
    </>
    );
  }


}
export default App;

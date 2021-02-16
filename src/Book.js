import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image1 from "./images/1.jpg"
import Image2 from "./images/2.jpg"
import Image3 from "./images/3.jpg"
import Image0 from "./images/0w.png"


import "./app.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
        <hr></hr>
        <div class="alert alert-dismissible alert-info" >
          {/* <button type="button" class="close" data-dismiss="alert">&times;</button> */}
          <p class="lead"><strong>Oh snap!</strong> Do not open, very confidential!</p>
        </div>

      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {

  if (props.number === 1)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-image" style={{ backgroundImage: "url(" + props.image + ")", backgroundSize: 'cover' }} > </div>
        </div>
      </div>
    )

  if (props.number === 2)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="container" >
            <div className="row">
              <div class="col-sm">
                <blockquote class="blockquote text-right" style={{ margin: "13%" }}>
                  <p class="mb-0">⚡ τὰ δὲ πάντα οἰακίζει Κεραυνός <br></br>  All things are ruled by Lightning</p>
                  <footer class="blockquote-footer"><p class="lead">Heraclitus in <cite title="Source Title">Fragment 64</cite></p></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  if (props.number === 3)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )

  if (props.number === 5)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )


  if (props.number === 7)
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="jumbotron page-image" style={{ margin: "4%", backgroundImage: "url(" + props.image + ")" }} > </div>
        </div>
      </div>
    )

  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image" style={{ backgroundImage: "url(" + props.image + ")" }} > </div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
      screeHt: 1
    };
    this.handleResize = this.handleResize.bind(this);
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data
    });
  };

  handleResize(WindowSize, event) {
    this.setState({ WindowSize: window.innerWidth })
    console.log('porco')
  }

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount()
    });
    this.setState({
      screeHt: window.innerHeight
    });
  }

  render() {
    return (
        <HTMLFlipBook
          autoSize = {true}
          width={550}
          height={733}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="book"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>Gaetano's Scrapebook</PageCover>
          <Page number={1} image={Image0}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          <Page number={3} image={Image1}>Lorem ipsum...</Page>
          <Page number={4}>Lorem ipsum...</Page>
          <Page number={5} image={Image2}>Lorem ipsum...</Page>
          <Page number={6}>Lorem ipsum...</Page>
          <Page number={7} image={Image3}>Lorem ipsum...</Page>
          <Page number={8} >Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

    );
  }
}

export default function App() {
  return <Book />;
}



              {/* <div id="gr_grid_widget_1613219320">
            <h2>
      <a style={{textDecoration:"none"}} rel="nofollow" href="https://www.goodreads.com/review/list/129708737-gaetano-mondelli?shelf=read&utm_medium=api&utm_source=grid_widget">Gaetano's books</a>
    </h2>
  <div class="gr_grid_container">
    <div class="gr_grid_book_container"><a title="The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum" rel="nofollow" href="https://www.goodreads.com/book/show/50175330-the-infinite-machine"><img alt="The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569891996l/50175330._SX50_SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="1984" rel="nofollow" href="https://www.goodreads.com/book/show/40961427-1984"><img alt="1984" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX50_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Sapiens: A Brief History of Humankind" rel="nofollow" href="https://www.goodreads.com/book/show/23692271-sapiens"><img alt="Sapiens: A Brief History of Humankind" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Inspired: How to Create Tech Products Customers Love" rel="nofollow" href="https://www.goodreads.com/book/show/35249663-inspired"><img alt="Inspired: How to Create Tech Products Customers Love" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496058487l/35249663._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Blockchain and the Law: The Rule of Code" rel="nofollow" href="https://www.goodreads.com/book/show/36700768-blockchain-and-the-law"><img alt="Blockchain and the Law: The Rule of Code" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514834239l/36700768._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Brief Answers to the Big Questions" rel="nofollow" href="https://www.goodreads.com/book/show/40277241-brief-answers-to-the-big-questions"><img alt="Brief Answers to the Big Questions" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536862019l/40277241._SX50_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="The Power of Habit: Why We Do What We Do in Life and Business" rel="nofollow" href="https://www.goodreads.com/book/show/12609433-the-power-of-habit"><img alt="The Power of Habit: Why We Do What We Do in Life and Business" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545854312l/12609433._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="We Are the Weather: Saving the Planet Begins at Breakfast" rel="nofollow" href="https://www.goodreads.com/book/show/43565381-we-are-the-weather"><img alt="We Are the Weather: Saving the Planet Begins at Breakfast" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561482223l/43565381._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="L'ospite inquietante. Il nichilismo e i giovani" rel="nofollow" href="https://www.goodreads.com/book/show/7312831-l-ospite-inquietante-il-nichilismo-e-i-giovani"><img alt="L'ospite inquietante. Il nichilismo e i giovani" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340164563l/7312831._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" rel="nofollow" href="https://www.goodreads.com/book/show/18077903-creativity-inc"><img alt="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400863577l/18077903._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Life After Google: The Fall of Big Data and the Rise of the Blockchain Economy" rel="nofollow" href="https://www.goodreads.com/book/show/32073021-life-after-google"><img alt="Life After Google: The Fall of Big Data and the Rise of the Blockchain Economy" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531682955l/32073021._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Algorithms to Live By: The Computer Science of Human Decisions" rel="nofollow" href="https://www.goodreads.com/book/show/25666050-algorithms-to-live-by"><img alt="Algorithms to Live By: The Computer Science of Human Decisions" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="No Rules Rules: Netflix and the Culture of Reinvention" rel="nofollow" href="https://www.goodreads.com/book/show/49099937-no-rules-rules"><img alt="No Rules Rules: Netflix and the Culture of Reinvention" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595815356l/49099937._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Six Memos For The Next Millennium" rel="nofollow" href="https://www.goodreads.com/book/show/9812.Six_Memos_For_The_Next_Millennium"><img alt="Six Memos For The Next Millennium" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1330101388l/9812._SY75_.jpg" /></a></div>
    <div class="gr_grid_book_container"><a title="Antifragile: Things That Gain from Disorder" rel="nofollow" href="https://www.goodreads.com/book/show/13530973-antifragile"><img alt="Antifragile: Things That Gain from Disorder" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1352422827l/13530973._SY75_.jpg" /></a></div>
    <br style={{clear:"both"}}/><br/><a class="gr_grid_branding" style={{fontSize:".9em", color:"#382110", textDecoration:"none", float:"right", clear:"both"}} rel="nofollow" href="https://www.goodreads.com/user/show/129708737-gaetano-mondelli">Gaetano Mondelli's favorite books »</a>
  <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Gaetano, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/129708737?cover_size=&hide_link=&hide_title=&num_books=20&order=&shelf=&sort=&widget_id=1613219320" type="text/javascript" charset="utf-8"></script> */}


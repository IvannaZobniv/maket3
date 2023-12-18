import './App.css';
function Helmet() {
    return null;
}

function App() {
  return (
      <div className="App">
        <Helmet>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Title</title>
            <link rel="stylesheet" href="./normalize.css"/>
            <script src="https://kit.fontawesome.com/d3407c2f6f.js" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="App.css"/>
        </Helmet>
          <div className="container">
              <div className="menu">
                  <div className="left_menu"></div>
                  <div className="right_menu">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <i class="fa-solid fa-bars"></i>
                  </div>
              </div>
              <div class="side_menu">
                  <div class="side-menu-box" >
                      <div class="side-menu-box-left">1</div>
                      <div class="side-menu-box-left">2</div>
                      <div class="side-menu-box-left">3</div>
                      <div class="side-menu-box-left">4</div>
                      <div class="side-menu-box-left">5</div>
                      <div class="side-menu-box-left">6</div>
                  </div>
              </div>
              <div class="header">
                  <div class="squares3">squares3</div>
                  <div class="squares4">
                      <div class="squares4-box">squares4-box</div>
                      <div class="squares4-box">squares4-box</div>
                      <div class="squares4-box">squares4-box</div>
                      <div class="squares4-box">squares4-box</div>
                  </div>
                  <div class="squares5">
                      <div class="squares5-box-2">
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box1">squares5-box-2</div>
                          <div class="squares5-box2">squares5-box-2</div>
                      </div>
                  </div>
                  <div class="squares6">
                      <div class="squares6-box-2">
                          <div class="squares6-box">squares6-box-3</div>
                          <div class="squares6-box">squares6-box-3</div>
                          <div class="squares6-box">squares6-box-3</div>
                          <div class="squares6-box-1">squares6-box-3</div>
                      </div>
                  </div>
                  <div class="squares7">
                      <div class="squares7-box">squares7-box-4</div>
                      <div class="squares7-box-2">squares7-box-4</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;


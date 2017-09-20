import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/index.html">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html">Sample Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-outlet></router-outlet>     

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">Copyright © Your Website 2017</p>
          </div>
        </div>
      </div>
    </footer>
`
})

export class AppComponent { }
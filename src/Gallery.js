
import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div>
        <br />
        <h2>Gallery</h2>
        <p>Gallery of random pictures to test image compression and optimization</p>
        <br />
        <img class="image1" src="/images/data-center.jpg" alt="datacenter"/>
        <img class="image1" src="/images/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg"/>
        <img class="image1" src="/images/caleb-ralston-21604-unsplash.jpg" alt="bla"/> 
        <img class="image1" src="/images/spacex-VBNb52J8Trk-unsplash.jpg"/>
        <img class="image1" src="/images/fernando-saltos-wik-W8UfagA-unsplash (1).jpg"/>
        <img class="image1" src="/images/tony-lee-_8nHE49KnKk-unsplash.jpg"/>
      <footer>
        
        <p>Source: Unsplash</p>
        </footer>
        </div>
    );
  }
}

export default Gallery;
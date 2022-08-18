import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.png";
import classes from "./Slider.module.css";

function UncontrolledExample() {
  return (
    <Carousel className={classes.slider}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-vector/dark-wide-abstract-banner-grey-260nw-1804227037.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default UncontrolledExample;

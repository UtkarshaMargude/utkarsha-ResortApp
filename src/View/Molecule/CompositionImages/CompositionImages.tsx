import "./CompositionImages.scss";
export const CompositionImages = (): JSX.Element => {
  return (
    <div className="composition_images_container">
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Book your room & enjoy the comfort
          </h3>
          <p className="paragraph">
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat. Donec in quis the pellentesque velit. Hotel ut nisl quam
            nestibulum.
          </p>
          <div className="rooms_info_main_div">
            <div className="rooms_info">
              <h3 className="room_count">22</h3>
              <h3 className="heading-tertiary u-margin-bottom-small">Rooms</h3>
            </div>
            <div className="rooms_info">
              <h3 className="room_count">12</h3>
              <h3 className="heading-tertiary u-margin-bottom-small">SUITS</h3>
            </div>
            <div className="rooms_info">
              <h3 className="room_count">15</h3>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Adventures
              </h3>
            </div>
          </div>

          {/* <a href="#" className="btn-text">
            Learn more &rarr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src="https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

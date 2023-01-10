import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function Main() {
  return (
    <>
      <div className="d-flex container mt-5">
        <div>
          <h2 className="top_title">Canon camera</h2>
          <div className="d-flex gap-3">
            <Button
              className="primary_btn"
              style={{ backgroundColor: "#EDA415" }}
            >
              Shop now
            </Button>
            <Button
              className="primary_btn"
              style={{
                backgroundColor: "white",
                color: "#316887",
                border: "1px solid #316887",
              }}
            >
              View more
            </Button>
          </div>
          <div className="d-flex gap-2 circle-container">
            <div
              className="circle"
              style={{ backgroundColor: "#EDA415", border: "none" }}
            ></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div style={{ marginLeft: "600px" }}>
          <img src="product.png" />
        </div>
      </div>
    </>
  );
}
export default Main;

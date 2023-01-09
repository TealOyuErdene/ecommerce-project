import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Main() {
  return (
    <>
      <div className="d-flex">
        <div>
          <h2>Canon camera</h2>
          <div>
            <button>Shop now</button>
            <button>View more</button>
          </div>
        </div>
        <div>
          <img src="product.png" />
        </div>
      </div>
    </>
  );
}
export default Main;

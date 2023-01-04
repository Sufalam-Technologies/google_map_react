import { Alert, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import LocaleUAE from "./LocaleUAE";
import LocaleUs from "./LocaleUs";
import LocalIndia from "./LocalIndia";
const LocaleMap = () => {
  const history = useNavigate();
  const params = useParams();
  const { id } = params || {};

  return (
    <>
      <Alert key={"info"} variant={"info"}>
        <span className="fw-bold fs-5">Google Maps - Localizing the Maps</span>
      </Alert>
      <div className="mb-2">
        <Form.Select
          size="lg"
          defaultValue={id}
          onChange={(e) => {
            history(`/map/locale/${e.target.value}`);
            window.location.reload();
          }}
        >
          <option value={1}>India</option>
          <option value={2}>USA</option>
          <option value={3}>UAE</option>
        </Form.Select>
      </div>
      <div className="row">
        {id === "1" && <LocalIndia />}
        {id === "2" && <LocaleUs />}
        {id === "3" && <LocaleUAE />}
      </div>
    </>
  );
};

export default LocaleMap;

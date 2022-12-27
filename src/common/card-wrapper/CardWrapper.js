import { Button, Card } from "react-bootstrap";

const CardWrapper = ({
  title,
  description,
  positiveButtonLabel = "View Map",
  onClickOfPositiveButton
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="outline-secondary"
            onClick={() => {
              onClickOfPositiveButton();
            }}
          >
            {positiveButtonLabel}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWrapper;

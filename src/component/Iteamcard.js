import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Add_Iteam_To_Cart } from "../context/constants";
import { GetContext } from "../context/GlobalProvider";
import useStyle from "../style";

function Iteamcard({ iteam }) {
  const classes = useStyle();
  const { cartDispatcher } = GetContext();

  return (
    <div>
      {iteam && (
        <Container>
          <Card className={classes.iteamCard}>
            <CardMedia
              className={classes.iteamMedia}
              image={iteam.image}
              title={iteam.title}
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {iteam.title.slice(0, 20) + "..."}
              </Typography>
              <Typography component="label">$ {iteam.price}</Typography>

              <Typography gutterBottom variant="body2" component="p">
                {iteam.description.slice(0, 50) + "..."}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  cartDispatcher({ type: Add_Iteam_To_Cart, payload: iteam });
                }}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default Iteamcard;

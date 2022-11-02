import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import './Proyects.css';

export default function MediaCard(params) {
  console.log(params.imageUrl);
  console.log(params.imageAlt);
  console.log(params.title);
  console.log(params.description);
  console.log(params.viewUrl);
  console.log(params.codeUrl);

  return (
    <Card className="Card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img
          component="img"
          height="140"
          src={params.imageUrl}
          alt={params.imageAlt}
        />
        <CardContent>
          <Typography
            className="CardTitle"
            gutterBottom
            variant="h5"
            component="div"
          >
            {params.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="CardButton" size="small">
          <a href={params.viewUrl} target="_blank" rel="noreferrer">
            Ver
          </a>
        </Button>
        <Button className="CardButton" size="small">
          <a href={params.codeUrl} target="_blank" rel="noreferrer">
            Código
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

import Container from "@mui/material/Container"
import { FormControl, TextField, Button, Card, CardContent, Typography, CardActions } from '@mui/material';

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Login
          </Typography>
          <FormControl>
            <TextField type="email" placeholder="myname@mydomain.com" label="Username" />
          </FormControl>
          <FormControl>
            <TextField type="password" placeholder="my super secret text" label="Password" />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained">Login</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

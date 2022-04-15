import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import player1 from "../Media/Bijoy3.PNG";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const paperStyle = {
    height: "400px",
    width: 300,
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",

        height: 880,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: 175 }}
      >
        <Tab label="Valorant" {...a11yProps(0)} />
        <Tab label="BGMI" {...a11yProps(1)} />
        <Tab label="PUBG" {...a11yProps(2)} />
        <Tab label="CS: GO" {...a11yProps(3)} />
        <Tab label="New World" {...a11yProps(4)} />
        <Tab label="Cycle Frontier" {...a11yProps(5)} />
        <Tab label="Escape From Tarkov" {...a11yProps(6)} />
        <Tab label="Scribble" {...a11yProps(7)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* Player1 */}
          <Paper elevation={6} style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="310"
                  image={player1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ven0m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
          {/* Player1 */}

          {/* Player2 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 2
          </Paper>
          {/* Player2 */}

          {/* Player3 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 3
          </Paper>
          {/* Player3 */}

          {/* Player4 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 4
          </Paper>
          {/* Player4 */}

          {/* Player5 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 5
          </Paper>
          {/* Player5 */}

          {/* Player6 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 6
          </Paper>
          {/* Player6 */}

          {/* Player7 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 7
          </Paper>
          {/* Player7 */}

          {/* Player8 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 8
          </Paper>
          {/* Player8 */}

          {/* Player9 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 9
          </Paper>
          {/* Player9 */}

          {/* Player10 */}
          <Paper elevation={6} style={paperStyle}>
            Player: 10
          </Paper>
          {/* Player10 */}
        </Box>
      </TabPanel>
    </Box>
  );
}

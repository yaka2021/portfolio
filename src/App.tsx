import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./App.scss";
import Hamburg from "./images/Hamburg.jpg";
import CCR from "./images/CCR.jpg";
import Frontend from "./images/Frontend.jpg";
import Backend from "./images/Backend.jpg";
import Tools from "./images/Tools.jpg";

export const App = () => {
  const introduce: string =
    "日々の夕飯の献立決めに困っている主婦(夫)や、これから料理を学ぼうと思っている方向けのレシピの管理・提案・共有アプリです。レシピのCRUD機能はもちろん、画像認識を用いたレシピの提案機能も実装しています。";
  const name: string = "Kazuki Yamasaki / 山崎　和喜";
  const introduce2: string =
    "情報系の専門学校に入学後、ITの勉強を本格的に始め、半年後にITパスポート試験と基本情報技術者試験に合格。現在はフルスタックエンジニアを目指し、ReactとLaravelを勉強しています。よろしくお願いします。";
  return (
    <div className="App">
      <h1 className="Portfolio">Portfolio</h1>

      <Grid container>
        <Grid className="Service">
          <Card sx={{ width: 425, height: 650 }}>
            <CardContent>
              <Typography className="Title">Service</Typography>
              <CardMedia component="img" image={CCR} />
              <Typography className="Name">
                <a href="https://kvdomain.shop/" target="_blank">
                  Cooking Cross（略称：CCR）
                </a>
              </Typography>
              <Typography className="Text">
                {introduce}
                <hr></hr>
              </Typography>
              <Typography className="Text">
                <strong>Frontend:</strong>HTML,CSS,JavaScript(jQuery)<br></br>
                <strong>Backend:</strong>PHP,MySQL<br></br>
                <strong>Server:</strong>Value-Domain
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid className="About">
          <Card sx={{ width: 425, height: 650 }}>
            <CardContent>
              <Typography className="Title">About</Typography>
              <Avatar
                alt="ハンバーグ"
                src={Hamburg}
                sx={{ width: 222.5, height: 222.5 }}
                className="Img"
              />
              <Typography className="Name">
                {name}
                <hr></hr>
              </Typography>
              <Typography className="Url">
                <a href="https://github.com/yaka2021" target="_blank">
                  Github
                </a>
                <hr></hr>
              </Typography>
              <Typography className="Hobbies">
                <strong>hobbies</strong>：自作PC/ゲーム/水泳
              </Typography>
              <Typography className="Text">{introduce2}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid className="Skills">
          <Card sx={{ width: 425, height: 650 }}>
            <CardContent>
              <Typography className="Title">Skills</Typography>
              <Typography className="Frontend">
                <strong>Frontend</strong>
              </Typography>
              <CardMedia component="img" image={Frontend} className="Fskills" />
              <Typography className="Backend">
                <strong>Backend</strong>
              </Typography>
              <CardMedia component="img" image={Backend} className="Bskills" />
              <Typography>
                <strong className="Tools">Tools</strong>
              </Typography>
              <CardMedia component="img" image={Tools} className="T" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

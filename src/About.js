import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Noto Sans JP',
    fontWeight: 700,
  },
  context: {
    fontFamily: 'Noto Sans JP',
    fontWeight: 300,
    marginBottom: 20,
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.title}>Name</Typography>
      <Typography className={classes.context}>Yoshito Nakaue</Typography>

      <Typography variant="h5" className={classes.title}>Age</Typography>
      <Typography className={classes.context}>20</Typography>

      <Typography variant="h5" className={classes.title}>University</Typography>
      <Typography className={classes.context}>Kyoto Sangyo University</Typography>

      <Typography variant="h5" className={classes.title}>自己紹介</Typography>
      <Typography className={classes.context}>
        22卒エンジニア志望。<br/>
        中学生の頃から趣味としてプログラミングを学び始め、
        現在はC++/UE4を用いたゲーム開発を中心に
        フロントエンドからサーバーサイドまで幅広く興味を持って勉強・開発に取り組んでいます。<br/>
      </Typography>
    </div>
  );
}
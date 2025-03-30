import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TimeStyled } from "../styles";

interface TimerProps {
  duration: number;
}

const Timer = ({ duration }: TimerProps) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds: number): React.ReactElement => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000).toString());
    const total_minutes = parseInt(Math.floor(total_seconds / 60).toString());
    const total_hours = parseInt(Math.floor(total_minutes / 60).toString());
    const days = parseInt(Math.floor(total_hours / 24).toString());

    const seconds = parseInt((total_seconds % 60).toString());
    const minutes = parseInt((total_minutes % 60).toString());
    const hours = parseInt((total_hours % 60).toString());

    return (
      <TimeStyled className="timer-container">
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid className={`text-center`}>
            <div className="time">{`${days}`}</div>
            <div>
              <Typography className="title">Days</Typography>
            </div>
          </Grid>
          <Typography className="time">:</Typography>
          <Grid className={`text-center`}>
            <div className="time">{`${hours}`}</div>
            <div>
              <Typography className="title">Hours</Typography>
            </div>
          </Grid>
          <Typography className="time">:</Typography>
          <Grid className={`text-center`}>
            <div className="time">{`${minutes}`}</div>
            <div>
              <Typography className="title">Minutes</Typography>
            </div>
          </Grid>
          <Typography className="time">:</Typography>
          <Grid className={`text-center`}>
            <div className="time">{`${seconds}`}</div>
            <div>
              <Typography className="title">Second</Typography>
            </div>
          </Grid>
        </Grid>
      </TimeStyled>
    );
  };
  return (
    <div style={{ color: "white", fontSize: "40px", minWidth: '30%', margin: 'auto' }}>
      {getFormattedTime(time)}
    </div>
  );
};
export default Timer;

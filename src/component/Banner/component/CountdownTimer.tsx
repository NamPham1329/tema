import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import InputAdornments from "@/small-component/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BannerStyled } from "../styles";
import Image from "next/image";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // Đếm ngược 30 ngày

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  return (
    <div style={{ position: 'relative' }} className="w-screen">
      <BannerStyled className="flex flex-col items-center justify-center w-full  text-white">
        <Typography variant="h3" className="font-bold mb-6" sx={{ fontSize: '80px', fontWeight: '900', lineHeight: '120px', fontFamily: 'Playfair Display' }}>
          We're Getting Ready
        </Typography>

        <Card className="card bg-white text-black shadow-lg">
          <CardContent className="timer_componennt flex text-center text-2xl font-bold">
            <div>
              <span>{timeLeft.days}</span>
              <Typography className="subtitle" variant="subtitle1">Days</Typography>
            </div>
            <span>:</span>
            <div>
              <span>{timeLeft.hours}</span>
              <Typography className="subtitle" variant="subtitle1">Hours</Typography>
            </div>
            <span>:</span>
            <div>
              <span>{timeLeft.minutes}</span>
              <Typography className="subtitle" variant="subtitle1">Minutes</Typography>
            </div>
            <span>:</span>
            <div>
              <span>{timeLeft.seconds}</span>
              <Typography className="subtitle" variant="subtitle1">Seconds</Typography>
            </div>
          </CardContent>
        </Card>
        <div className="send_mail">
          <Typography variant="body1" className="description mt-6 text-center">
            We will be back to something amazing. Get the latest updates about our games. Please sign up to our newsletter.
          </Typography>
          <InputAdornments
            endAdornment={<ArrowForwardIcon />}
            placeholder={"Enter your email"}
          />
        </div>
      </BannerStyled>
      <div className="image" style={{ width:'fit-content', position: 'absolute', bottom: '0' }}>
          <Image src="/images/ong tien 1.svg" alt="banner" width={860} height={860} />
        </div>
    </div>

  );
};

export default CountdownTimer;

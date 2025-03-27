import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

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
    <div className="flex flex-col items-center justify-center w-full  text-white">
      <Typography variant="h3" className="font-bold mb-6">
        We're Getting Ready
      </Typography>
      
      <Card className="bg-white text-black p-6 rounded-xl shadow-lg">
        <CardContent className="flex space-x-4 text-center text-2xl font-bold">
          <div>
            <span>{timeLeft.days}</span>
            <Typography variant="subtitle1">Days</Typography>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.hours}</span>
            <Typography variant="subtitle1">Hours</Typography>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.minutes}</span>
            <Typography variant="subtitle1">Minutes</Typography>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.seconds}</span>
            <Typography variant="subtitle1">Seconds</Typography>
          </div>
        </CardContent>
      </Card>

      <Typography variant="body1" className="mt-6 text-center max-w-md">
        We will be back to something amazing. Get the latest updates about our games. Please sign up to our newsletter.
      </Typography>
    </div>
  );
};

export default CountdownTimer;

import React from "react";
import "./GetApp.css";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Stack from "@mui/material/Stack";

function GetApp() {
  return (
    <div className="getApp__container">
      <h1 className="getApp__title">Free stock trading simulator!</h1>
      <h3 className="text-center mb-5 text-success">Practice your ninja </h3>
      <div className="getApp__download__container">
        <Stack direction="row" spacing={2}>
          <Button
            href="https://apps.apple.com/ml/app/trade-ninja-2-0/id1584743058"
            target="_blank"
            variant="outlined"
            startIcon={<AppleIcon />}
            size="large"
            className="getApp__storeButtons"
          >
            Download on the App Store
          </Button>
          <Button
            href="https://play.google.com/store/apps/details?id=http.tradeninja"
            target="_blank"
            variant="outlined"
            startIcon={<GoogleIcon />}
            size="large"
            className="getApp__storeButtons"
          >
            Get it on Google Play
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default GetApp;

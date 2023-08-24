"use client";

import './globals.scss';
import React, { useState } from "react";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Header from "@/components/Header";
import Landing from "@/components/Landing";

// Removed the export, keeping the metadata here if needed later
const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);
    const switchTheme: any = () => {
      setIsDark (!isDark);
    };
  return (
    <html lang="en">
      <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
        <LocalizationProvider dateAdapter={ AdapterDayjs  }>
          <CssBaseline />
          <body>
            <Header switchTheme={switchTheme}/>
            {!isLoggedIn ? <Landing /> : children}
            
            </body>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  )
}

"use client";

import { useEffect, useState } from "react";

interface WeatherState {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  isDay: boolean;
  weatherCode: number;
  condition: string;
  icon: string;
}

interface WeatherWidgetProps {
  variant?: "pill" | "detailed" | "compact";
  className?: string;
}

export default function WeatherWidget({
  variant = "pill",
  className = "",
}: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Live ticking clock for Vietnam (GMT+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch real-time weather data
  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(false);

      // Coordinates for Ho Chi Minh City (10.8231, 106.6297)
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=10.8231&longitude=106.6297&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=Asia%2FBangkok"
      );

      if (!res.ok) throw new Error("Failed to fetch weather");

      const data = await res.json();
      const current = data.current;

      const code = current.weather_code;
      const isDay = current.is_day === 1;

      // Map WMO Weather Codes to Vietnamese description and FontAwesome Icon
      let condition = "Trời quang đãng";
      let icon = isDay ? "fa-solid fa-sun" : "fa-solid fa-moon";

      if (code === 1 || code === 2) {
        condition = "Có mây nhẹ";
        icon = isDay ? "fa-solid fa-cloud-sun" : "fa-solid fa-cloud-moon";
      } else if (code === 3) {
        condition = "Nhiều mây";
        icon = "fa-solid fa-cloud";
      } else if (code === 45 || code === 48) {
        condition = "Sương mù";
        icon = "fa-solid fa-smog";
      } else if (code >= 51 && code <= 55) {
        condition = "Mưa phùn nhẹ";
        icon = "fa-solid fa-cloud-rain";
      } else if (code >= 61 && code <= 65) {
        condition = "Mưa rào";
        icon = "fa-solid fa-cloud-showers-heavy";
      } else if (code >= 80 && code <= 82) {
        condition = "Mưa rào rải rác";
        icon = "fa-solid fa-cloud-sun-rain";
      } else if (code >= 95) {
        condition = "Dông, sấm chớp";
        icon = "fa-solid fa-bolt-lightning";
      }

      setWeather({
        temperature: Math.round(current.temperature_2m),
        apparentTemperature: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: current.wind_speed_10m,
        isDay,
        weatherCode: code,
        condition,
        icon,
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !weather) {
    return (
      <div className={`weather-widget-loading ${className}`}>
        <i className="fa-solid fa-circle-notch fa-spin"></i>
        <span>Đang nạp thời tiết TP.HCM...</span>
      </div>
    );
  }

  if (error || !weather) {
    return null; // Gracefully fail without breaking layout
  }

  // Variant: Compact badge (for Contact section or Navbar)
  if (variant === "compact") {
    return (
      <div className={`weather-compact-badge ${className}`}>
        <i className={`${weather.icon} weather-accent-icon`}></i>
        <span className="temp-txt">{weather.temperature}&deg;C</span>
        <span className="cond-txt">&bull; {weather.condition}</span>
      </div>
    );
  }

  return (
    <div className={`weather-widget-wrapper ${className}`}>
      {/* Clickable Pill Trigger */}
      <button
        type="button"
        className="weather-pill-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Nhấp để xem chi tiết thời tiết thời gian thực"
      >
        <span className="weather-location-pin">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <span className="weather-city">TP. Hồ Chí Minh</span>
        <span className="weather-sep">&bull;</span>
        <i className={`${weather.icon} weather-icon-pulse`}></i>
        <span className="weather-temp">{weather.temperature}&deg;C</span>
        <span className="weather-sep">&bull;</span>
        <span className="weather-live-time">
          <i className="fa-regular fa-clock"></i> {currentTime}
        </span>
        <span className="weather-expand-arrow">
          <i className={`fa-solid ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </span>
      </button>

      {/* Expandable Glassmorphism Dashboard Modal / Popover */}
      {isExpanded && (
        <div className="weather-popover-card">
          <div className="weather-popover-header">
            <div>
              <div className="weather-location-title">
                <i className="fa-solid fa-map-pin"></i> Ho Chi Minh City, VN
              </div>
              <div className="weather-condition-title">{weather.condition}</div>
            </div>
            <button
              className="weather-refresh-btn"
              onClick={fetchWeather}
              title="Làm mới dữ liệu"
            >
              <i className={`fa-solid fa-rotate ${loading ? "fa-spin" : ""}`}></i>
            </button>
          </div>

          <div className="weather-main-display">
            <div className="weather-big-temp">
              <i className={`${weather.icon} weather-big-icon`}></i>
              <span className="temp-value">{weather.temperature}</span>
              <span className="temp-unit">&deg;C</span>
            </div>
            <div className="weather-apparent">
              Cảm giác như: <strong>{weather.apparentTemperature}&deg;C</strong>
            </div>
          </div>

          <div className="weather-metrics-grid">
            <div className="weather-metric-item">
              <i className="fa-solid fa-droplet"></i>
              <div className="metric-info">
                <span className="metric-label">Độ ẩm</span>
                <span className="metric-val">{weather.humidity}%</span>
              </div>
            </div>
            <div className="weather-metric-item">
              <i className="fa-solid fa-wind"></i>
              <div className="metric-info">
                <span className="metric-label">Gió</span>
                <span className="metric-val">{weather.windSpeed} km/h</span>
              </div>
            </div>
            <div className="weather-metric-item">
              <i className="fa-regular fa-clock"></i>
              <div className="metric-info">
                <span className="metric-label">Giờ thực tế</span>
                <span className="metric-val">{currentTime}</span>
              </div>
            </div>
            <div className="weather-metric-item">
              <i className="fa-solid fa-satellite-dish"></i>
              <div className="metric-info">
                <span className="metric-label">Nguồn API</span>
                <span className="metric-val">Open-Meteo</span>
              </div>
            </div>
          </div>

          <div className="weather-footer-note">
            <span className="live-badge">
              <span className="live-dot"></span> LIVE API
            </span>
            <span>Cập nhật liên tục từ trạm khí tượng vệ tinh</span>
          </div>
        </div>
      )}
    </div>
  );
}

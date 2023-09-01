import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cityName, setCityName] = useState("Rome");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); }

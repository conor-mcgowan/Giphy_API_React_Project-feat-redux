import React, { useState, useEffect } from "react";

const baseUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=srFHOhXtFpt5VtYfGapcbnWoKjhRzs2V";

export default function useFetch(url) {
  const [data, setData] = (useState = null);
  const [error, setError] = (useState = null);
  const [loading, setLoading] = (useState = null);

  useEffect(() => {
    async function init() {
      try {
        let response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);
}

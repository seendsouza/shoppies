import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AutoComplete from "../src/components/AutoComplete";
import Router from "next/router";
import Link from "next/link";
import { getMovies } from "../src/utils";

const Home = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const onChange = (data) => {
    setValue(data);
  };
  const onClick = (e) => {
    if (event.target.localName !== "input") {
      Router.push({
        pathname: "/search",
        query: { keyword: value },
      });
    }
  };

  const onInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      Router.push({
        pathname: "/search",
        query: { keyword: value },
      });
    }
  };
  const onSearch = (searchText) => {
    if (!searchText) {
      setOptions([]);
    } else {
      getMovies(searchText).then((options) => {
        setOptions(options);
      });
    }
  };
  const onSelect = (_, option) => {
    Router.push({
      pathname: "/search",
      query: { keyword: option.value },
    });
  };

  useEffect(() => {
    const input = document.querySelector("input");
    input.focus();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>The Shoppies</h1>
          </a>
        </Link>

        <div className={styles.search}>
          <AutoComplete
            value={value}
            options={options}
            onChange={onChange}
            onClick={onClick}
            onInputKeyDown={onInputKeyDown}
            onSearch={onSearch}
            onSelect={onSelect}
            placeholder="Search for movies"
          />
        </div>
      </main>
    </div>
  );
};
export default Home;

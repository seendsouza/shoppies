import React, { useReducer, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Search.module.css";
import AutoComplete from "../src/components/AutoComplete";
import NominationsButton from "../src/components/NominationsButton";
import { NominationsContext } from "../src/contexts/NominationsContext";
import { searchReducer, initializer } from "../src/reducers/searchReducer";
import { notify, getMovies } from "../src/utils";
import Card from "../src/components/Card";
import Banner from "../src/components/Banner";

const Search = () => {
  const nominationsCtx = useContext(NominationsContext);
  const { query } = useRouter();
  const [state, dispatch] = useReducer(searchReducer, initializer);

  useEffect(() => {
    getMovies(query.keyword).then((options) => {
      dispatch({
        type: "INITIALIZE",
        payload: { keyword: query.keyword, options: options },
      });
    });
  }, [query.keyword]);

  const onChange = (data) => {
    dispatch({ type: "UPDATE_VALUE", payload: { value: data } });
  };
  const onClick = (e) => {
    if (event.target.localName !== "input") {
      Router.push({
        pathname: "/search",
        query: { keyword: state.value },
      });
    }
  };

  const onInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(state.value);
      Router.push({
        pathname: "/search",
        query: { keyword: state.value },
      });
    }
  };
  const onSearch = (searchText) => {
    if (!searchText) {
      dispatch({
        type: "UPDATE_OPTIONS",
        payload: { options: [] },
      });
    } else {
      getMovies(searchText).then((options) => {
        dispatch({
          type: "UPDATE_OPTIONS",
          payload: { options: options },
        });
      });
    }
  };
  const onSelect = (_, option) => {
    Router.push({
      pathname: "/search",
      query: { keyword: option.value },
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>The Shoppies</h1>
          </a>
        </Link>

        <div className={styles.search}>
          <AutoComplete
            value={state.value}
            options={state.options}
            onChange={onChange}
            onClick={onClick}
            onInputKeyDown={onInputKeyDown}
            onSearch={onSearch}
            onSelect={onSelect}
            placeholder="Search for movies"
          />
        </div>
        <div className={styles.nominations}>
          <NominationsButton nominationsCtx={nominationsCtx} />
        </div>
      </div>
      <main className={styles.main}>
        {nominationsCtx.nominations.length >= 5 && <Banner />}
        <div className={styles.grid}>
          {state.results.map((result) => (
            <Card
              key={result.key}
              title={result.Title}
              description={result.Year}
              disabled={nominationsCtx.nominations
                .map((nom) => nom.key)
                .includes(result.key)}
              onClick={() => {
                if (nominationsCtx.nominations.length >= 5) {
                  notify("ERROR", "Your nominations list is full.", "danger");
                  return;
                }
                if (nominationsCtx.nominations.length === 4) {
                  notify(
                    "SUCCESS",
                    "You have made your 5 nominations",
                    "success"
                  );
                }
                nominationsCtx.dispatch({
                  type: "ADD_NOMINATION",
                  payload: result,
                });
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Search;

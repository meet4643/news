import React, { useEffect, useState } from "react";
import { Newsbox, List, P, S, R, C } from "./Homestyle";
import { Button, Box } from "@mui/material";
import Detailbutton from "./DetailButton/Detailbutton.jsx";
import Navbar from "./Navbar";
import Country from "./Detail/filters/Country";
import Lan from "./Detail/filters/Lan";

function Home() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [mapdata, setMapdata] = useState({});
  const [search, setSearch] = useState("business");
  const [country, setCountry] = useState("in");
  const [lan, setLan] = useState("en");

  console.log(rows)
  
  useEffect(() => {
    const debounce = setTimeout(() => {
      fetch(
        `https://newsdata.io/api/1/news?apikey=pub_18872c9023dd8e05f9f9fe8262212b584b761&country=${country}&language=${lan}&category=${search}  `,
        {
          method: "GET",
          headers: {},
        }
      )
        .then((response) => response.json())
        .then((data) =>
          setRows(
            data.results.map((row) => ({
              ...row,
              id: Math.floor(Math.random() * 100),
            }))
          )
        )

        .catch((err) => console.error(err));
    }, 1000);

    return () => clearTimeout(debounce);
  }, [search, country, lan]);

  // function handleClickSearch(e){

  // setSearch(e.target.value);

  // }

  const handleClickOpen = (
    title,
    pubDate,
    category,
    source_id,
    link,
    content,
    image_url
  ) => {
    setOpen(true);

    setMapdata({
      title: title,
      date: pubDate,
      category: category,
      data: source_id,
      link: link,
      content: content,
      image_url: image_url,
    });
  };

  return (
    <div style={{scrollBehavior:"smooth"}}>
      <Navbar search={search} setSearch={setSearch} />
      <Box
        display="flex"
        sx={{
          justifyContent: "space-around",
          paddingTop: "15px",
          backgroundColor: "#f8f9fa",
          padding: "10px",
          
        }}
      >
        <Country country={country} setCountry={setCountry} />
        <Lan setLan={setLan} />
      </Box>
      <Newsbox>
        <Detailbutton
          open={open}
          setOpen={setOpen}
          rows={rows}
          mapdata={mapdata}
        />

        {/* {rows
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          }) */}
        {rows.map((item, i) => (
          <List key={i}>
            <Button
              variant="outlined"
              onClick={() =>
                handleClickOpen(
                  item.title,
                  item.pubDate,
                  item.category,
                  item.source_id,
                  item.link,
                  item.content,
                  item.image_url
                )
              }
            >
              More details
            </Button>
            <P>{item.title} </P>
            <S>{item.pubDate}</S>
            <R>{item.category}</R>
            <C>{item.source_id}</C>
          </List>
        ))}
      </Newsbox>
    </div>
  );
}

export default Home;

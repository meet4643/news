import React, { useEffect, useState } from "react";
import { Newsbox, List, P, S, R, C } from "./Homestyle";
import Button from "@mui/material/Button";
import Detailbutton from "./DetailButton/Detailbutton.jsx";

function Home() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [mapdata, setMapdata] = useState({});
  console.log(rows)
  useEffect(() => {
    fetch(
      " https://newsdata.io/api/1/news?apikey=pub_1866293efaa56a256942ec023acee5f574510&q=news&language=en ",
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
    }, []);
    
    const handleClickOpen = (title, pubDate, category, source_id, link,content,image_url) => {
      setOpen(true);
      
      setMapdata({
        title: title,
      date: pubDate,
      category: category,
      data: source_id,
      link: link,
      content: content,
      image_url:image_url
    });
  };

  // console.log(mapdata)

  return (
    <>
      <Newsbox>
        <Detailbutton
          open={open}
          setOpen={setOpen}
          rows={rows}
          mapdata={mapdata}
        />
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
    </>
  );
}

export default Home;

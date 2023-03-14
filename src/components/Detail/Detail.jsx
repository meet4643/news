import { Content } from "./Detailstyle.js";
import { Div, Title, Date, Link, Category, Data, } from "./Detailstyle.js";

function Detail({ mapdata }) {
  return (
    <Div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Title>{mapdata.title}</Title>
        <Category>{mapdata.category}</Category>
        <Date>{mapdata.date}</Date>
        {/* <Img src={mapdata.image_url} /> */}
        <Content>{mapdata.content}</Content>
        <Link href={mapdata.link}>{mapdata.link}</Link>
        <Data>{mapdata.data}</Data>
        
      </div>
    </Div>
  );
}

export default Detail;

import React from "react";

function Lan({setLan}) {
  return (
    <div>
      <div className="col-sm-12 col-md-6 col-lg-3 filter">
        {" "}
        <div
          className="SumoSelect sumo_language-select"
          tabIndex="0"
          role="button"
          aria-expanded="false"
        >
          <select
          style={{border:'1px solid blue',padding:'7px', marginTop:'4rem'}} 

          onChange={(e)=>setLan(e.target.value)}
            name="language-select"
            className="filter-select SumoUnder"
            multiple=""
            id="language_select"
            tabIndex="-1"
          >
            {" "}
            <option value="be"> Belarusian</option>{" "}
            <option value="af"> Afrikaans</option>{" "}
            <option value="am"> Amharic</option>{" "}
            <option value="ar"> Arabic</option>{" "}
            <option value="az"> Azerbaijani</option>{" "}
            <option value="bn"> Bengali</option>{" "}
            <option value="bs"> Bosnian</option>{" "}
            <option value="bg"> Bulgarian</option>{" "}
            <option value="my"> Burmese</option>{" "}
            <option value="ckb"> Central Kurdish</option>{" "}
            <option value="zh"> Chinese</option>{" "}
            <option value="hr"> Croatian</option>{" "}
            <option value="cs"> Czech</option>{" "}
            <option value="da"> Danish</option>{" "}
            <option value="nl"> Dutch</option>{" "}
            <option value="en"> English</option>{" "}
            <option value="et"> Estonian</option>{" "}
            <option value="pi"> Filipino</option>{" "}
            <option value="fi"> Finnish</option>{" "}
            <option value="fr"> French</option>{" "}
            <option value="de"> German</option>{" "}
            <option value="el"> Greek</option>{" "}
            <option value="he"> Hebrew</option>{" "}
            <option value="hi"> Hindi</option>{" "}
            <option value="hu"> Hungarian</option>{" "}
            <option value="is"> Icelandic</option>{" "}
            <option value="in"> Indonesian</option>{" "}
            <option value="it"> Italian</option>{" "}
            <option value="jp"> Japanese</option>{" "}
            <option value="kh"> Khmer</option>{" "}
            <option value="ko"> Korean</option>{" "}
            <option value="lv"> Latvian</option>{" "}
            <option value="lt"> Lithuanian</option>{" "}
            <option value="lb"> Luxembourgish</option>{" "}
            <option value="ms"> Malay</option>{" "}
            <option value="ne"> Nepali</option>{" "}
            <option value="no"> Norwegian</option>{" "}
            <option value="pl"> Polish</option>{" "}
            <option value="pt"> Portuguese</option>{" "}
            <option value="ro"> Romanian</option>{" "}
            <option value="ru"> Russian</option>{" "}
            <option value="sr"> Serbian</option>{" "}
            <option value="si"> Sinhala</option>{" "}
            <option value="sk"> Slovak</option>{" "}
            <option value="sl"> Slovenian</option>{" "}
            <option value="so"> Somali</option>{" "}
            <option value="es"> Spanish</option>{" "}
            <option value="sw"> Swahili</option>{" "}
            <option value="sv"> Swedish</option>{" "}
            <option value="tg"> Tajik</option>{" "}
            <option value="ta"> Tamil</option> <option value="th"> Thai</option>{" "}
            <option value="tr"> Turkish</option>{" "}
            <option value="tk"> Turkmen</option>{" "}
            <option value="uk"> Ukrainian</option>{" "}
            <option value="ur"> Urdu</option> <option value="uz"> Uzbek</option>{" "}
            <option value="vi"> Vietnamese</option>{" "}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Lan;

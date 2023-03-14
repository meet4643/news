import React from "react";
import Checkbox from "@mui/material/Checkbox";

function Country({ setCountry }) {
  return (
    <div>
      <div className="col-sm-12 col-md-6 col-lg-3 filter">
        {" "}
        <div
          className="SumoSelect sumo_country-select"
          tabIndex="0"
          role="button"
          aria-expanded="false"
        >
          <select
          style={{border:'1px solid blue',padding:'7px', marginTop:'4rem'}} 
          onChange={(e) => {
              e.preventDefault();
              return setCountry(e.target.value);
            }}
            name="country-select"
            className="filter-select SumoUnder , dropdown-toggle ,btn-secondary "
            multiple=""
            id="country_select"
          >
            {" "}
            <option value="in">
              <Checkbox /> India
            </option>{" "}
            <option value="dz"> Algeria</option>{" "}
            <option value="ao">
              <Checkbox /> Angola
            </option>{" "}
            <option value="ar">
              <Checkbox /> Argentina
            </option>{" "}
            <option value="au">
              <Checkbox /> Australia
            </option>{" "}
            <option value="at">
              <Checkbox /> Austria
            </option>{" "}
            <option value="az">
              <Checkbox /> Azerbaijan
            </option>{" "}
            <option value="bd">
              <Checkbox /> Bangladesh
            </option>{" "}
            <option value="by">
              <Checkbox /> Belarus
            </option>{" "}
            <option value="be">
              <Checkbox /> Belgium
            </option>{" "}
            <option value="bo">
              <Checkbox /> Bolivia
            </option>{" "}
            <option value="br">
              <Checkbox /> Brazil
            </option>{" "}
            <option value="bg">
              <Checkbox /> Bulgaria
            </option>{" "}
            <option value="bf">
              <Checkbox /> Burkina Fasco
            </option>{" "}
            <option value="cm">
              <Checkbox /> Cameroon
            </option>{" "}
            <option value="ca">
              <Checkbox /> Canada
            </option>{" "}
            <option value="cl">
              <Checkbox /> Chile
            </option>{" "}
            <option value="cn">
              <Checkbox /> China
            </option>{" "}
            <option value="co">
              <Checkbox /> Colombia
            </option>{" "}
            <option value="cr">
              <Checkbox /> Costa Rica
            </option>{" "}
            <option value="ci">
              <Checkbox /> Côte D'Ivoire
            </option>{" "}
            <option value="hr">
              <Checkbox /> Croatia
            </option>{" "}
            <option value="cu">
              <Checkbox /> Cuba
            </option>{" "}
            <option value="cz">
              <Checkbox /> Czech Republic
            </option>{" "}
            <option value="dk">
              <Checkbox /> Denmark
            </option>{" "}
            <option value="do">
              <Checkbox /> Dominican Republic
            </option>{" "}
            <option value="cd">
              <Checkbox /> DR Congo
            </option>{" "}
            <option value="ec">
              <Checkbox /> Ecuador
            </option>{" "}
            <option value="eg">
              <Checkbox /> Egypt
            </option>{" "}
            <option value="ee">
              <Checkbox /> Estonia
            </option>{" "}
            <option value="et">
              <Checkbox /> Ethiopia
            </option>{" "}
            <option value="fi">
              <Checkbox /> Finland
            </option>{" "}
            <option value="fr">
              <Checkbox /> France
            </option>{" "}
            <option value="de">
              <Checkbox /> Germany
            </option>{" "}
            <option value="gh">
              <Checkbox /> Ghana
            </option>{" "}
            <option value="gr">
              <Checkbox /> Greece
            </option>{" "}
            <option value="gt">
              <Checkbox /> Guatemala
            </option>{" "}
            <option value="hk">
              <Checkbox /> Hong Kong
            </option>{" "}
            <option value="hu">
              <Checkbox /> Hungary
            </option>{" "}
            <option value="id">
              <Checkbox /> Indonesia
            </option>{" "}
            <option value="iq">
              <Checkbox /> Iraq
            </option>{" "}
            <option value="ie">
              <Checkbox /> Ireland
            </option>{" "}
            <option value="il">
              <Checkbox /> Israel
            </option>{" "}
            <option value="it">
              <Checkbox /> Italy
            </option>{" "}
            <option value="jp">
              <Checkbox /> Japan
            </option>{" "}
            <option value="jo">
              <Checkbox /> Jordan
            </option>{" "}
            <option value="kz">
              <Checkbox /> Kazakhstan
            </option>{" "}
            <option value="ke">
              <Checkbox /> Kenya
            </option>{" "}
            <option value="kw">
              <Checkbox /> Kuwait
            </option>{" "}
            <option value="lv">
              <Checkbox /> Latvia
            </option>{" "}
            <option value="lb">
              <Checkbox /> Lebanon
            </option>{" "}
            <option value="ly">
              <Checkbox /> Libya
            </option>{" "}
            <option value="lt">
              <Checkbox /> Lithuania
            </option>{" "}
            <option value="lu">
              <Checkbox /> Luxembourg
            </option>{" "}
            <option value="mo">
              <Checkbox /> Macau
            </option>{" "}
            <option value="mg">
              <Checkbox /> Madagascar
            </option>{" "}
            <option value="mw">
              <Checkbox /> Malawi
            </option>{" "}
            <option value="my">
              <Checkbox /> Malaysia
            </option>{" "}
            <option value="ml">
              <Checkbox /> Mali
            </option>{" "}
            <option value="mr">
              <Checkbox /> Mauritania
            </option>{" "}
            <option value="mx">
              <Checkbox /> Mexico
            </option>{" "}
            <option value="ma">
              <Checkbox /> Morocco
            </option>{" "}
            <option value="mz">
              <Checkbox /> Mozambique
            </option>{" "}
            <option value="mm">
              <Checkbox /> Myanmar
            </option>{" "}
            <option value="np">
              <Checkbox /> Nepal
            </option>{" "}
            <option value="nl">
              <Checkbox /> Netherland
            </option>{" "}
            <option value="nz">
              <Checkbox /> New Zealand
            </option>{" "}
            <option value="ng">
              <Checkbox /> Nigeria
            </option>{" "}
            <option value="kp">
              <Checkbox /> North Korea
            </option>{" "}
            <option value="no">
              <Checkbox /> Norway
            </option>{" "}
            <option value="om">
              <Checkbox /> Oman
            </option>{" "}
            <option value="pk">
              <Checkbox /> Pakistan
            </option>{" "}
            <option value="pa">
              <Checkbox /> Panama
            </option>{" "}
            <option value="py">
              <Checkbox /> Paraguay
            </option>{" "}
            <option value="pe">
              <Checkbox /> Peru
            </option>{" "}
            <option value="ph">
              <Checkbox /> Philippines
            </option>{" "}
            <option value="pl">
              <Checkbox /> Poland
            </option>{" "}
            <option value="pt">
              <Checkbox /> Portugal
            </option>{" "}
            <option value="pr">
              <Checkbox /> Puerto Rico
            </option>{" "}
            <option value="ro">
              <Checkbox /> Romania
            </option>{" "}
            <option value="ru">
              <Checkbox /> Russia
            </option>{" "}
            <option value="sa">
              <Checkbox /> Saudi Arabia
            </option>{" "}
            <option value="sn">
              <Checkbox /> Senegal
            </option>{" "}
            <option value="rs">
              <Checkbox /> Serbia
            </option>{" "}
            <option value="sg">
              <Checkbox /> Singapore
            </option>{" "}
            <option value="sk">
              <Checkbox /> Slovakia
            </option>{" "}
            <option value="si">
              <Checkbox /> Slovenia
            </option>{" "}
            <option value="so">
              <Checkbox /> Somalia
            </option>{" "}
            <option value="za">
              <Checkbox /> South Africa
            </option>{" "}
            <option value="kr">
              <Checkbox /> South Korea
            </option>{" "}
            <option value="es">
              <Checkbox /> Spain
            </option>{" "}
            <option value="lk">
              <Checkbox /> Sri Lanka
            </option>{" "}
            <option value="sd">
              <Checkbox /> Sudan
            </option>{" "}
            <option value="se">
              <Checkbox /> Sweden
            </option>{" "}
            <option value="ch">
              <Checkbox /> Switzerland
            </option>{" "}
            <option value="tw">
              <Checkbox /> Taiwan
            </option>{" "}
            <option value="tz">
              <Checkbox /> Tanzania
            </option>{" "}
            <option value="th">
              <Checkbox /> Thailand
            </option>{" "}
            <option value="tr">
              <Checkbox /> Turkey
            </option>{" "}
            <option value="tm">
              <Checkbox /> Turkmenistan
            </option>{" "}
            <option value="ug">
              <Checkbox /> Uganda
            </option>{" "}
            <option value="ua">
              <Checkbox /> Ukraine
            </option>{" "}
            <option value="ae">
              <Checkbox /> United Arab Emirates
            </option>{" "}
            <option value="gb">
              <Checkbox /> United Kingdom
            </option>{" "}
            <option value="us">
              <Checkbox /> United States Of America
            </option>{" "}
            <option value="uy">
              <Checkbox /> Uruguay
            </option>{" "}
            <option value="uz">
              <Checkbox /> Uzbekistan
            </option>{" "}
            <option value="ve">
              <Checkbox /> Venezuela
            </option>{" "}
            <option value="vi">
              <Checkbox /> Vietnam
            </option>{" "}
            <option value="zm">
              <Checkbox /> Zambia
            </option>{" "}
          </select>
        </div>{" "}
        <p id="country_error" className="error-block"></p>{" "}
      </div>
    </div>
  );
}

export default Country;

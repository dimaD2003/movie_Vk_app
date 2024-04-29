/* eslint-disable react/prop-types */
import React from "react";
import './Detail.css'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } 
    console.log(location.state);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <div className="contant">
      <div className="details_img">
        <img src={location.state.large_cover_image} alt="" />
      </div>

      <div className="details_main">
        <div className="deatils_title">{location.state.title}</div>
              <div className="details_descr"> <p> {location.state.summary}</p></div>
              <div className="tableClass">
                <table>
                <tr>
                    <td> <b>Язык </b></td>
                    <td>{location.state.language == "en"? "Английский" : "Русский"}</td>
                  </tr>
                  <tr>
                    <td> <b>Год выпуска: </b></td>
                    <td>{location.state.year}</td>
                  </tr>
                  <tr>
                    <td> <b>Рейтинг:</b></td>
                    <td>{location.state.rating}</td>
                  </tr>
                  <tr>
                    <td> <b>Обновление:</b></td>
                    <td>{location.state.date_uploaded}</td>
                  </tr>
                </table>
              </div>

      </div>
      
     

      </div> 
      
      
    } else {
      return null;
    }
  }
}

export default Detail;

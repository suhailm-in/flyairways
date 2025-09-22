import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Place.css";
import NavBar from "../Navbar/NavBar";

const PlaceSingle = () => {
  const { id } = useParams(); // get place id from URL
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}/`);
        setPlace(response.data.data);
      } catch (error) {
        console.error("Error fetching place:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!place) return <div className="error">Place not found</div>;

  return (
    <>
    <NavBar />
    <div className="place-single-page">
      <div className="place-hero">
        <img src={place.image} alt={place.name} />
        <div className="hero-content">
          <h1>{place.name}</h1>
          <p className="location">{place.location} | {place.category_name}</p>
        </div>
      </div>

      <div className="place-description">
        <h2>About this Place</h2>
        <p>{place.description}</p>
      </div>

      <div className="place-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {place.gallery.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.image} alt={`Gallery ${img.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default PlaceSingle;

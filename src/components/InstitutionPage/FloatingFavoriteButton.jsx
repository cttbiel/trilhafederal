import React from "react";
import ReactDOM from "react-dom";
import { FaHeart } from "react-icons/fa";

const FloatingFavoriteButton = ({ isFavorited, loading, onClick }) => {
  return ReactDOM.createPortal(
    <button
      className={`floating-fav-btn${isFavorited ? " favorited" : ""}${
        loading ? " loading" : ""
      }`}
      onClick={onClick}
      title={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      aria-label={
        isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
      disabled={loading}
    >
      <span className="floating-fav-icon-wrapper">
        <FaHeart />
        {loading && <span className="fav-float-spinner"></span>}
      </span>
    </button>,
    document.body
  );
};

export default FloatingFavoriteButton;

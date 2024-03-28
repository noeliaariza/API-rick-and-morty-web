import "../scss/components/Error404.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <p className="notFoundContainer__error404">404</p>
      <p className="notFoundContainer__p">Página no encontrada</p>
      <p className="notFoundContainer__phrase">
        Rick says: "Es posible que hayamos estado estableciendo relaciones entre
        algunas cosas que no estaban relacionadas para nada."
      </p>
      <Link to="/" className="notFoundContainer__link">
        <p>Aquí puedes tener una segunda oportunidad...</p>
      </Link>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJlcHo1NmdtcDBud29hNHBkMzczY2F3YTU2aGxxdGZxOXNsM21sMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378BzHA5FwWFXVSg/giphy.gif" />
    </div>
  );
}

export default NotFound;

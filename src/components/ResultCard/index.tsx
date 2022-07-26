import './styles.css';

type Props = {
  html_url: string;
  followers: string;
  name: string;
  location: string;
  avatar_url: string;
};

const ResultCard = ({
  html_url,
  followers,
  name,
  location,
  avatar_url,
}: Props) => {
  return (
    <div className="result-container container">
      <div className="div-result-image">
        <img
          src={avatar_url}
          alt="Imagem perfil Github"
        />
      </div>
      <div className="div-result-container">
        <h3 className="result-title">Informações</h3>

        <div className="div-result-info">
          <h4>Perfil:</h4>
          <p>{html_url}</p>
        </div>

        <div className="div-result-info">
          <h4>Seguidores:</h4>
          <p>{followers}</p>
        </div>

        <div className="div-result-info">
          <h4>Localidade:</h4>
          <p>{location}</p>
        </div>

        <div className="div-result-info">
          <h4>Nome:</h4>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

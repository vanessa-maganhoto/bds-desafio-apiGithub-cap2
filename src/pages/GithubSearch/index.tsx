import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  userGithub: string;
  
};

type Perfil = {
  html_url: string;
  name: string;
  followers: string;
  location: string;
  avatar_url: string;
};

const GithubSearch = () => {
  const [perfil, setPerfil] = useState<Perfil>();

  const [formData, setFormData] = useState<FormData>({
    userGithub: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${formData.userGithub}`)
    .then((response) => {
      setPerfil(response.data);
      console.log(response.data)
    })
    .catch((error) =>{
      setPerfil(undefined);
      console.log(error);
    })
  };

  return (
    <div className="github-search-container">
      
      <div className="container search-container">
        <h1 className="text-dark">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="userGithub"
              value={formData.userGithub}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {perfil &&
         <>
          <ResultCard avatar_url={perfil.avatar_url} html_url={perfil.html_url} followers={perfil.followers} location={perfil.location} name={perfil.name} />
        </> 
      }
    </div>
  );
};

export default GithubSearch;

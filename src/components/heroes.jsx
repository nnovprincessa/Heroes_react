import './App.css';

function Superhero(props) {
    return (
        <div className="hero-card">
            <img src={props.url}></img>
           <div className ="hero-name"> <h4>Имя:</h4>{props.name}</div>
           <div className ="universe"><h4>Вселенная:</h4>{props.universe}</div>
            <div className ="alterego"><h4>Альтер эго:</h4>{props.alterego}</div>
            <div className ="occupation"><h4>Род деятельности:</h4>{props.occupation}</div>
            <div className ="friends"><h4>Друзья:</h4>{props.friends}</div>
            <div className ="superpower"><h4>Суперсила:</h4>{props.superpower}</div>
           <div className ="moreDetails"><h4>Подробнее:</h4>{props.moreDetails}</div>
        </div>
    );
}

export default Superhero;

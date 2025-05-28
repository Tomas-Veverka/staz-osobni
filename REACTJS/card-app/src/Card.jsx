import profilePic from './assets/image.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="pfp" />
            <h2 className="card-title">Thomas</h2>
            <p className="card-text">I study IT and play video games</p>
        </div>
    );

}

export default Card
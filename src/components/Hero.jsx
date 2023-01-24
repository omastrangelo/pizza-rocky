import "./styles/Hero.css"

const Hero = ({title}) =>{
    return(
 <section className="hero hero-slide-1">
    <div className="hero-container">
        <article className="hero-container__text-box">
            <h1>{title}</h1>
            <p>
                <strong>Pizza Rocky Shop</strong>
            </p> Van como piña
            <div>
             <button className="button-primary">Comprar</button>
             </div>
        </article>

    </div>
</section>

    )
}

export default Hero
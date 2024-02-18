const SocialButton = (props) => {
    return (
        <div className="orden">
            <div className="buttons">
            {
                props.buttons.map((socialButtons) =>
                    <a href={socialButtons.url} className="links" >
                        <img src={socialButtons.img} alt={socialButtons.ref} className="size-imgs" />
                    </a>
                )
            }
            </div>
            <h3 className="titulo3">O usa tu email para registrarte</h3>
        </div>
    )
}

export default SocialButton;
const SocialButton = (props) => {
    return (
        <div>
            {
                props.buttons.map((socialButtons) =>
                    <a href={socialButtons.url}>
                        <img src={socialButtons.img} alt={socialButtons.ref} />
                    </a>
                )
            }
            <h3>O usa tu email para registrarte</h3>
        </div>
    )
}

export default SocialButton;
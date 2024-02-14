const SocialButton = (props) => {
    return (
        <div>
            <h1>Crea una Cuenta</h1>
            {
                props.buttons.map((socialButtons) =>
                    <a href={socialButtons.url}>
                        <img src={socialButtons.img} alt={socialButtons.ref} />
                    </a>
                )
            }

        </div>
    )
}

export default SocialButton;

type MenuItemProps = {
    link: string;
    name: string;
}

const MenuItem = (props: MenuItemProps): JSX.Element => {
    const {link, name} = props
    return (
        <a href={link}>
            {name}
        </a>
    )
}

export default MenuItem
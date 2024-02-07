type MenuItemProps = {
  link: string;
  name: string;
};

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { link, name } = props;
  return (
    <a className="MenuItem" href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default MenuItem;

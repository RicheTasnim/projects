const Link = ({ route }) => {
  return (
    <li className="mr-8 px-6 hover:bg-amber-500" key={route.id}>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;

import Contacts from '../../pages/Contacts';
import Products from '../../pages/Products';
import Todos from '../../pages/Todos';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div>
      {pathname === '/roducts' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/todos' && <Todos />}
    </div>
  );
};

export default Content;

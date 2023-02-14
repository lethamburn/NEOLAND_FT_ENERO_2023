import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Content = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      <h1>{user}</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam
        atque voluptas recusandae laboriosam placeat ab corporis molestiae est
        perferendis, dicta facilis et necessitatibus reiciendis ipsa consequatur
        at ratione aliquam?Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quasi vel tenetur reprehenderit esse dignissimos quam hic
        inventore debitis delectus aut. Explicabo nobis consectetur deserunt vel
        earum beatae corporis aliquid quo?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque voluptates delectus, voluptate ex nam sapiente
        vel possimus repudiandae ab quas corrupti suscipit, consequuntur sed
        amet. Nisi, velit? Cumque, vitae id!
      </h2>
    </main>
  );
};

export default Content;

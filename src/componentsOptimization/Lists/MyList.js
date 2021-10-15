import { memo } from "react";
import { isEqual } from "lodash";

// const Li = ({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// };

// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// });

const Li = memo(
  ({ children }) => {
    console.log(`renderizando ${children}`);
    return <li>{children}</li>;
  },
  isEqual
  // (prev, post) => {
  //   console.log(prev.children.key, post.children.key);
  //   return prev.children.key === post.children.key;
  // }
);

//const MemoizadoLi = memo(Li);

// const MyList = ({ data }) => {
//   console.log("renderizando lista");
//   return (
//     <ul>
//       {data.map((x) => (
//         <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//         // <MemoizadoLi
//         //   key={x.name + x.lastname}
//         //   fullname={`${x.name} ${x.lastname}`}
//         // />
//       ))}
//     </ul>
//   );
// };

const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>{`${x.name} ${x.lastname}`}</Li>
      ))}
    </ul>
  );
};

//export default MyList;
export default memo(MyList);

// import React from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { useEffect} from 'react';
// import { fetchFamilyMembers } from '../../redux/slice/family';
// import FamilyTree from '../../mytree';


// const LandingPage = () => {

//     const dispatch = useDispatch();
//     const state = useSelector((state) => state);

//     useEffect( () => {
//         dispatch(fetchFamilyMembers());
//         console.log("State" , state)
//     }, [dispatch])

    

//     return (
//         <div style={{ height: '100%' }}>
//             {
//                 state.todo.data ? <FamilyTree nodes={state.todo.data}  />
//                     :
//                     <div>Hi</div>
//             }


//         </div>
//     );
// }

// export default LandingPage;



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFamilyMembers } from '../../redux/slice/family';
import FamilyTree from '../../mytree';

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFamilyMembers());
    console.log("State", state);
  }, [dispatch]);

  console.log(FamilyTree)

  return (
    <div style={{ height: '100%' }}>
      {state.todo.data ? (
        <FamilyTree nodes={state.todo.data} />
      ) : (
        <div>Hi</div>
      )}
    </div>
  );
};

export default LandingPage;
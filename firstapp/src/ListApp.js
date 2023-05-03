// import React from 'react'

// // const people = [
// // //   'Creola Katherine Johnson: mathematician',
// // //   'Mario José Molina-Pasquel Henríquez: chemist',
// // //   'Mohammad Abdus Salam: physicist',
// // //   'Percy Lavon Julian: chemist',
// // //   'Subrahmanyan Chandrasekhar: astrophysicist',
// // //   'Jibola Jinadu: software Developer',
 
// // {profession: 'chemist'}, {profession: 'chemist'}, {profession: 'chemist'  }

// // ];

// // const people2 = [{
// //     profession: 'mathematician',
// //   }, {

// //     profession: 'chemist',
// //   }, {

// //     profession: 'physicist',
// //   }, {

// //     profession: 'chemist',  
// //   }, {
// //     // name: 'Subrahmanyan Chandrasekhar',
// //     profession: 'astrophysicist',
// //   }];

// const people3 = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];


// const clubs = ['Man Utd', 'Chealse', 'Barcelona',"Everton", 'Real Madrid', 'Liverpool', 'New Castle'];

// const clubList = clubs.map((club, index) =>
//         {return <li key={index}>{club}</li>;});

// // const clubList = clubs.map((club) =>
// //      <p>{club}</p>);

// const chemists = people3.filter((person) => person.id <= 2);
// const chemistList = chemists.map((chemist) =>{
//     return <li>{chemist.name} : {chemist.profession}</li>
// })

// const ListApp = () => {
//   return (
//     <div>
//         {/* <ul>
//             {people.map((person)=>{
//                 return<li>{person}</li>
//             }
//             )}
//         </ul> */}
//         <ol>
//             {clubList}
        
//         </ol>
//         <ol>
//             {chemistList}
//         </ol>
//         {/* <div>
//             <div key={index}>{clubs.map((club, index) => <p>{club}</p>)}</div>
//         </div> */}
//     </div>
//   )
// }

// export default ListApp

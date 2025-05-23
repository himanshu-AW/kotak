import React from 'react'
import {statementsData} from '../../constants'
import { IconStatement,IconMoreHorizontal, IconRightArrow2} from "../../assets/icons";

function AccountQuickActions() {
  return (
    <section className='hidden xl:flex fixed top-14 bottom-0 right-0 w-84 bg-white flex-col gap-8 pt-8 px-6 z-40'>
       <div className="w-[288px] h-[224px] flex flex-col gap-4">
        <h2 className="text-[12px] text-[#00000099] font-medium">STATEMENTS</h2>
        <ul className="space-y-4 flex flex-col gap-[11px] ">
          {statementsData.map((statement, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-[14px] text-[#000000DE] hover:text-blue-600 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <IconStatement className="" />
                <span>{statement.month}</span>
              </div>
              <span>
                <IconRightArrow2 className="" />
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between text-[14px] text-[#000000DE] hover:text-blue-600 cursor-pointer">
            <div className="flex items-center gap-2">
              <IconMoreHorizontal className="" />
              <span>See all</span>
            </div>
            <span>
              <IconRightArrow2 className="" />
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AccountQuickActions






// function AccountQuickActions() {
//   return (
//     <div className="z-20 h-screen fixed top-[56px] right-0 flex flex-col gap-8 max-w-[336px] w-[336px] p-7 bg-white">
//       <div className="w-[288px] h-[224px] gap-4">
//         <h2 className="text-xs text-gray-500 font-medium mb-4">STATEMENTS</h2>
//         <ul className="space-y-4">
//           {statements.map((statement, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between text-sm text-gray-800 hover:text-blue-600 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <IconStatement className="w-5 h-5 text-gray-600" />
//                 <span>{statement.month}</span>
//               </div>
//               <span>
//                 <IconRightArrow2 className="text-[#C0C2C4]" />
//               </span>
//             </li>
//           ))}
//           <li className="flex items-center justify-between text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
//             <div className="flex items-center gap-2">
//               <IconMoreHorizontal className="w-4 h-4 text-gray-600" />
//               <span>See all</span>
//             </div>
//             <span>
//               <IconRightArrow2 className="text-[#C0C2C4]" />
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AccountQuickActions;
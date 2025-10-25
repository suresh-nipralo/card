// import { Mail, Phone, Linkedin } from 'lucide-react';
// import logo from "../assets/logo.png"

// export default function ProfileCard({
//   name,
//   title,
//   bio,
//   email,
//   phone,
//   linkedin,
//   imageUrl
// }) {
//   return (
//     <div className="w-[320px]  mx-auto absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] max-w-[95%]">
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform  duration-300">
//         <div className="bg-[#0E4B81] h-34 text-center relative">
//           <div className="bg-white rounded-b-2xl inline-block px-6 py-2 absolute top-0 left-[50%] translate-x-[-50%] w-[200px]">
//             <img src={logo} alt="" />
//           </div>
//         </div>

//         <div className="flex justify-center -mt-[76px] mb-4 relative z-20">
//           <div className="w-[50%] aspect-square rounded-full overflow-hidden shadow-xl bg-gray-200">
//             {imageUrl ? (
//               <img
//                 src={imageUrl}
//                 alt={name}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
//                 Profile Image
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="text-center px-4     pb-2">
//           <h2 className="text-[1.5rem] font-bold text-[#004c8c] mb-1">
//             {name}
//           </h2>
//           <p className="text-gray-600 text-[1rem]">{title}</p>
//         </div>

//         <div className="px-4 pb-6">
//           <p className="text-gray-700 text-center leading-5 text-sm">
//             {bio}
//           </p>
//         </div>

//         <div className="flex justify-center gap-4 pb-10">
//           {email && (
//             <a
//               href={`mailto:${email}`}
//               className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
//               aria-label="Email"
//             >
//               <Mail className="w-6 h-6 text-white" />
//             </a>
//           )}
//           {phone && (
//             <a
//               href={`tel:${phone}`}
//               className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
//               aria-label="Phone"
//             >
//               <Phone className="w-6 h-6 text-white" />
//             </a>
//           )}
//           {linkedin && (
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-6 h-6 text-white" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function ProfileCard({
  name,
  title,
  bio,
  email,
  phone,
  linkedin,
  imageUrl,
}) {
  const [isScaled, setIsScaled] = useState(false);

  const handleLogoClick = () => {
    setIsScaled(!isScaled);
  };

  return (
   <>
    <div className="w-[320px] mx-auto absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] max-w-[95%]">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300">
        <div className="bg-[#0E4B81] h-34 text-center relative">
          <div
            className="bg-white rounded-b-2xl inline-block px-6 py-2 absolute top-0 left-[50%] translate-x-[-50%] w-[200px] cursor-pointer"
            // Click handler
          >
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="flex justify-center -mt-[76px] mb-4 relative z-20">
          <div
            className={`w-[50%] aspect-square rounded-full overflow-hidden shadow-xl bg-gray-200 transition-transform duration-500`}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
                onClick={handleLogoClick}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Profile Image
              </div>
            )}
          </div>
        </div>

        <div className="text-center px-4 pb-2">
          <h2 className="text-[1.5rem] font-bold text-[#004c8c] mb-1">
            {name}
          </h2>
          <p className="text-gray-600 text-[1rem]">{title}</p>
        </div>

        <div className="px-4 pb-6">
          <p className="text-gray-700 text-center leading-5 text-sm">{bio}</p>
        </div>

        <div className="flex justify-center gap-4 pb-10">
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6 text-white" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#004c8c] rounded-xl flex items-center justify-center hover:bg-[#003d70] transition-colors shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
      {isScaled && (
        <div className="fixed flex justify-center items-center bg-black/50 w-screen h-screen z-50 top-0 left-0"
        onClick={()=> setIsScaled(false)}>
          <img
            src={imageUrl}
            alt={name}
            className="w-[400px] aspect-square object-cover rounded-lg border-2 border-white max-w-[95%]"
          />
        </div>
      )}
   </>
  );
}

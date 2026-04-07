"use client"; 
   
 import { useRouter } from "next/navigation"; 
   
 export default function LoginLiquidMorph() { 
   const router = useRouter(); 
   
   return ( 
     <> 
       <style>{` 
         .lb-liquid { 
           position: relative; 
           overflow: hidden; 
           padding: 10px 24px; 
           border: 1px solid rgba(139, 92, 246, 0.35); 
           border-radius: 9px; 
           cursor: pointer; 
           font-family: var(--font-inter), sans-serif; 
           font-size: 14px; 
           font-weight: 600; 
           background: #05010D; 
           color: #8B5CF6; 
           display: inline-flex; 
           align-items: center; 
           gap: 8px; 
           letter-spacing: 0.01em; 
           transition: color 0.3s ease, border-color 0.3s ease; 
           outline: none; 
           user-select: none; 
         } 
   
         /* The liquid blob that rises up */ 
         .lb-liquid::after { 
           content: ''; 
           position: absolute; 
           width: 200%; 
           height: 200%; 
           top: 110%; 
           left: -50%; 
           background: radial-gradient( 
             ellipse at center, 
             #8B5CF6 0%, 
             #7C3AED 55%, 
             transparent 70% 
           ); 
           transition: top 0.55s cubic-bezier(0.23, 1, 0.32, 1); 
           border-radius: 50%; 
           z-index: 0; 
         } 
   
         .lb-liquid:hover::after { 
           top: -85%; 
         } 
   
         .lb-liquid:hover { 
           color: #ffffff; 
           border-color: rgba(139, 92, 246, 0.65); 
         } 
   
         .lb-liquid:active { 
           transform: scale(0.97); 
         } 
   
         /* Keep icon + text above the blob */ 
         .lb-liquid-inner { 
           position: relative; 
           z-index: 1; 
           display: flex; 
           align-items: center; 
           gap: 8px; 
           pointer-events: none; 
         } 
   
         /* Arrow slides right on hover */ 
         .lb-liquid-arrow { 
           transition: transform 0.28s cubic-bezier(0.23, 1, 0.32, 1); 
         } 
   
         .lb-liquid:hover .lb-liquid-arrow { 
           transform: translateX(4px); 
         } 
       `}</style> 
   
       <button 
         className="lb-liquid" 
         onClick={() => router.push("/login")} 
         aria-label="Log in to your account" 
       > 
         <span className="lb-liquid-inner"> 
   
           {/* Lock icon */} 
           <svg 
             width="15" 
             height="15" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
           > 
             <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /> 
             <path d="M7 11V7a5 5 0 0110 0v4" /> 
           </svg> 
   
           Log In 
   
           {/* Arrow icon */} 
           <svg 
             className="lb-liquid-arrow" 
             width="15" 
             height="15" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
           > 
             <path d="M5 12h14M12 5l7 7-7 7" /> 
           </svg> 
   
         </span> 
       </button> 
     </> 
   ); 
 } 


// "use client";
// import React, { useState, useEffect } from "react";
// import UICenter from "@/src/components/feed/UICenter";
// import UILeft from "@/src/components/feed/UILeft";
// import UIRight from "@/src/components/feed/UIRight";
// import { FeedView } from "@/src/types/feedTypes";

// const Page = () => {
//   // État pour la vue actuelle
//   const [currentView, setCurrentView] = useState<FeedView>('feed');

//   // État pour suivre la taille de l'écran
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );

//   // États pour contrôler the visibilité des panneaux
//   const [showLeft, setShowLeft] = useState(true);
//   const [showRight, setShowRight] = useState(true);

//   useEffect(() => {
//     // Initialiser la largeur de la fenêtre
//     setWindowWidth(window.innerWidth);

//     // Gérer le redimensionnement
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Logique pour déterminer quels panneaux afficher en fonction de la largeur
//   useEffect(() => {
//     if (windowWidth < 768) {
//       setShowLeft(false);
//       setShowRight(false);
//     } else if (windowWidth < 1024) {
//       setShowLeft(true);
//       setShowRight(false);
//     } else {
//       setShowLeft(true);
//       setShowRight(true);
//     }
//   }, [windowWidth]);

//   // Fonctions pour basculer manuellement la visibilité
//   const toggleLeftPanel = () => setShowLeft(!showLeft);
//   const toggleRightPanel = () => setShowRight(!showRight);

//   // Fonction pour changer la vue
//   const handleViewChange = (view: FeedView) => {
//     setCurrentView(view);
//   };

//   return (
//     <div className="flex h-screen max-w-[1600px] mx-auto">
//       <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
//         {/* Colonne de gauche */}
//         <div
//           className={`
//             transition-all duration-300 ease-in-out
//             ${showLeft ? "md:block" : "hidden"}
//             md:w-[160px] lg:w-[200px] xl:w-[240px]
//             flex-shrink h-full overflow-hidden
//           `}
//         >
//           <UILeft onViewChange={handleViewChange} currentView={currentView} />
//         </div>

//         {/* Colonne centrale */}
//         <div className="flex-1 flex-grow min-w-[320px] w-full h-full overflow-y-auto scrollbar-hide">
//           <UICenter currentView={currentView} />
//         </div>

//         {/* Colonne de droite */}
//         <div
//           className={`
//           transition-all duration-300 ease-in-out
//           ${showRight ? "md:block" : "hidden"}
//           md:w-[220px] lg:w-[280px] xl:w-[320px]
//           flex-shrink h-full overflow-hidden
//         `}
//         >
//           <UIRight />
//         </div>
//       </div>

//       {/* Boutons de contrôle */}
//       <div className="fixed bottom-4 left-4 z-10 flex gap-2">
//         <button
//           onClick={toggleLeftPanel}
//           className="bg-blue-500 text-white p-2 rounded-full shadow-lg md:hidden"
//         >
//           {showLeft ? "Masquer menu" : "Afficher menu"}
//         </button>
//       </div>

//       <div className="fixed bottom-4 right-4 z-10">
//         <button
//           onClick={toggleRightPanel}
//           className="bg-blue-500 text-white p-2 rounded-full shadow-lg md:hidden"
//         >
//           {showRight ? "Masquer infos" : "Afficher infos"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;


"use client";
import React, { useState, useEffect } from "react";
import UICenter from "@/src/components/feed/UICenter";
import UILeft from "@/src/components/feed/UILeft";
import UIRight from "@/src/components/feed/UIRight";
import { FeedView } from "@/src/types/feedTypes";

const Page = () => {
  // État pour la vue actuelle
  const [currentView, setCurrentView] = useState<FeedView>('feed');

  // État pour suivre la taille de l'écran
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // États pour contrôler the visibilité des panneaux
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    // Initialiser la largeur de la fenêtre
    setWindowWidth(window.innerWidth);

    // Gérer le redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logique pour déterminer quels panneaux afficher en fonction de la largeur
  useEffect(() => {
    if (windowWidth < 768) {
      // Mobile: masquer les deux panneaux latéraux, plein écran pour le centre
      setShowLeft(false);
      setShowRight(false);
    } else if (windowWidth < 1024) {
      // Tablette: afficher seulement le panneau de gauche
      setShowLeft(true);
      setShowRight(false);
    } else if (windowWidth < 1440) {
      // Desktop moyen: afficher les deux panneaux mais avec des tailles optimisées
      setShowLeft(true);
      setShowRight(true);
    } else {
      // Grand écran: afficher tout avec des tailles maximales
      setShowLeft(true);
      setShowRight(true);
    }
  }, [windowWidth]);

  // Fonctions pour basculer manuellement la visibilité
  const toggleLeftPanel = () => setShowLeft(!showLeft);
  const toggleRightPanel = () => setShowRight(!showRight);

  // Fonction pour changer la vue
  const handleViewChange = (view: FeedView) => {
    setCurrentView(view);
  };

  return (
    <div className="flex w-full max-w-[1600px] mx-auto pt-4">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-4 w-full min-h-screen">
        {/* Colonne de gauche */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${showLeft ? "block" : "hidden"}
            w-full md:w-[160px] lg:w-[200px] xl:w-[240px]
            md:flex-shrink-0 h-screen
          `}
        >
          <div className="h-full overflow-y-auto scrollbar-custom">
            <UILeft onViewChange={handleViewChange} currentView={currentView} />
          </div>
        </div>

        {/* Colonne centrale */}
        <div className="flex-1 min-w-[280px] w-full h-screen">
          <div className="h-full overflow-y-auto scrollbar-hide">
            <UICenter currentView={currentView} />
          </div>
        </div>

        {/* Colonne de droite - SANS SCROLL */}
        <div
          className={`
          transition-all duration-300 ease-in-out
          ${showRight ? "lg:block" : "hidden"}
          w-full lg:w-[220px] xl:w-[280px] 2xl:w-[320px]
          lg:flex-shrink-0 h-screen overflow-hidden
        `}
        >
          <UIRight />
        </div>
      </div>

      {/* Boutons de contrôle mobile */}
      <div className="fixed bottom-4 left-4 z-10 flex gap-2 md:hidden">
        <button
          onClick={toggleLeftPanel}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg text-xs"
        >
          {showLeft ? "🔽" : "📋"}
        </button>
      </div>

      <div className="fixed bottom-4 right-4 z-10 md:hidden">
        <button
          onClick={toggleRightPanel}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg text-xs"
        >
          {showRight ? "🔽" : "ℹ️"}
        </button>
      </div>
    </div>
  );
};

export default Page;

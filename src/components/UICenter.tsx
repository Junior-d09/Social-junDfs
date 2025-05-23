import React from 'react';
import ContenuCard from './ContenuCard'; // Votre composant existant pour le fil d'actualité
import StoryCard from './StoryCard'; // Si vous avez déjà ce composant

// Créez de nouveaux composants pour chaque section
// Exemple de composant pour la section Amis
const FriendsContent = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Amis</h2>
      
      {/* Section demandes d'amis */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-3">Demandes d'amis (3)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3].map((friend) => (
            <div key={friend} className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gray-300 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-medium">Utilisateur {friend}</p>
                <p className="text-sm text-gray-500">5 amis en commun</p>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                    Accepter
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                    Refuser
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section suggestions d'amis */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-3">Suggestions d'amis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((friend) => (
            <div key={friend} className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gray-300 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-medium">Suggestion {friend}</p>
                <p className="text-sm text-gray-500">12 amis en commun</p>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                    Ajouter
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exemple de composant pour la section Vidéos
const VideosContent = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Vidéos</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">En direct</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">Pour vous</button>
        </div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3].map((video) => (
          <div key={video} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Vidéo {video}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="font-medium">Chaîne {video}</p>
                  <p className="text-xs text-gray-500">Il y a {video} heure(s)</p>
                </div>
              </div>
              <p className="font-medium">Titre de la vidéo {video}</p>
              <p className="text-sm text-gray-500">{video * 125}K vues</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple de composant pour la section Notifications
const NotificationsContent = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Notifications</h2>
      
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((notif) => (
          <div key={notif} className="bg-white rounded-lg border border-gray-200 p-3 flex items-center space-x-3 hover:bg-gray-50 cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              notif % 3 === 0 ? 'bg-blue-100 text-blue-500' : 
              notif % 3 === 1 ? 'bg-red-100 text-red-500' : 
              'bg-green-100 text-green-500'
            }`}>
              <span className="font-bold">{notif}</span>
            </div>
            <div>
              <p>
                <span className="font-semibold">Utilisateur {notif}</span>
                <span className="text-gray-600"> a {
                  notif % 3 === 0 ? 'aimé votre publication' : 
                  notif % 3 === 1 ? 'commenté votre photo' : 
                  'accepté votre demande d\'ami'
                }.</span>
              </p>
              <p className="text-xs text-gray-500">Il y a {notif} heure(s)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple de composant pour la section Marketplace
const MarketplaceContent = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Marketplace</h2>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">Vendre</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="h-40 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Produit {item}</span>
            </div>
            <div className="p-3">
              <p className="font-bold">{item * 50} €</p>
              <p className="text-sm">Produit {item}</p>
              <p className="text-xs text-gray-500">Paris, France</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple de composant pour la section Images
const ImagesContent = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Images</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img) => (
          <div key={img} className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:opacity-90">
            <span className="text-gray-500">Image {img}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple pour les contenus de groupe
const GroupContent = ({ groupName }) => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">{groupName}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="mb-4">Bienvenue dans le groupe {groupName}.</p>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">1.2K</span>
            <span className="text-gray-500 text-sm">membres</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">5</span>
            <span className="text-gray-500 text-sm">publications aujourd'hui</span>
          </div>
        </div>
      </div>
      
      {/* Quelques publications du groupe */}
      <div className="space-y-4">
        {[1, 2].map((post) => (
          <div key={post} className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <span className="text-black font-semibold block">Membre {post}</span>
                <div className="text-sm text-gray-500">Il y a {post} heure(s)</div>
              </div>
            </div>
            <div className="text-gray-900 my-2">
              Publication dans le groupe {groupName}. Ce contenu est spécifique à ce groupe.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant principal UICenter qui gère le contenu dynamique
interface UICenterProps {
  activePath: string;
}

const UICenter: React.FC<UICenterProps> = ({ activePath }) => {
  // Fonction pour rendre le contenu en fonction du chemin actif
  const renderContent = () => {
    switch (activePath) {
      case '/':
        return <ContenuCard />;
      case '/amis':
        return <FriendsContent />;
      case '/videos':
        return <VideosContent />;
      case '/notifications':
        return <NotificationsContent />;
      case '/marketplace':
        return <MarketplaceContent />;
      case '/images':
        return <ImagesContent />;
      case '/evenements':
        return <div className="p-4"><h2 className="text-xl font-bold">Événements</h2></div>;
      case '/groups/behance':
        return <GroupContent groupName="Behance Group" />;
      case '/groups/dribbble':
        return <GroupContent groupName="Dribbble club Designer" />;
      case '/groups/webdesign':
        return <GroupContent groupName="Web Design Community" />;
      default:
        return <ContenuCard />;
    }
  };

  return (
    <div className="flex-1 bg-gray-100">
      {/* Si c'est la page d'accueil, afficher StoryCard */}
      {activePath === '/' && <StoryCard />}
      
      {/* Contenu principal */}
      <div className="bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default UICenter;
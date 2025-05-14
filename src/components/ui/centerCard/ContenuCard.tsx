import { Heart, MessageCircle, Share } from "lucide-react";
import Image from "next/image";
import React from "react";
import assets from "@/src/constants/icons";

const posts = [
  {
    id: "1",
    username: "@damianexoudji",
    name: "Damiane Exoudji",
    avatar: "/assets/images/avatar.jpg", // Utilisez assets.EmptyUser si vous n'avez pas d'image
    time: "Il y a 2h",
    text: "Voici un post avec texte et images.",
    images: ["/assets/images/ccc.jpg", "/assets/images/jun.jpg"],
    likes: 2000,
    comments: 50,
    shares: 30,
  },
  {
    id: "2",
    username: "@john_doe",
    name: "John Doe",
    avatar: "/assets/images/avatar2.jpg",
    time: "Il y a 5h",
    // text: "Un autre exemple de post avec texte et image.",
    images: ["/assets/images/dfs.jpg", "/assets/images/pio.jpg"],
    likes: 1500,
    comments: 30,
    shares: 20,
  },
  {
    id: "3",
    username: "@textonly",
    name: "Text Only",
    avatar: "/assets/images/avatar3.jpg",
    time: "Il y a 1h",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque, voluptatem, quia, dolores, consequuntur.. lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque, voluptatem, quia, dolores, consequuntur...",
    images: [], // Aucune image ici
    likes: 500,
    comments: 10,
    shares: 5,
  },
  {
    id: "4",
    username: "@anothertext",
    name: "Another Text",
    avatar: "/assets/images/avatar4.jpg",
    time: "Il y a 3h",
    text: "Le texte de cet article est très long, et il y a beaucoup de contenu à lire. Il est important de bien lire les articles et de les partager avec les personnes qui ont des intérêts similaires. Lorsque vous lisez un article, vous devez vous concentrer sur les informations importantes et les lire attentivement.",
    images: [], // Aucun média ici
    likes: 800,
    comments: 20,
    shares: 10,
  },
];

const ContenuCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-gray-100 rounded-lg border border-gray-200">
            {/* Profil et infos */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={assets.EmptyUser}
                  alt={post.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <span className="text-black font-semibold block">{post.name}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.username}</span>
                  <span className="mx-1">•</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>

            {/* Texte du post */}
            {post.text && (
              <div className="text-gray-800 my-2">{post.text}</div>
            )}

            {/* Images */}
            {post.images.length > 0 && (
              <div className={`grid ${post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 my-2`}>
                {post.images.map((image, index) => (
                  <div
                    key={`${post.id}-img-${index}`}
                    className="relative w-full pt-[56.25%]" // Aspect ratio 16:9
                  >
                    <Image
                      src={image}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg absolute top-0 left-0"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Ligne de séparation */}
            <div className="border-t border-gray-300 my-2"></div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Heart size={18} />
                  <span>{post.likes} Likes</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <MessageCircle size={18} />
                  <span>{post.comments} Commentaires</span>
                </div>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Share size={18} />
                <span>{post.shares} Partager</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContenuCard;
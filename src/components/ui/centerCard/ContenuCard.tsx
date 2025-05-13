import { Heart, MessageCircle, Share } from "lucide-react";
import Image from "next/image";
import React from "react";

const posts = [
  {
    id: "1",
    username: "@damianexoudji",
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
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-green-800 text-lg font-semibold mb-2"></h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-gray-200 rounded-lg">
            {/* profil et infos */}
            <div className="flex items-center space-x-2">
              <span className="text-black font-semibold">{post.username}</span>
              <span className="text-sm text-gray-500">{post.time}</span>
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

            {/* ligne et séparation */}
            <div className="border-t border-gray-300 my-2"></div>

            {/* Actions */}
            <div className="flex flex-wrap justify-between text-sm text-gray-600 mt-2">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Heart size={18} />
                  <span>{post.likes} Likes</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <MessageCircle size={18} />
                  <span>{post.comments} Commentaires</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Share size={18} />
                  <span>{post.shares} Partager</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContenuCard;
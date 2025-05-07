import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { Star, Trophy, Zap, Shirt } from "lucide-react";

const players = [
  {
    id: 1,
    name: "Lionel Messi",
    image:
      "https://th.bing.com/th/id/OIP.ldpkdaCRrzDqaFn8LpTcuQHaE8?cb=iwp1&rs=1&pid=ImgDetMain",
    bio: "Lionel Messi, born June 24, 1987, is an Argentine professional footballer widely regarded as one of the greatest players of all time. Known for his incredible dribbling, vision, and goal-scoring ability, Messi has won multiple Ballon d'Or awards and has enjoyed successful stints at FC Barcelona and Paris Saint-Germain.",
    stats: {
      goals: 821,
      assists: 361,
      trophies: 44,
      clubs: ["Barcelona", "PSG", "Inter Miami"],
      rating: 93,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    image:
      "https://cdn.vox-cdn.com/thumbor/3cttoixeZE0gU6TJEO1y1pv7-KU=/0x0:3796x2808/1200x800/filters:focal(1579x730:2185x1336)/cdn.vox-cdn.com/uploads/chorus_image/image/59865493/962792726.jpg.0.jpg",
    bio: "Cristiano Ronaldo, born February 5, 1985, is a Portuguese professional footballer widely regarded as one of the greatest players of all time. Also recognized for his incredible athleticism, finishing skills, and leadership. Ronaldo has played for top clubs such as Manchester United, Real Madrid, Juventus, and is known for his consistency in scoring goals. He has won numerous titles, including five Ballon d'Or awards.",
    stats: {
      goals: 885,
      assists: 234,
      trophies: 34,
      clubs: [
        "Sporting CP",
        "Man United",
        "Real Madrid",
        "Juventus",
        "Al Nassr",
      ],
      rating: 92,
    },
  },
  {
    id: 3,
    name: "Neymar Jr.",
    image:
      "https://th.bing.com/th/id/OIP.6IBhxhzE_v434ChYUpiJTAHaEo?cb=iwp1&rs=1&pid=ImgDetMain",
    bio: "Neymar Jr., born February 5, 1992, is a Brazilian forward known for his flair, creativity, and skill on the ball. He has played for clubs like Santos, Barcelona, and Paris Saint-Germain, where he became one of the most expensive players in history. Neymar is renowned for his dribbling, pace, and goal-scoring ability, making him one of the top players of his generation.",
    stats: {
      goals: 437,
      assists: 276,
      trophies: 27,
      clubs: ["Santos", "Barcelona", "PSG", "Al Hilal"],
      rating: 89,
    },
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    image:
      "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/02/27/3582549-72960148-2560-1440.jpg",
    bio: "Kylian Mbappé, born December 20, 1998, is a French footballer known for his blistering speed, technical ability, and goal-scoring prowess. He made his professional debut at Monaco and quickly became one of the brightest young stars in the world. Mbappé was a key player in France's 2018 World Cup victory and continues to shine at Paris Saint-Germain.",
    stats: {
      goals: 298,
      assists: 143,
      trophies: 16,
      clubs: ["Monaco", "PSG"],
      rating: 91,
    },
  },
  {
    id: 5,
    name: "Mohamed Salah",
    image:
      "https://th.bing.com/th/id/OIP.KFADnP3dsUTLJbaNJq2kDQHaFy?o=7&cb=iwp1rm=3&rs=1&pid=ImgDetMain",
    bio: "Mohamed Salah, born June 15, 1992, is an Egyptian winger renowned for his pace, dribbling, and finishing ability. After rising to prominence at AS Roma, Salah joined Liverpool, where he became one of the Premier League's top scorers and helped lead the team to a Champions League title in 2019 and a Premier League title in 2020.",
    stats: {
      goals: 332,
      assists: 142,
      trophies: 13,
      clubs: ["Basel", "Chelsea", "Fiorentina", "Roma", "Liverpool"],
      rating: 90,
    },
  },
];

const PlayerCard = ({ player, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer relative group"
    >
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-purple-500/30 h-full">
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
              <h3 className="text-xl font-bold text-white">{player.name}</h3>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 w-4 h-4 mr-1" />
                <span className="text-sm text-white">
                  {player.stats.rating}/100
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {player.bio}
              </p>
            </div>
          </div>
        </div>
        <CardContent className="p-4 bg-gray-800/50 backdrop-blur-sm">
          <div className="flex justify-between text-sm text-gray-300">
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
              <span>{player.stats.trophies}</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-1 text-blue-400" />
              <span>{player.stats.goals}</span>
            </div>
            <div className="flex items-center">
              <Shirt className="w-4 h-4 mr-1 text-purple-400" />
              <span>{player.stats.clubs.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function PlayerBio() {
  const navigate = useNavigate();

  const handleCardClick = (player) => {
    navigate(`/player-bio/${player.id}`, { state: { player } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-white sm:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Football Legends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto text-lg text-gray-300"
          >
            Explore the careers of the greatest football players of our
            generation
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
        >
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={() => handleCardClick(player)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

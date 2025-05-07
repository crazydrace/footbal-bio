import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Goal, Zap, Users } from "lucide-react";

export default function PlayerBioDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const player = location.state?.player;

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        Player not found!
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 flex items-center text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" />
          Back to Players
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
        >
          <div className="md:flex">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 relative"
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover min-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="translate-y-4 hover:translate-y-0 transition-transform duration-300"
                >
                  <h2 className="text-4xl font-bold text-white">
                    {player.name}
                  </h2>
                </motion.div>
              </div>
            </motion.div>

            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  {player.name}'s Career
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {player.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/50 rounded-xl p-4 flex items-center"
                  >
                    <Trophy className="text-yellow-400 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Trophies</p>
                      <p className="text-xl font-bold text-white">
                        {player.stats.trophies}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/50 rounded-xl p-4 flex items-center"
                  >
                    <Goal className="text-green-400 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Goals</p>
                      <p className="text-xl font-bold text-white">
                        {player.stats.goals}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/50 rounded-xl p-4 flex items-center"
                  >
                    <Zap className="text-blue-400 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Assists</p>
                      <p className="text-xl font-bold text-white">
                        {player.stats.assists}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/50 rounded-xl p-4 flex items-center"
                  >
                    <Users className="text-purple-400 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Clubs</p>
                      <p className="text-xl font-bold text-white">
                        {player.stats.clubs.length}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Clubs Played For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {player.stats.clubs.map((club, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                      >
                        {club}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

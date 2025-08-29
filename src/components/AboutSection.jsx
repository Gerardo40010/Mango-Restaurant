import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    rotate: -5
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.2
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      staggerChildren: 0.1
    }
  }
};

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header con animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Sobre <span className="text-orange-600">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce la historia detrás de Mango Restaurant y nuestra pasión por la gastronomía
          </p>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Imagen con animación */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior del restaurante" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              whileHover={{ 
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            />
            {/* Efecto de brillo en hover */}
            <motion.div
              className="absolute inset-0 bg-orange-500 opacity-0 rounded-2xl mix-blend-overlay"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Texto con animaciones escalonadas */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-900/30"
            >
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                🏆 Nuestra Historia
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Desde 2025, Mango Restaurant ha sido un referente en la gastronomía tarijeña. 
                Comenzamos como un pequeño café y hoy somos un restaurante reconocido por 
                nuestra calidad y servicio excepcional.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-900/30"
            >
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                🌟 Nuestra Filosofía
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Creemos en ingredientes frescos, preparaciones artesanales y sabores auténticos. 
                Cada plato cuenta una historia y cada cliente se convierte en parte de nuestra familia.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-900/30"
            >
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                💚 Compromiso con la Calidad
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Trabajamos con productores locales, utilizamos ingredientes de temporada y 
                nos esforzamos por reducir nuestro impacto ambiental en cada proceso.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Estadísticas con animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              variants={statItemVariants}
              className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2"
            >
              3+
            </motion.div>
            <motion.div
              variants={statItemVariants}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              Años de experiencia
            </motion.div>
          </motion.div>

          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              variants={statItemVariants}
              className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2"
            >
              500+
            </motion.div>
            <motion.div
              variants={statItemVariants}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              Clientes satisfechos diarios
            </motion.div>
          </motion.div>

          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              variants={statItemVariants}
              className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2"
            >
              50+
            </motion.div>
            <motion.div
              variants={statItemVariants}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              Platos en nuestro menú
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Elemento decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              transition: { 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
            className="inline-block text-6xl mb-4"
          >
            🥭
          </motion.div>
          <p className="text-gray-500 dark:text-gray-400 italic">
            "Cada plato es una obra de arte, cada cliente es nuestra inspiración"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
const Footer = () => {
  return <footer className="bg-black py-10 border-t border-cyberpunk-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-cyberpunk-purple">Cyber</span>
              <span className="text-cyberpunk-neon">Crack</span>
              
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Site éducatif créé à des fins de sensibilisation.
              <br />
              Cyberpunk 2077 est une marque déposée de CD Projekt.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            
            <p className="text-gray-500 mt-2 font-extralight text-xs text-right py-px mx-0 px-0 my-[23px]">© 2025 Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
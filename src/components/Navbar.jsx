export const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">                               
                <a
                    href="/project_portfolio_react/CV_rasamimanana_venance_herihasina.pdf"
                    download="CV_rasamimanana_venance_herihasina.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-indigo-500/20 hover:scale-105 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                    </svg>
                    Download CV
                </a>


                {/* hamburger btn for mobile */}
                <div className="w-7 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen( (prev) => !prev )}
                >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        {" "} Home {" "}
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                        {" "} About {" "}
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        {" "} Projects {" "}
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        {" "} Contact {" "}
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
}
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () =>{
    return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"        
    >
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-indigo-500
 bg-clip-text text-transparent leading-right">
                    Hi, I'm Herihasina
                </h1>
                <p className="text-white-400 text-lg mb-8 max-w-lg mx-auto">
                    Having completed my Bachelor’s degree in Computer Science and my first year of a Master’s program (M1), I am currently seeking a position that will allow me to progress in my professional career.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-indigo-500 text-slate-950 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:transalte-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                    <a href="#contact" className="border border-indigo-500/50 text-indigo-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:transalte-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-indigo-500/20">Contact Me</a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
    );

}
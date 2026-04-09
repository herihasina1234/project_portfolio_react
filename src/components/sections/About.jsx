import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "Angular",
        "React",
        "Vue",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "Bootstrap",
        "JSP",
    ];

    const backendSkills = [
        "Node.js", 
        "PHP", 
        "Python", 
        "Django",
        "JAVA",
        "SpringBoot",
        "JPA",
        "Hibernate",
        "WEKA",
        "PHP",
        "CodeIgniter",
        "Symfony",
        ".NET"
    ];

    const dataSkills = [       
        "MongoDB", 
        "MySQL",
        "PostgreSQL",
        "SQLServer",
        "Oracle Database 12c",  
        "SQLite"
    ];

    const desktop = [
        "Tauri",
        "Python KIVI",
        "JAVA SWING"
    ];

    const webApis = [
        "REST",
        "SOAP"
    ];

    const mobile = [
        "JAVA ANDROID",
        "IONIC"
    ];

    const deployments = [
        "Git",
        "Github",
        "Vercel"
    ];

    const methods = [
        "UML", 
        "Merise",
        "Agile",
        "Scrum", 
        "Design Patterns"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>                
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate Developer with great patience, perseverance, and potential.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Desktop</h3>
                                <div className="flex flex-wrap gap-2">
                                    {desktop.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Web & API</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webApis.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Mobile</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mobile.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Database</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dataSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Deployment</h3>
                                <div className="flex flex-wrap gap-2">
                                    {deployments.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Methods</h3>
                                <div className="flex flex-wrap gap-2">
                                    {methods.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-indigo-500/10 text-slate-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> First year of a Master’s degree in Computer Science. </strong> - IT University
                                    (2023-2024)
                                </li>
                                <li>
                                    <strong> Bachelor’s degree in Computer Science with a focus on Databases and Networking. </strong> - IT University
                                    (2019-2022)
                                </li>                            
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Internship for the completion of the Bachelor’s degree (September 2021 - December 2021)
                                    </h4>
                                    <p>
                                        Development and implementation of a web and a mobile server monitoring system.
                                    </p>
                                </div>                            
                            </div>
                        </div>                    
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
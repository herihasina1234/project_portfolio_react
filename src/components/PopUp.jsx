export const Popup = ({ message, type = "success", onClose}) => { 
    const colors = type === "success" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : "bg-red-500/10 text-red-500 hover:bg-red-500/20";
    
  return (
    <>
    <div className="fixed inset-0 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg flex items-center justify-center z-50">
        <div
        className={`relative p-6 rounded-lg shadow-lg max-w-sm w-auto text-center ${colors} hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all`}
        >
            <p className="mt-4">{message}</p>       
            {/* Bouton fermer */}
            <button
                onClick={onClose}
                className="absolute top-1 right-2 text-gray-500 text-2xl hover:text-gray-700"
            >
                &times;
            </button>
        </div>
    </div>
    </>
  );
}
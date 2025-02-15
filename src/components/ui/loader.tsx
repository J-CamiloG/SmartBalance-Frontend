export function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="relative w-16 h-16">
                <div className="absolute w-16 h-16 border-4 border-white/20 rounded-full"></div>
                <div className="absolute w-16 h-16 border-4 border-[#00FFC2] rounded-full border-t-transparent animate-spin"></div>
            </div>
        </div>
    )
}

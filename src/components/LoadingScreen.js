export function LoadingScreen(){
    return(
        <div className="loading-screen fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-neon-blue rounded-full animate-spin mb-4"/>
            <p className="text-neon-blue text-lg font-light animate-pulse">Loading pose estimation model...</p>
            <p className="text-neon-green text-sm mt-2">Please enable your camera</p>
        </div>
    )
}

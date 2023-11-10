const Loading = () => {

    return <div className='fixed top-0 left-0 bottom-0 right-0 bg-lightBlack bg-opacity-80 z-20'>
        <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-24 w-24 opacity-100'>
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
        <p className='font-semibold flex justify-center text-center text-xl mt-5 text-white'>Loading...</p>
        </div>
    </div>
}

export default Loading;